const expect = require('expect');
const { GraphQLString } = require('graphql');

const formFieldType = require('../../types/formField');

describe('FormFieldType', function() {
    const formFieldTypeFields = formFieldType.getFields()

    it('should have the necessary fields', function() {
        expect(formFieldTypeFields).toContainKeys(['id', 'name', 'type', 'values'])
    });

    it("should have an id field of type GraphQLString", function() {
        expect(formFieldTypeFields.id.type).toEqual(GraphQLString);
    });

    it("should have a name field of type GraphQLString", function() {
        expect(formFieldTypeFields.name.type).toEqual(GraphQLString);
    });

    it("should have a type field of type GraphQLString", function() {
        expect(formFieldTypeFields.type.type).toEqual(GraphQLString);
    });

    it("should have a values field of type GraphQLString", function() {
        expect(formFieldTypeFields.values.type).toEqual(GraphQLString);
    });
});