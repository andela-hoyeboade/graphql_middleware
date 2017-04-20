const { GraphQLString, GraphQLList } = require('graphql');

const FormTextType = new GraphQLObjectType({
    name: 'FormText',

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
            }
        }
    }
});

module.exports = FormTextType;