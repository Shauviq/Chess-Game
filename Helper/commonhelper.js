import { globalstate } from "../index.js";
import { keysquaremapper } from "../index.js";


//function to check if piece of opponent exist
function checkpieceofopponentonelement(id,color){
    const opponentcolor = color === "white"? "BLACK":"WHITE";

    const element = keysquaremapper[id];

    if(!element){
        return false;
    }

    if(element.piece && element.piece.piece_name.includes(opponentcolor)){
        const el = document.getElementById(id);
        el.classList.add("capturecolor");
        element.capturehighlight = true;
        return true;
    }

    return false;
}

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

//function yo check if piece exists
function checkweatherpieceexistornot(squareid){
    const square = keysquaremapper[squareid];

    if(square.piece){
        return square;
    }
    else{
        return false;
    }
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
        returnarray.push(squareid);
    }

    return returnarray;
}

//function to give highlight ids for bishop
function givebishophighlightid(id){

    //for top left
    function topleft(id){
        let alpha = id[0];
        let num = Number(id[1]);
        let resultarr = [];

        while(alpha!="a" && num!=8){
            num = num+1;
            alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
            resultarr.push(`${alpha}${num}`);
        }
        return resultarr;
    }

    //for bottom left
    function bottomleft(id){
        let alpha = id[0];
        let num = Number(id[1]);
        let resultarr = [];

        while(alpha!="a" && num!=1){
            num = num-1;
            alpha = String.fromCharCode(alpha.charCodeAt(0) - 1);
            resultarr.push(`${alpha}${num}`);
        }
        return resultarr;
    }

    //for top right
    function topright(id){
        let alpha = id[0];
        let num = Number(id[1]);
        let resultarr = [];

        while(alpha!="h" && num!=8){
            num = num+1;
            alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
            resultarr.push(`${alpha}${num}`);
        }
        return resultarr;
    }

    //for bottom right
    function bottomright(id){
        let alpha = id[0];
        let num = Number(id[1]);
        let resultarr = [];

        while(alpha!="h" && num!=1){
            num = num-1;
            alpha = String.fromCharCode(alpha.charCodeAt(0) + 1);
            resultarr.push(`${alpha}${num}`);
        }
        return resultarr;
    }

    return{
        topleft: topleft(id),
        bottomleft: bottomleft(id),
        topright: topright(id),
        bottomright: bottomright(id),
    };
}

export {checkpieceofopponent,checksquarecaptureid,givebishophighlightid,checkweatherpieceexistornot,checkpieceofopponentonelement};