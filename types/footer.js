const { GraphQLString, GraphQLList } = require('graphql');

const FooterType = new GraphQLObjectType({
    name: 'Footer',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            links: {
                type: LInkType
            },
            socialLinks: {
                type: GraphQLList(socialLinkType)
            },
            errata: {
                type: GraphQLString
            }
        }
    }
});

module.exports = FooterType;