const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema
} = require('graphql');
const EventQuery = require('./event');
const HeroQuery = require('./hero');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',

    fields: () => ({
        Event: EventQuery,
        Hero: HeroQuery,
    })
});

module.exports = RootQueryType