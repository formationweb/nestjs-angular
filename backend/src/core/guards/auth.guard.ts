import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UsersService } from "../../users/users.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        //private jwtService: JwtService,
        private userService: UsersService
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        return true
    }
}