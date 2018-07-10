export default `
    type User {
        _id: ID
        firstName: String
        email: String
        createdAt: Float
        updatedAt: Float
    }

    extend type Query {
        userFindMany: [User]
        userFindOne( userId: ID): User
    }

    extend type Mutation {
        userCreateOne(
            firstName: String
            lastName: String
            email: String
        ): User
        userDeleteOne( userId: ID): Boolean
    }
`