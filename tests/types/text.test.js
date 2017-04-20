const expect = require('expect');
const { GraphQLString } = require('graphql');

const textType = require('../../types/text');

describe('textType', function() {
    const textTypeFields = textType.getFields()

    it('should have the necessary fields', function() {
        expect(textTypeFields).toContainKeys(['id', 'title', 'subtitle', 'content'])
    });

    it("should have an id field of type GraphQLString", function() {
        expect(textTypeFields.id.type).toEqual(GraphQLString);
    });

    it("should have a title field of type GraphQLString", function() {
        expect(textTypeFields.title.type).toEqual(GraphQLString);
    });

    it("should have a subtitle field of type GraphQLString", function() {
        expect(textTypeFields.subtitle.type).toEqual(GraphQLString);
    });

    it("should have a content field of type GraphQLString", function() {
        expect(textTypeFields.content.type).toEqual(GraphQLString);
    });
});