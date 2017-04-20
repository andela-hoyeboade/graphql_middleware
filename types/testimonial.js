const { GraphQLString } = require('graphql');

const TestimonialType = new GraphQLObjectType({
    name: 'Testimonial',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            author: {
                type: GraphQLString
            },
            jobTitle: {
                type: GraphQLString
            },
            quote: {
                type: GraphQLString
            },
            headshot: {
                type: LinkType
            }
        }
    }
});

module.exports = TestimonialType;