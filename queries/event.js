const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema
} = require('graphql');

const EventType = require('../types/event');

const EventQuery = {
    type: EventType,
    description: 'The event id or slug',
    args: {
        _id: {
            type: GraphQLString
        },
        entry_id: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },

    },
    resolve: (obj, args) => {
        return null
    }
}

module.exports = EventQuery