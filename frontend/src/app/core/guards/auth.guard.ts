import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../services/users.service";

export function authGuard(): boolean {
    const userService = inject(UsersService)
    const router = inject(Router)

    // // pas de token
    // if (true) {
    //     router.navigateByUrl('/login')
    //     return false
    // }

    return true
}