let score = 0
const playArea = document.querySelector('.play-area')

//gonna need a function to spawn apples and another one to make them move
//spawn apples as span elements?

const spawnApple = () => {
    const newApple = document.createElement('span')
    newApple.classList.add('Apple')
    playArea.appendChild(newApple)
}
spawnApple()
spawnApple()
spawnApple()
spawnApple()
spawnApple()
spawnApple()
spawnApple()