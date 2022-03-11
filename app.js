let score = 0
const scoreBoard = document.querySelector('#Score')
let appNum = 1
const playArea = document.querySelector('.play-area')
let credits = 3
const badNews = document.querySelector('#loser')
const lifeCount = document.querySelector('.life-count')
const apples = document.querySelectorAll('.Apple')
const clearButton = document.querySelector('#play-again')
const lives = document.querySelector('#Lives')

const playAgain = () => {
    location.reload()

    
    
//     // const currentApples = document.querySelectorAll('.Apple')
//     // for (let i =0;i<currentApples.length;i++) {
        
//     //     playArea.removeChild(currentApples[i])
//     score = 0
//     scoreBoard.innerText = score
//     credits = 3
//     lives.innerText = credits
//     badNews.classList.remove('corporeal')
      
    }
    
    
    


clearButton.addEventListener('click', playAgain)

let modifier = 10;
const basket = document.querySelector('#basket')
basket.style.left   = '370px'
document.addEventListener('keydown', (event) => {
     
    switch (event.key) {
        
        case 'ArrowRight': 
                        
            basket.style.left = `${parseInt(basket.style.left) + modifier}px`;
            
            break;
        case 'ArrowLeft': 
            basket.style.left = `${parseInt(basket.style.left) - modifier}px`;
            
            break;
    }
})



const gameOver = () => {
    if (credits===0) {
        badNews.classList.add('corporeal')
        
        
        
    }
}
//gonna need a function to spawn apples and another one to make them move
//spawn apples as span elements?

//think i need to nest an if statement within an if statement within move apple
//first if checks if apple is in a relevant vertical range, second if should compare basket horizontal value to apples. if applicable, give point, make disappear and/or invisible
const moveApple = (appNum) => {
    let id = null
    let apple = document.querySelector('#Apple'+CSS.escape(appNum))
    let pos = 0
    
    clearInterval(id)
    id = setInterval(frame, 5);
    function frame()  {
        console.log(pos)
        if (pos === 549) {
            if (credits>0) {
                console.log ('death')
                
                clearInterval(id)
                credits-=1
                lives.innerText = credits
                gameOver()
            }
            else {
                clearInterval(id)
            }
            
        }
        else if(pos>500 && pos<515) { //comparing horizontal positions of apple and basket when apple is at certain height
            let appleHor = apple.getBoundingClientRect()
            let basketPos = basket.getBoundingClientRect()
            if(appleHor.x> basketPos.x - 17 && appleHor.x <basketPos.x + 17) {
                if (credits>0) {
                    clearInterval(id)
                    playArea.removeChild(apple)
                    score+=1
                    scoreBoard.innerText = score
                        
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
     const horVal = Math.random() * (550-1);
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
}, 2000) 




