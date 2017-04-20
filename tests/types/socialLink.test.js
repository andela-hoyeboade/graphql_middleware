const expect = require('expect');
const { GraphQLString } = require('graphql');

const socialLinkType = require('../../types/socialLink');

describe('socialLinkType', function() {
    const socialLinkTypeFields = socialLinkType.getFields()

    it('should have the necessary fields', function() {
        expect(socialLinkTypeFields).toContainKeys(['id', 'title', 'profile'])
    });

    it("should have an id field of type GraphQLString", function() {
        expect(socialLinkTypeFields.id.type).toEqual(GraphQLString);
    });

    it("should have a title field of type GraphQLString", function() {
        expect(socialLinkTypeFields.title.type).toEqual(GraphQLString);
    });

    it("should have a profile field of type GraphQLString", function() {
        expect(socialLinkTypeFields.profile.type).toEqual(GraphQLString);
    });
});