const { GraphQLString } = require('graphql');

const MenuType = new GraphQLObjectType({
    name: 'Menu',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            jobTitle: {
                type: GraphQLString
            },
            links: {
                type: LinkType
            }
        }
    }
});

module.exports = MenuType;