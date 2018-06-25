export const query = {
    getArticles: async (parent, args, { models }) => {
        const { Article } = models
        const articles = await Article.find(args)
        return articles
    },
    getArticleById: async (parent, args, { models }) => {
        const { Article } = models
        const article = await Article.findOne(args)
        return article
    }
}

export const Article = {
    user: async (parent, args, { models }) => {
        const { User } = models
        const user = await User.findOne({_id: parent.user})
        return user
    }
}