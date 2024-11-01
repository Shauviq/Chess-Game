import { root_div } from "../Helper/constants.js";
import { globalstate } from "../index.js";
import { renderhighlight } from "../render/main.js";
import { clearhighlight } from "../render/main.js";

//highlighted or not 
let highlight_state = false;


function whitepawnclicked({piece}){

    const current_pos = piece.current_position;
    const flatarray = globalstate.flat();

    //on initial position
    if(current_pos[1]=="2"){
        const highlightsquareids = [
            `${current_pos[0]}${Number(current_pos[1])+1}`,
            `${current_pos[0]}${Number(current_pos[1])+2}`,
        ];

        //clears privious highlight
        clearhighlight();

        highlightsquareids.forEach((hightlight) => {
            globalstate.forEach((row) => {
                row.forEach((element) => {
                    if(element.id == hightlight){
                        element.highlight();
                    }
                })
            })
        })
    }
}


function globalevent(){
    root_div.addEventListener("click", (event) => {
        if(event.target.localName === "img"){
            const clickid = event.target.parentNode.id;
            const flatarray = globalstate.flat();
            const square = flatarray.find((el) => el.id == clickid);
            if(square.piece.piece_name == "WHITE_PAWN"){
                whitepawnclicked(square);
            }
        }
    });
}

export {globalevent};