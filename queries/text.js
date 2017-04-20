const { GraphQLString } = require('graphql');
const TextType = require('../types/text')

const TextQuery = {
    type: TextType,
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
module.exports = TextQuery