import { gql } from 'apollo-server-express';

export type User = {
    id: string;
    name: string;
    age?: number;
  };

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int
  }
  
  #Quaries

  type Query {
    getAllUsers: [User!]!
  }

  #Mutations

  type Mutation {
    createUser(name: String!, age: Int): User!
  }
`;

export { typeDefs };
