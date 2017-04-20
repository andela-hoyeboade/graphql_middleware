const express = require('express');
const bodyParser = require('body-parser');
const rootSchema = require('./schema');
const graphqlHTTP = require('express-graphql');

const port = process.env.PORT || 3000;

const app = express();

// bodyParser is needed for POST.
app.use('/graphql', bodyParser.json(), function(req, res) {
    return graphqlHTTP({
        schema: rootSchema,
        graphiql: true,
        context: {}
    })(req, res)
});

app.listen(port);