const { GraphQLString } = require('graphql');

const GalleryType = new GraphQLObjectType({
    name: 'Gallery',

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
            type: {
                type: TypeType
            },
            entries: {
                type: EntryType
            }
        }
    }
})


module.exports = GalleryType