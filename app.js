let score = 0
const scoreBoard = document.querySelector('#Score')
// const finalScore = document.querySelector('#final-score')
let appNum = 1
const playArea = document.querySelector('.play-area')
let credits = 3
const badNews = document.querySelector('#loser')
const lifeCount = document.querySelector('.life-count')
const apples = document.querySelectorAll('.Apple')
const goToScores = document.querySelector('#enterscore')
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



const gameOver = () => {
    if (credits===0) {
        badNews.classList.add('corporeal')
        goToScores.classList.add('corporeal')
        // lifeCount.classList.add('ghost')
        // finalScore.innerText = score
        // finalScore.classList.add('corporeal')
        
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
            if (credits>0) {
                const lives = document.querySelector('#Lives')
                credits-=1
                lives.innerText = credits
                clearInterval(id)
                gameOver()
            }
            else {
                clearInterval(id)
            }
            
            
            

        }
        else if(pos>700 && pos<715) {
            let appleHor = apple.getBoundingClientRect()
            let basketPos = basket.getBoundingClientRect()
            console.log(appleHor.x)
            if(appleHor.x> basketPos.x - 17 && appleHor.x <basketPos.x + 17) {
                if (credits>0) {
                    clearInterval(id)
                    playArea.removeChild(apple)
                    score+=1
                    scoreBoard.innerText = score
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
        else {
            
            pos++;
            apple.style.top = pos + 'px'
            
        }
    }

    
    
 }
 
 const spawnApple = () => {
     const horVal = Math.random() * (750-1);
     const newApple = document.createElement('span')
     newApple.innerHTML = ""
     newApple.classList.add('Apple')
     newApple.id='Apple'+appNum
     newApple.style.left = horVal + 'px'
     playArea.appendChild(newApple)
     

     moveApple(appNum)
 
 }
 
// if (score<11) {
setInterval(() => {
    spawnApple();
    appNum+=1
}, 2500) 
// }
// else if (score>=11 && score<21) {
//     setInterval(() => {
//         spawnApple();
//         appNum+=1
//     }, 500)
// }
// else {
//     setInterval(() => {
//         spawnApple();
//         appNum+=1
//     }, 1500)
// }



