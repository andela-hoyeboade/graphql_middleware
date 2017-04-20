const { GraphQLString, GraphQLList } = require('graphql');

const PageContainerType = new GraphQLObjectType({
    name: 'PageContainer',

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
            keywords: {
                type: GraphQLList(KeywordType)
            },
            description: {
                type: GraphQLString
            },
            entries: {
                type: GraphQLList(EntryType)
            }
        }
    }
});

module.exports = PageContainerType;