const { GraphQLString, GraphQLList } = require('graphql');

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
            },
            entries: {
                type: GraphQLList()
            }
        }
    }
})


module.exports = VideoTextType