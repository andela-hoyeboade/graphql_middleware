const { GraphQLString, GraphQLList } = require('graphql');

const ButtonType = new GraphQLObjectType({
    name: 'Button',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            text: {
                type: GraphQLString
            },
            pagePath: {
                type: GraphQLString
            },
            clickthroughUrl: {
                type: GraphQLString
            },
            type: {
                type: GraphQLString
            },
            size: {
                type: GraphQLString
            },
            alignment: {
                type: GraphQLString
            }
        }
    }
});

module.exports = ButtonType;