const { GraphQLString, GraphQLList } = require('graphql');

const ImageTextType = new GraphQLObjectType({
    name: 'ImageText',

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
})


module.exports = ImageTextType