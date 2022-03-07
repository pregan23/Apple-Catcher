let score = 0
// let appNum = 1
const playArea = document.querySelector('.play-area')


//gonna need a function to spawn apples and another one to make them move
//spawn apples as span elements?
const moveApple = () => {
    let id = null 
    const apple = document.querySelector('.Apple')
    let pos = 0
    clearInterval(id)
    id = setInterval(frame, 5);
    function frame()  {
        if (pos === 350) {
            clearInterval(id)
        }
        else {
            pos++;
            apple.style.top = pos + 'px'
        }
    }
    
 }
 
 const spawnApple = () => {
     const horVal = Math.random() * (200-1);
     const newApple = document.createElement('span')
     newApple.classList.add('Apple')
     newApple.style.left = horVal + '%'
     playArea.appendChild(newApple)
 
 }
 spawnApple()
 moveApple()


    // appNum+=1
    // let currentApple = `Apple${appNum}`

    // console.log(currentApple)
    
    // moveApple()





//maybe i could pass the style.left value into the function to control where it spawns?




// spawnApple()


// spawnApple()
