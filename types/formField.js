const { GraphQLString, GraphQLObjectType } = require('graphql');

const FormFieldType = new GraphQLObjectType({
    name: 'FormField',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            name: {
                type: GraphQLString
            },
            type: {
                type: GraphQLString
            },
            values: {
                type: GraphQLString
            }
        }
    }
});

module.exports = FormFieldType;