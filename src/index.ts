let count: number = 0

const btnIncrement = document.querySelector('.btn-increment')
const viewScore = document.querySelector('.view')

const handleIncrement = (e) => {
  count++
  viewScore.querySelector('span').innerText = count.toString()
}

btnIncrement.addEventListener('click', handleIncrement)