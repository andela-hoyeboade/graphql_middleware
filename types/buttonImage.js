const { GraphQLString, GraphQLList } = require('graphql');

const ButtonImageType = new GraphQLObjectType({
    name: 'ButtonImage',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            entries: {
                type: GraphQLList(EntryType)
            },
            subtitle: {
                type: GraphQLString
            }
        }
    }
});

module.exports = ButtonImageType;