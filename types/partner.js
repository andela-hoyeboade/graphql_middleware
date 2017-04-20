const { GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const PartnerType = new GraphQLObjectType({
    name: 'Partner',

    fields: () => {
        return {
            id: {
                type: GraphQLString
            },
            name: {
                type: GraphQLString
            },
            featured: {
                type: GraphQLBoolean
            },
            logo: {
                type: LogoType
            },
            industry: {
                type: GraphQLList(IndustryType)
            },
            website: {
                type: GraphQLString
            },
            twitter: {
                type: LogoType
            },
            facebook: {
                type: GraphQLString
            },
            linkedIn: {
                type: GraphQLString
            },
            location: {
                type: LocationType
            },
            testimonials: {
                type: GraphQLList(TestimonialType)
            },
            media: {
                type: MediaType
            }
        }
    }
})

module.exports = PartnerType