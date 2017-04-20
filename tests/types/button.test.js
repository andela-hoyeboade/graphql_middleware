const expect = require('expect');
const { GraphQLString } = require('graphql');

const buttonType = require('../../types/button');

describe('ButtonType', function() {
    const buttonTypeFields = buttonType.getFields()

    it('should have the necessary fields', function() {
        expect(buttonTypeFields).toContainKeys(['id', 'title', 'text', 'pagePath', 'clickthroughUrl', 'type', 'size', 'alignment'])
    });

    it("should have an id field of type GraphQLString", function() {
        expect(buttonTypeFields.id.type).toEqual(GraphQLString);
    });

    it("should have a title field of type GraphQLString", function() {
        expect(buttonTypeFields.title.type).toEqual(GraphQLString);
    });

    it("should have a text field of type GraphQLString", function() {
        expect(buttonTypeFields.text.type).toEqual(GraphQLString);
    });

    it("should have a pagePath field of type GraphQLString", function() {
        expect(buttonTypeFields.pagePath.type).toEqual(GraphQLString);
    });

    it("should have a clickthroughUrl field of type GraphQLString", function() {
        expect(buttonTypeFields.clickthroughUrl.type).toEqual(GraphQLString);
    });

    it("should have a type field of type GraphQLString", function() {
        expect(buttonTypeFields.type.type).toEqual(GraphQLString);
    });

    it("should have a size field of type GraphQLString", function() {
        expect(buttonTypeFields.size.type).toEqual(GraphQLString);
    });

    it("should have a alignment field of type GraphQLString", function() {
        expect(buttonTypeFields.alignment.type).toEqual(GraphQLString);
    });
});