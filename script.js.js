alert ("game khel maze utha");
console.log("tic tac toe");
let music = new Audio("gameaudio.mp3")
let turnmc = new Audio("turnmc.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let gameover4 = false


//Function to change the turn

const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

//Function to check win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxText');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            gameover4 = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "100px"
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
        
    })


}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from (boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element. addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnmc.play();
            checkWin();
            if(!gameover4){
                document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
                
            }
            

        }
    })
})


//reset button

reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X"
    gameover4 = false
    document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
    
    
})