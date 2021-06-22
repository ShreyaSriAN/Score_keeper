var p1Button = document.querySelector("#b1");
var p2Button = document.querySelector("#b2");
var p1s = document.querySelector("#p1s");
var p2s = document.querySelector("#p2s");
var reset = document.querySelector("#reset");
var num = document.querySelector("input");
var inp = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;

num.addEventListener("change", function(){
    inp.textContent = num.value;
    winningscore = Number(num.value);
    rest();
});

p1Button.addEventListener("click", function(){
    if(!gameover){
    p1score++;
    }
    if(p1score === winningscore){
        p1s.classList.add("winner");
        gameover = true;
    }
    p1s.textContent = p1score;
    
});

p2Button.addEventListener("click", function(){
    if(!gameover){
        p2score++;
        }
        if(p2score === winningscore){
            p2s.classList.add("winner");
            gameover = true;
        }
        p2s.textContent = p2score;
});

reset.addEventListener("click", rest);

function rest()
{
        p1score = 0;
         p2score = 0;
         p1s.textContent = p1score;
         p2s.textContent = p2score;
         p1s.classList.remove("winner");
         p2s.classList.remove("winner");
         gameover = false;
}
