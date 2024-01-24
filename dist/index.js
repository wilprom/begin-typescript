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
