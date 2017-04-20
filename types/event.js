const {
    GraphQLObjectType,
    GraphQLList,
} = require('graphql');

const EventType = new GraphQLObjectType({
    name: 'Event',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            slug: {
                type: GraphQLString
            },
            clickthroughUrl: {
                type: GraphQLString
            },
            shortDecription: {
                type: GraphQLString
            },
            longDescription: {
                type: GraphQLString
            },
            publishedDate: {
                type: GraphQLString
            },
            startTime: {
                type: GraphQLString
            },
            endTime: {
                type: GraphQLString
            },
            location: {
                type: LocationType
            },
            address: {
                type: GraphQLString
            },
            type: {
                type: GraphQLString
            },
            speakers: {
                type: GraphQLList
            },
            eventPartners: {
                type: GraphQLList
            },
            tags: {
                type: GraphQLList
            }
        }
    }
})

module.exports = EventType