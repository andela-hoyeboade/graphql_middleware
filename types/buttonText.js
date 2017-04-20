const { GraphQLString, GraphQLList } = require('graphql');

const ButtonTextType = new GraphQLObjectType({
    name: 'ButtonText',

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

module.exports = ButtonTextType;