import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const gqlDate = new GraphQLScalarType({
  name: 'gqlDate',
  description: 'A Date() type as graphQL scalar',
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value);
      return Number.isNaN(date.getTime() ? undefined : date);
    }
    return undefined;
  },
});

module.exports = gqlDate;
