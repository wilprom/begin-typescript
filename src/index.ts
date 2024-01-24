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

// function increment<NumType>(num: NumType): NumType {
//   return num
// }

// const num = increment<number>(3)


let count: number = 0

const btnIncrement = <HTMLButtonElement>document.querySelector(".btn-increment")
const viewScore = <HTMLParagraphElement>document.querySelector(".view")

const handleIncrement = (e: MouseEvent) => {
  count++

  const span = <HTMLSpanElement>viewScore.querySelector("span")
  span.innerText = count.toString()
}

btnIncrement.addEventListener("click", handleIncrement)
