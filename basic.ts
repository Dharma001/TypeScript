// const num: number = 10
// const num2: number = 12

// const add = () => {
//   console.log(num + num2)
// }
// add()

interface User {
  name: string;
  age: number;
  email?: string; // Optional
}

const user1: User = { name: "John", age: 25 };

type Point = { x: number; y: number };
const point: Point = { x: 10, y: 20 };

console.log(point.x + point.y) 


interface Num {
  num1: number;
  num2: number;
}

const nums: Num =  { num1: 1 , num2: 2}

const add = (): void => {
  console.log(nums.num1 + nums.num2)
}
add()

type add = {
  
}