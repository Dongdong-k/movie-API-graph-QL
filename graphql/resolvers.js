const dongdong = {
  name: "dongdong",
  age: 20,
  sex: "male",
};

const resolvers = {
  Query: {
    person: () => dongdong,
  },
};

export default resolvers;
