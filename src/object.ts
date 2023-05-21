// let user: {
//   name: string;
//   age: number;
//   isMarraid?: boolean; //optional type
// } = {
//   name: "rafi",
//   age: 24,
//   //   isMarraid: true,
// };

//literal type-->Defined in the type
const user: {
  name: String;
  position: String;
  // readonly company: String;
  company: "Implevista";
} = {
  name: "Shafol",
  position: "Software Developer",
  company: "Implevista",
};

console.log(user.company);
