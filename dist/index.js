"use strict";
// Basic syntax Narrowing type Alias & Generics
// const hello: string = 'Hello world'
// const words: string[] = ['Hello', 'World']
// const bool: boolean = true
// const numbers: number[] = [1, 2]
// const obj: object = {firstProp: 'super obj', secondProp: 1}
// const isNull: null = null
// const undef: undefined = undefined
// const button = document.querySelector('.button') as HTMLButtonElement
// const button = <HTMLButtonElement>document.querySelector('.button')
// function returnNumber<NumType>(num: NumType): NumType {
//   return num
// }
// const num = returnNumber<number>(3)
let count = 0;
const btnIncrement = document.querySelector(".btn-increment");
const viewScore = document.querySelector(".view");
const handleIncrement = (e) => {
    count++;
    const span = viewScore.querySelector("span");
    span.innerText = count.toString();
};
btnIncrement.addEventListener("click", handleIncrement);
// Class typescript
// abstract class Person {
//   private firstName: string
//   private age: number
//   constructor(firstName: string, age: number) {
//     this.firstName = firstName
//     this.age = age
//   }
//   getFirstName() {
//     return this.firstName
//   }
//   getAge() {
//     return this.age
//   }
// }
// class Student extends Person {
//   private serialNumber: string
//   constructor(firstName: string, age: number, serialNumber: string) {
//     super(firstName, age)
//     this.serialNumber = serialNumber
//   }
//   getSerialNumber() {
//     return this.serialNumber
//   }
// }
// const student1 = new Student('Wilfried', 22, '20S48237')
// console.log(student1.getFirstName())
// console.log(student1.getAge())
// console.log(student1.getSerialNumber())
// Type & Interface
// type User = {
//   firstName: string,
//   lastName: string,
//   age: number
// } Can use primary types & Cannot be redefined
// interface Geometry {
//   x: number
//   y: number
// } Can be extended & Can be implemented by a class
// Tuple & Enum
// Fixed-size table
// const twoDimensionArray: [string, number] = ["Hello", 1]
// console.log(twoDimensionArray)
// enum statut {
//   pending = "pending",
//   paid = "paid",
// }
// console.log(statut.pending)
