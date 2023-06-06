const icons = document.querySelectorAll('.icon');
const direction = document.querySelector('#direction');
const playerScore = document.querySelector('#playerScore');
const computerScore = document. querySelector('#computerScore');

const iconsDiv = document.querySelector('.icons');

function computerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}
let pScore = 0;
let cScore = 0;
const defaultDirection = "MAKE YOUR MOVE";
icons.forEach(icon => {
  icon.addEventListener('click', function() {
    //adds the css class to change apperence
    icon.classList.add('hover-icon');

        //stores computer choice
        const c = computerChoice();

        //stores players choice
        const p = icon.id;

        //compare the choices of the player and the computer
        if(p === c){
            direction.textContent = "You Drew";
            setTimeout(function(){
                direction.textContent = defaultDirection;
            },500);
        }else if(p === 'Rock' && c === 'Scissor' || p === 'Scissor' && c === 'Paper' || p === 'Paper' && c === 'Rock'){
            direction.textContent = "You Won";
            pScore++;
            if(pScore && cScore !== 5){
                setTimeout(function(){
                    direction.textContent = defaultDirection;
                },500);
            }
        
            playerScore.textContent = pScore;
        }else if(c === 'Rock' && p === 'Scissor' || c === 'Scissor' && p === 'Paper' || c === 'Paper' && p === 'Rock'){
            direction.textContent = "You Lose";
            cScore++;
            if(pScore && cScore !== 5){
                setTimeout(function(){
                    direction.textContent = defaultDirection;
                },500);
            }
            
            computerScore.textContent = cScore; 
        }

        //check who won
        if(pScore === 5){
            iconsDiv.parentNode.removeChild(iconsDiv);
            direction.textContent = "You Won YEEEEEE (Press F5 to play agian)";            
        }else if (cScore === 5){
            iconsDiv.parentNode.removeChild(iconsDiv);
            direction.textContent = "You Lose Sadge (Press F5 to play agian)";
        }


  });
});

icons.forEach(icon => {
    icon.addEventListener('transitionend', function(){
        icon.classList.remove('hover-icon');
      });
});
