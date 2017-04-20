const { GraphQLString, GraphQLList } = require('graphql');

const VideoType = new GraphQLObjectType({
    name: 'Video',

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
            video: {
                type: LinkType
            }
        }
    }
});

module.exports = VideoType;