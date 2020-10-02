
const UserSchema = {
    name: 'users',
    

    properties: {
        name: 'string',
        email: 'string',
        password: {type: 'string'}
    }
}

export default UserSchema