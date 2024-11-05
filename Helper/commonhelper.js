import { globalstate } from "../index.js";
import { keysquaremapper } from "../index.js";


//function to check if opponent's piece exist 
function checkpieceofopponent(id,color){
    const opponentcolor = color === "WHITE" ? "BLACK" : "WHITE";

    const element = keysquaremapper[id];

    //for last rows 
    if(!element){
        return false;
    }

    if(element.piece && element.piece.piece_name.includes(opponentcolor)){
        const el =document.getElementById(id);
        el.classList.add("capturecolor");
        element.capturehighlight = true;
        return true;
    }

    return false;
}

//function to check capture id square (if there is an element infront of the element movement for that square is not possible)
function checksquarecaptureid(array){
    let returnarray = [];

    for(let index=0;index<array.length;index++){
        const squareid = array[index];
        const square = keysquaremapper[squareid];

        if(square.piece){
            break;
        }
        else{
            returnarray.push(squareid);
        }
    }

    return returnarray;
}

export {checkpieceofopponent,checksquarecaptureid};