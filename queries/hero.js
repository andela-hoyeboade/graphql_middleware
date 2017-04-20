const { GraphQLString, GraphQLSchema } = require('graphql');

const HeroType = require('../types/hero')

const HeroQuery = {
    type: HeroType,
    description: 'The hero identified by an id or blurb',
    args: {
        _id: {
            type: GraphQLString
        },
        hero_id: {
            type: GraphQLString
        }
    },
    resolve: (obj, args) => {
        return null
    }
}
module.exports = HeroQuery