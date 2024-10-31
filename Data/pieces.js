
//black pieces
function blackpawn(current_position){
    return{
        current_position,
        img:"./pieces/black/pawn.png",
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



export {blackpawn,whitepawn};