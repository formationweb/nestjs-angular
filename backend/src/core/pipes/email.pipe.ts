import { BadRequestException, PipeTransform } from "@nestjs/common";
import validator from 'validator';
import { ErrorMessage } from "../enums/error";

export class EmailValidationPipe implements PipeTransform {
    transform(payload: { email: string }) {
        let email = payload.email

        if (!email) {
            throw new BadRequestException(ErrorMessage.EmailEmpty)
        }

        email = email.toLowerCase().trim()

        if (!validator.isEmail(email)) {
            throw new BadRequestException(ErrorMessage.EmailInvalid)
        }

        return {
            ...payload,
            email
        }
    }
}