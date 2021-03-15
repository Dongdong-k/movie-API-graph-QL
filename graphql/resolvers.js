import { getMovies } from "./db";

const resolvers = {
  Query: {
    // (_, {})에서 _는 variable name으로 그냥 적어주는 것
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;
