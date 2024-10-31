
//black pieces
function blackpawn(current_position){
    return{
        current_position,
        img:"./pieces/black/pawn.png",
    };
}

function blackrook(current_position){
    return{
        current_position,
        img:"./pieces/black/rook.png",
    };
}

function blackknight(current_position){
    return{
        current_position,
        img:"./pieces/black/knight.png",
    };
}

function blackbishop(current_position){
    return{
        current_position,
        img:"./pieces/black/bishop.png",
    };
}

function blackking(current_position){
    return{
        current_position,
        img:"./pieces/black/king.png",
    };
}

function blackqueen(current_position){
    return{
        current_position,
        img:"./pieces/black/queen.png",
    };
}



//white pieces
function whitepawn(current_position){
    return{
        current_position,
        img:"./pieces/white/pawn.png",
    };
}

function whiterook(current_position){
    return{
        current_position,
        img: "./pieces/white/rook.png"
    }
}

function whiteknight(current_position){
    return{
        current_position,
        img: "./pieces/white/knight.png"
    }
}

function whitebishop(current_position){
    return{
        current_position,
        img: "./pieces/white/bishop.png"
    }
}

function whiteking(current_position){
    return{
        current_position,
        img: "./pieces/white/king.png"
    }
}

function whitequeen(current_position){
    return{
        current_position,
        img: "./pieces/white/queen.png"
    }
}




export {blackpawn,whitepawn,whitebishop,whiteking,whiteknight,whitequeen,whiterook,blackbishop,blackking,blackknight,blackqueen,blackrook};