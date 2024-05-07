const {
    graphql,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
  } = require("graphql");
const userType = require("./TypeDefs/UserType");
const data= require('../mockdata.json')


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      getAllUsers: {
        type: new GraphQLList(userType),
        resolve(parent, args) {
          return data;
        },
      },
      // getUsersById,
    },
  });
  const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser: {
        type: userType,
        args: {
          first_name: { type: GraphQLString },
          last_name: { type: GraphQLString },
          password: { type: GraphQLString },
          email: { type: GraphQLString },
          gender: { type: GraphQLString },
        },
        resolve(parent, args) {
          data.push({
            id: data.length + 1,
            first_name: args.first_name,
            last_name: args.last_name,
            password: args.password,
            email: args.email,
            gender: args.gender,
          });
          return args;
        },
      },
    },
  });
  
  module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });