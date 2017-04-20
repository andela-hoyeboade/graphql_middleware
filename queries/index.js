const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema
} = require('graphql');
const TextQuery = require('./text');
const ButtonQuery = require('./button');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',

    fields: () => ({
        Text: TextQuery,
        Button: ButtonQuery,
    })
});

module.exports = RootQueryType