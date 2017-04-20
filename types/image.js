const { GraphQLString, GraphQLList } = require('graphql');

const ImageType = new GraphQLObjectType({
    name: 'Image',

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
            image: {
                type: LinkType
            }
        }
    }
});

module.exports = ImageType;