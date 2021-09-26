// Set the questions
const quiz = [
    ["What is the name of world's highest mountain","Mount Everest"],
    ["Who is the current president of the United States?","Joe Biden"],
    ["What is the name of world's longest river?","Nile"]
  ];

function start(quiz){
   let score = 0;

  // main loop
  for(const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
  }
  // end of main game loop
  gameOver();

  // ask and check
  function ask(question){
    return prompt(question);
  }

  function check(response,answer){
    // check if answer is correct
    if(response === answer){
      alert('Correct!');
      // increase score by 1
      score++;
    } else {
      alert(`Wrong. The correct answer was ${answer}`);
    }
  }

  function gameOver(){
    // Report the player's score
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}