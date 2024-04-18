import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

export interface LoginResponse {
    token: string
}

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async login(email: string, password: string): Promise<LoginResponse> {
        const user = await this.usersService.findByEmail(email)
        if (!user) {
            throw new UnauthorizedException()
        }
        const bool = await bcrypt.compare(password, user.password)
        if (!bool) {
            throw new UnauthorizedException()
        }
        return {
            token: this.jwtService.sign({
                userId: user.id
            })
        }
    }
}
