export class UsersService {
    findAll() {
        return [
            {
                id: 1,
                name: 'test'
            }
        ]
    }

    findOne(id: number) {
        return {
            id,
            name: 'test'
        }
    }

    create(payload) {
        console.log(payload)
        return {
            id: 10,
            name: 'newname'
        }
    }
}