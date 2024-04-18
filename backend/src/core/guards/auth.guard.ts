import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../../users/users.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private userService: UsersService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = request.headers['x-access-token']
        if (!token) {
            return false
        }
        const decoded = await this.jwtService.verify(token)
        const { userId } = decoded
        request.user = await this.userService.findOne(userId)
        return true
    }
}