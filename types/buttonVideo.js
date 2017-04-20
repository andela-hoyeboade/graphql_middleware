const { GraphQLString, GraphQLList } = require('graphql');

const ButtonVideoType = new GraphQLObjectType({
    name: 'ButtonVideo',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            subtitle: {
                type: GraphQLString
            },
            entries: {
                type: GraphQLList(EntryType)
            }
        }
    }
})

module.exports = ButtonVideoType