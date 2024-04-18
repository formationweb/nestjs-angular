import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, LoginResponse } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @Post('login') 
    login(@Body() payload: { email: string, password: string }): Promise<LoginResponse> {
        return this.authService.login(payload.email, payload.password)
    }
}
