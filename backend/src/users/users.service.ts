import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    findAll(): Promise<User[]> {
        return this.userModel.findAll()
    }

    findOne(id: number): Promise<User> {
        return this.userModel.findByPk(id).then((user) => {
            user.password = undefined
            return user
        })
    }

    create(payload: CreateUserDto): Promise<User> {
        return this.userModel.create(payload as any)
    }
}