//normal function
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
const result = sum(2, 4);

//arrow function
const anotherSum = (num1: number, num2: number): number => num1 + num2;
const result1 = anotherSum(3, 2);

//call back

const arr = [2, 3, 4];
arr.map((num: number) => {
  console.log(num);
});

//when a function used inside an object it called method
const person: {
  name: string;
  age: number;
  amount: number;
  addBalance(salary: number): void;
} = {
  name: "shafol",
  age: 25,
  amount: 5,
  addBalance(salary: number) {
    console.log(this.amount + salary);
  },
};
person.addBalance(300);
