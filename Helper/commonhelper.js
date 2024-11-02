import { globalstate } from "../index.js";


//function to check if opponent's piece exist 
function checkpieceofopponent(id,color){
    const flatarray = globalstate.flat();
    const opponentcolor = color === "WHITE" ? "BLACK" : "WHITE";
    for(let index = 0; index<flatarray.length; index++){
        const element = flatarray[index];
        if(element.id == id){
            if(element.piece && element.piece.piece_name.includes(opponentcolor)){
                const el =document.getElementById(id);
                el.classList.add("capturecolor");
                element.capturehighlight = true;
            }
        }
    }
}

export {checkpieceofopponent};