const { GraphQLString } = require('graphql');

const FormType = new GraphQLObjectType({
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
            disclaimer: {
                type: GraphQLString
            },
            fields: {
                type: FieldType
            }
        }
    }
})

module.exports = GalleryType