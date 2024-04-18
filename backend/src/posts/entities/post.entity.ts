import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../../users/entities/user.entity";

@Table({
    tableName: 'post'
})
export class Post extends Model {
    @Column
    title: string

    @Column
    content: string

    @ForeignKey(() => User)
    @Column
    userId: number

    @BelongsTo(() => User)
    user: User
}