// let's play a coding game? FunCoding!

// input (welcome)
// using Chalk
const chalk = require("chalk");
var Chalk = require("chalk")
var readlineSync=require("readline-sync");
var userInput=readlineSync.question(Chalk.green("What's Your Sweet name? \n"));
var score =0;
console.log(chalk.yellow("hi" + " " + chalk.underline.green(userInput) + " " + "Welcome to FunCoding! "));
var userANswer=readlineSync.question(chalk.cyan("Do you like coding? \n yes or no \n"));
var Answer1 ="yes";
if(userANswer.toUpperCase() == Answer1.toUpperCase())
{
    console.log(chalk.bgRed("Hello Programmer!"));
    console.log(chalk.magenta("let's start with the  First Question"))

//function 
function funGame(question,answer){
   
    var userAnswer=readlineSync.question(question);
    if(userAnswer.toUpperCase()==answer.toUpperCase())
    {
        console.log(chalk.greenBright("Great!"));
        score+=1;

    }
    else
    {
        console.log(chalk.redBright("Wrong!!!..."));
        score-=1;
    }
    console.log(chalk.bgRed("your current score " + score))
}
// input in the form of array and object
var Questions=[{
    question:"1) Which type of JavaScript language is \n a) Object-Oriented \n b) Object-Based \n c) Assembly-language \n d) High-level \n ",
  
    answer:"b"
    },
     {
         question:"2) Which of the following is the correct output for the following JavaScript code: \nvarx=5,y=1\nvar obj ={ x:10}\nwith(obj)\n{\n  alert(y)  \n} \n a) 1\n b) Error\n c) 10\n d) 5 \n",
         answer:"a"
        },
        {
            question:"3) Which one of the following also known as Conditional Expression:\n a) Alternative to if-else\n b) Switch statement\n c) If-then-else statement \n d) immediate if\n",
            answer:"d"
           },
           {
            question:"4) Among the following given JavaScript snipped codes, which is more efficient: \nCode A \n for(var number=10;number>=1;number--)   \n {   \n document.writeln(number);  \n }    \n Code B          \n var number=10;        \n while(number>=1)         \n {        \n document.writeln(number);        \n       number++;        \n }        \n a) Code 1      \n b) Code 2    \n c) Both Code 1 and Code 2     \n d) Cannot Compare \n",
            answer:"a"
           },
           {
            question:"5)In JavaScript, what is a block of statement? \n a) Conditional block\n b) block that combines a number of statements into a single compound statement\n c) both conditional block and a single statement\n d) block that contains a single statement \n",
            answer:"b"
           },
           {
            question:"6)When interpreter encounters an empty statements, what it will do:  \n a) Shows a warning\n b) Prompts to complete the statement\n c) Throws an error\n d) Ignores the statements \n",
            answer:"d"
           },
           {
            question:"7)The 'function' and 'var' are known as:  \n a) Keywords\n b) Data types \n c) Declaration statements \n d) Prototypes \n",
            answer:"c"
           },
           {
            question:"8)Which of the following is the correct output for the following JavaScript code: \n Int x=8;  \n if(x>9)   \n {   \n document.write(9);   \n }   \n else   \n {     \n document.write(x);      \n }    \n a) 9  \n b) 0    \n c) 8       \n d) Undefined \n",
            answer:"c"
           },
           {
            question:"9)Which of the following is the correct output for the following JavaScript code:  \n  var grade='Z';    \n  var result;    \n  switch(grade)    \n  {    \n  case'A':    \n          result+='10';     \n  case'B':     \n          result+=' 9';      \n  case'C':      \n          result+=' 8';        \n  default:      \n          result+=' 0';        \n  }         \n  document.write(result);          \n a) 10     \n b) 17     \n c) 18      \n d) 0 \n",
            answer:"d"
           },
           {
            question:"10)Which one of the following is an ternary operator:  \n a)  ?  \n b)  :  \n c)  -  \n d)  + \n",
            answer:"a"
           }];

// looping the array
for(var i=0;i<Questions.length;i++){
  var currentQuestion = Questions[i];
  funGame(chalk.blue(currentQuestion.question), currentQuestion.answer.toUpperCase());
}
console.log("your total score " + score)
if(score === 8)
{
    console.log(chalk.bold.italic.gray("you're are genius"));
}
else if(score===9)
{
    console.log(chalk.bold.italic.red("you're are marvellous"))
}
else if(score ===10)
{
    console.log(chalk.bold.italic.yellow("you're are Pro"));
}
else
{
    console.log(chalk.bold.italic.underline.red("Better luck next time"));
}
console.log(chalk.bold.italic.green("thankyou " + userInput + " "+"for playing FunCoding!!!!"))
}
else{
    console.log(chalk.bold.bgCyan(" one thing to keep in mind when trying to decide if coding is right for you is pretty simple: Coding is for everyone. So if you're ready to learn some new skills and take on a uniquely fun, challenging, and rewarding line of work, coding is most definitely right for you. so please learn the basics and try again. ( ͡ ͜ʖᵔ)"));
}

