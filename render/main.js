import { blackpawn } from "../Data/pieces.js";
import { whitepawn } from "../Data/pieces.js";

const root_div = document.getElementById("root");


//use when you want to render pieces on the board
function piecerender(data){
    data.forEach(row => {
        row.forEach(square => {
            //if square has piece
            if(square.piece){
                const squareel = document.getElementById(square.id);

                //create piece
                const piece = document.createElement("img");
                piece.src = square.piece.img;
                piece.classList.add("piece");

                //insert piece into square
                squareel.appendChild(piece);
            }
        });
    });
}


//to render the start of the game 
function initgamerender(data){
    data.forEach(element => {
        const rowel = document.createElement("div");
        element.forEach( square => {
            const squarediv = document.createElement("div");
            squarediv.id = square.id;
            squarediv.classList.add(square.color,"square");

            //render blackpawn
            if(square.id[1]==7){
                square.piece = blackpawn(square.id);
            }

            //render whitepawn
            if(square.id[1]==2){
                square.piece = whitepawn(square.id);
            }
            rowel.appendChild(squarediv);
        });
        rowel.classList.add("squarerow");
        root_div.appendChild(rowel);
    });

    piecerender(data);
}


export {initgamerender};