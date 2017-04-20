const { GraphQLString } = require('graphql');
const ButtonType = require('../types/button')

const ButtonQuery = {
    type: ButtonType,
    description: 'The hero identified by an id or blurb',
    args: {
        id: {
            type: GraphQLString
        }
    },
    resolve: (obj, args) => {
        return null
    }
}
module.exports = ButtonQuery