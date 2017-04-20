const { GraphQLString, GraphQLObjectType } = require('graphql');

const TextType = new GraphQLObjectType({
    name: 'Text',

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
            content: {
                type: GraphQLString
            }
        }
    }
});

module.exports = TextType;