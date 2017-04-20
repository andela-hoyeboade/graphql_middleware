const { GraphQLList, GraphQLString } = require('graphql');

const HeroType = new GraphQLObjectType({
    name: 'Hero',

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
            media: {
                type: LinkType
            },
            entries: {
                type: GraphQLList(EntryType)
            }
        }
    }

})


module.exports = HeroType