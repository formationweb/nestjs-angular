import { BadRequestException, ParseIntPipe } from "@nestjs/common";
import { ErrorMessage } from "../enums/error";

export class CustomIntPipe extends ParseIntPipe {
    constructor() {
        super({
            errorHttpStatusCode: 400,
            exceptionFactory(error) {
                return new BadRequestException(ErrorMessage.BadId)
            },
        })
    }
}