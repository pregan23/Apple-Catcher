let score = 0
let appNum = 1
const playArea = document.querySelector('.play-area')
let credits = 3
const badNews = document.querySelector('.ghost')
const lifeCount = document.querySelector('.life-count')
const apples = document.querySelectorAll('.Apple')
//
// console.log(basket)

let modifier = 10;
const basket = document.querySelector('#basket')
basket.style.left   = '370px'
document.addEventListener('keydown', (event) => {
    
    // console.log(apples) 
    switch (event.key) {
        
        case 'ArrowRight': 
            // console.log(parseInt(basket.style.left));
            
            basket.style.left = `${parseInt(basket.style.left) + modifier}px`;
            // console.log('right')
            break;
        case 'ArrowLeft': 
            basket.style.left = `${parseInt(basket.style.left) - modifier}px`;
            // console.log('left')
            
            break;
    }
})

// let modifier = 5;
// const basket = document.querySelector('#basket')
// document.addEventListener('keydown', (event) => {
    
//     let baskPos=0
    
//     switch (event.key) {       
        

//         case 'ArrowRight':
//             baskPos = parseInt(basket.style.left)
//             baskPos+=modifier
//             console.log(baskPos) 
//             basket.style.left = baskPos + 'px';
//             console.log('right')
//             break;
//         case 'ArrowLeft':
//             console.log(basket.style.left) 
//             basket.style.left = `${parseInt(basket.style.left) - modifier}px`;
//             console.log(basket.style.left)
//             break;
//     }


// })

const gameOver = () => {
    if (credits===0) {
        badNews.classList.add('corporeal')
        lifeCount.classList.add('ghost')
        
    }
}


//gonna need a function to spawn apples and another one to make them move
//spawn apples as span elements?

//think i need to nest an if statement within an if statement within move apple
//first if checks if apple is in a relevant vertical range, second if should compare basket horizontal value to apples. if applicable, give point, make disappear and/or invisible
const moveApple = (appNum) => {
    let id = null
    // let currentApple = `#Apple${appNum}`
    let apple = document.querySelector('#Apple'+CSS.escape(appNum))
    
    // console.log(basketPos)
    let pos = 0
    clearInterval(id)
    id = setInterval(frame, 5);
    function frame()  {
        if (pos === 750) {
            const lives = document.querySelector('#Lives')
            credits-=1
            lives.innerText = credits
            clearInterval(id)
            gameOver()
            
            
            

        }
        else if(pos>700 && pos<720) {
            let appleHor = apple.getBoundingClientRect()
            let basketPos = basket.getBoundingClientRect()
            console.log(appleHor.x)
            if(appleHor.x> basketPos.x - 25 && appleHor.x <basketPos.x + 25) {
                clearInterval(id)
                playArea.removeChild(apple)
                score+=1
                console.log(score)

            }
            else {
                pos++;
                apple.style.top = pos + 'px' 
            }

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
     newApple.innerHTML = ""
     newApple.classList.add('Apple')
     newApple.id='Apple'+appNum
     newApple.style.left = horVal + 'px'
     playArea.appendChild(newApple)
     

     moveApple(appNum)
 
 }
 

setInterval(() => {
    spawnApple();
    appNum+=1
}, 2500) 
 


//  appNum+=1
//  spawnApple()
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
