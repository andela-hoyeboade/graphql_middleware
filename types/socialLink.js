const { GraphQLString } = require('graphql');

const SocialLinkType = new GraphQLObjectType({
    name: 'SocialLink',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            profile: {
                type: GraphQLString
            }
        }
    }
});

module.exports = SocialLinkType;