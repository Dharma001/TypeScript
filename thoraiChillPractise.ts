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


// Public: Accessible from anywhere.
// Private: Accessible only within the class.
// Protected: Accessible within the class and subclasses.

// class User {
//   public name: string
//   private age: number
//   protected gender: string | number

//   constructor(name: string , age: number , gender: any){
//     this.name =  name
//     this.age = age
//     this.gender = gender
//   }

//   getAge(){
//     return this.age
//   }

//   getGender(){
//     return this.gender
//   }
// }
// const userKoData = new User('nam', 12 , [12,3])

// console.log(userKoData.name)
// console.log(userKoData.getAge())
// console.log(userKoData.getGender())

// class Box<T> {
//   private content: T;

//   constructor(content: T) {
//     this.content = content;
//   }

//   public getContent(): T {
//     return this.content;
//   }
// }

// const numberBox = new Box<number>(100);
// const stringBox = new Box<string>('Hello');

// console.log(numberBox.getContent()); 
// console.log(stringBox.getContent());


// abstract class Database {
//   abstract connect(): void;
//   abstract query(sql: string): void;
// }

// class MySQLDatabase extends Database {
//   connect(): void {
//     console.log('Connected to MySQL');
//   }

//   query(sql: string): void {
//     console.log(`Executing query on MySQL: ${sql}`);
//   }
// }

// class MongoDBDatabase extends Database {
//   connect(): void {
//     console.log('Connected to MongoDB');
//   }

//   query(sql: string): void {
//     console.log(`Executing query on MongoDB: ${sql}`);
//   }
// }

// function runQuery(db: Database, sql: string) {
//   db.connect();
//   db.query(sql);
// }

// const mysql = new MySQLDatabase();
// const mongo = new MongoDBDatabase();

// runQuery(mysql, 'SELECT * FROM users');
// runQuery(mongo, '{ find: "users" }');

// abstract class Vehicle {
//   abstract startEngine(): void;

//   stopEngine(): void {
//     console.log("The engine is stopped.");
//   }

//   abstract drive(): void;
// }

// class Car extends Vehicle {
//   startEngine(): void {
//     console.log("Car engine started.");
//   }

//   drive(): void {
//     console.log("Car is driving.");
//   }
// }

// class Bike extends Vehicle {
//   startEngine(): void {
//     console.log("Bike engine started.");
//   }

//   drive(): void {
//     console.log("Bike is driving.");
//   }
// }

// function testDrive(vehicle: Vehicle) {
//   vehicle.startEngine();
//   vehicle.drive();
//   vehicle.stopEngine();
// }

// const myCar = new Car();
// const myBike = new Bike();

// testDrive(myCar);
// testDrive(myBike);


