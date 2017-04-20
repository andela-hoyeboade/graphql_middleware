const { GraphQLString } = require('graphql');

const VideoTextType = new GraphQLObjectType({
    name: 'VideoText',

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


module.exports = VideoTextType