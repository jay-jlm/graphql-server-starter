export const queries = {
    getUsers: async (parent, args, { models }) => {
        const { User } = models
        const user = await User.find(args)
        return user
    },
    getUserById: async (parent, args, { models }) => {
        const { User } = models
        const user = await User.findOne(args)
        return user
    }
}

export const mutations = {
    userCreateOne: async (parent, { userInfo, companyInfo} , { models }) => {
        const { User } = models
        if (companyInfo) {
            try {
                res = await new Company(args.companyInfo).save()
                userInfo.companyId = res._id
            }catch (err){
                return   
            }
        } 
        const user = await new User(userInfo).save()
        return user
    }
}

