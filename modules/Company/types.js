export default `
    type Company {
        _id: ID
        name: String
        createdAt: Float
        updatedAt: Float
    }

    extend type Query {
        companyFindOne: Company
        companyFindMany: Company 
    }
`