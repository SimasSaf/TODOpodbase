import { User } from './TypeDefs';

const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 30,
  },
  {
    id: '2',
    name: 'Jane Doe',
    age: 25,
  },
];

const resolvers = {
  Query: {
    getAllUsers(): User[] {
      return users;
    },
  },
  Mutation: {
    createUser( _: null, args: { name: string; age: number }): User {
      
      if (!args.name) {
        throw new Error("Name must be provided");
      }
      const newId = Math.random().toString();
      const newUser = {id: newId, ...args};
      users.push(newUser); //change to mongoDB
      return newUser;
    },
  },
};

export { resolvers };
