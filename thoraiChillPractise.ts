// const num: number = 10
// const num2: number = 12

// const add = () => {
//   console.log(num + num2)
// }
// add()

// interface User {
//   name: string;
//   age: number;
//   email?: string; // Optional
// }

// const user1: User = { name: "John", age: 25 };

// type Point = { x: number; y: number };
// const point: Point = { x: 10, y: 20 };

// console.log(point.x + point.y) 


// interface Num {
//   num1: number;
//   num2: number;
// }

// const nums: Num =  { num1: 1 , num2: 2}

// const add = (): void => {
//   console.log(nums.num1 + nums.num2)
// }
// add()


// const arr: Array<number> = [1,2,3,4,5,6]

// const arr: number[] = [1,2,3,4,5,6] 

// let rawUltoData: number[] = []
// function rawUlto(): void {
//   for(let i: number = 0; i < arr.length; i++ ){
//      rawUltoData[arr.length - 1 - i] = arr[i]
//   }
// }
// rawUlto()
// console.log(rawUltoData)

// const ultoParamHai = (): void => {
//   console.log(arr.reverse())
// }
// ultoParamHai()

// interface NumberHo {
//   num1: number;
//   num2: number;
// }

// class add implements NumberHo{
//   num1: number
//   num2: number
//   constructor(num1: number , num2: number) {
//     this.num1 = num1
//     this.num2 = num2
//   }
  
//   addHunxa(): void {
//     console.log(this.num1 + this.num2)
//   }
// }

// const addGaramHai = new add(10,20)

// addGaramHai.addHunxa()