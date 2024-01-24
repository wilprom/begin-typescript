let count: number = 0

const btnIncrement = <HTMLButtonElement>document.querySelector(".btn-increment")
const viewScore = <HTMLParagraphElement>document.querySelector(".view")

const handleIncrement = (e: MouseEvent) => {
  count++

  const span = <HTMLSpanElement>viewScore.querySelector("span")
  span.innerText = count.toString()
}

btnIncrement.addEventListener("click", handleIncrement)
