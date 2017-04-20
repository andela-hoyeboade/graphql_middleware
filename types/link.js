const { GraphQLString, GraphQLList } = require('graphql');

const LinkType = new GraphQLObjectType({
    name: 'FormVideo',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            pagePath: {
                type: GraphQLString
            },
            externalURL: {
                type: GraphQLString
            },
            category: {
                type: GraphQLList(CategoryType)
            }
        }
    }
});

module.exports = LinkType;