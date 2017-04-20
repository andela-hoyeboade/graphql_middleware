const { GraphQLString, GraphQLList } = require('graphql');

const AuthorType = new GraphQLObjectType({
    name: 'Author',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            name: {
                type: GraphQLString
            },
            slug: {
                type: GraphQLString
            },
            website: {
                type: GraphQLString
            },
            headshot: {
                type: LinkType
            },
            biography: {
                type: GraphQLString
            },
            entries: {
                type: GraphQLList(EntryType)
            }
        }
    }
});

module.exports = AuthorType;