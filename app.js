let score = 0
let appNum = 1
const playArea = document.querySelector('.play-area')


//gonna need a function to spawn apples and another one to make them move
//spawn apples as span elements?
const moveApple = (appNum) => {
    let id = null
    // let currentApple = `#Apple${appNum}`
    let apple = document.querySelector('#Apple'+CSS.escape(appNum))
    console.log(apple)
    console.log(appNum)
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
     const horVal = Math.random() * (800-1);
     const newApple = document.createElement('span')
     newApple.classList.add('Apple')
     newApple.id='Apple'+appNum
     newApple.style.left = horVal + 'px'
     playArea.appendChild(newApple)
     

     moveApple(appNum)
 
 }
 
 spawnApple()
 appNum+=1
 spawnApple()
 appNum+=1
 spawnApple()
//  for(let i = 0; i<3;i++) {
//      spawnApple()
//      moveApple(i)
//  }
 
 
//  moveApple()


    // appNum+=1
    // let currentApple = `Apple${appNum}`

    // console.log(currentApple)
    
    // moveApple()





//maybe i could pass the style.left value into the function to control where it spawns?




// spawnApple()


// spawnApple()
