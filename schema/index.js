const { GraphQLSchema } = require('graphql');

const RootQueryType = require('../queries');

const rootSchema = new GraphQLSchema({
    query: RootQueryType,
});

module.exports = rootSchema;