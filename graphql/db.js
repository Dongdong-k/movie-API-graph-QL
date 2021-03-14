export const people = [
  {
    id: 0,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 1,
    name: "Jisu",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "Japan Guy",
    age: 18,
    gender: "male",
  },
  {
    id: 3,
    name: "Daal",
    age: 18,
    gender: "male",
  },
  {
    id: 4,
    name: "JD",
    age: 18,
    gender: "male",
  },
  {
    id: 5,
    name: "moondaddi",
    age: 18,
    gender: "male",
  },
  {
    id: 6,
    name: "flynn",
    age: 18,
    gender: "male",
  },
];

// 특정 id를 선택해서 내용 출력하기
export const personGetById = (id) => {
  // Array 모든 항목에 대해 id가 동일한 내용만 새로운 변수에 할당
  const filteredPeople = people.filter((person) => person.id === id);
  // 새롭게 할당된 Array의 첫번째 항목 출력 = 특정 id 매칭이므로 Array내에 값은 1개뿐
  return filteredPeople[0];
};
