const {
    graphql,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
  } = require("graphql");


const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLInt },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      email: { type: GraphQLString },
      gender: { type: GraphQLString },
      password: { type: GraphQLString },
    }),
  });

  module.exports=userType