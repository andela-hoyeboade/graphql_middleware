const { GraphQLString } = require('graphql');

const CategoryType = new GraphQLObjectType({
    name: 'Form',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            description: {
                type: GraphQLString
            },
            icon: {
                type: LinkType
            },
            fields: {
                type: FieldType
            }
        }
    }
})

module.exports = CategoryType