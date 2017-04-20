const { GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const PostType = new GraphQLObjectType({
    name: 'Post',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            slug: {
                type: GraphQLString
            },
            author: {
                type: GraphQLList()
            },
            body: {
                type: GraphQLString
            },
            category: {
                type: GraphQLList(CategoryType)
            },
            tags: {
                type: GraphQLList(TagType)
            },
            featureImage: {
                type: featureImageType
            },
            date: {
                type: GraphQLString
            },
            comments: {
                type: GraphQLBoolean
            }
        }
    }
});

module.exports = PostType;