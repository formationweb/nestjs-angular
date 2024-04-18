import * as bcrypt from 'bcrypt';
import { BeforeCreate, BeforeUpdate, Column, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "../../posts/entities/post.entity";

@Table({
    tableName: 'user'
})
export class User extends Model {
    @Column
    name: string

    @Column
    email: string

    @Column
    password: string

    @HasMany(() => Post)
    posts: Post[]

    @BeforeCreate
    @BeforeUpdate
    static async hashPassword(user: User) {
        if (user.password) {
            const salt = await bcrypt.genSalt()
            user.password = await bcrypt.hash(user.password, salt)
        }
    }
}