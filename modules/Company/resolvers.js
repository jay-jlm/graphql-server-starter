

export const queries = {
    companyFindOne: async (parent, { companyId }, { models }) => {
        const { Company } = models
        return await Company.findOne( { _id: companyId } )
    },
    companyFindMany: async (parent, args, { models }) => { // TODO: implement pagination & filtering
        const { Company } = models
        return await Company.find( {} )
    }
}

export const mutations = {
    companyCreateOne: async (parent, { args }, { models }) => {
        const { Company } = models
        return await new Company().save()
        return user
    }
}