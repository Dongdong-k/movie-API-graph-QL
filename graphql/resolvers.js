import { people, personGetById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    // id 할당받고 특정 id 해당하는 사람 정보 가져오는 함수 실행
    person: (_, { id }) => personGetById(id),
  },
};

export default resolvers;
