const { GraphQLString, GraphQLList } = require('graphql');

const TwoColumnTextType = new GraphQLObjectType({
    name: 'TwoColumnText',

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
});

module.exports = TwoColumnTextType;