import { root_div } from "../Helper/constants.js";
import { globalstate } from "../index.js";
import { renderhighlight } from "../render/main.js";
import { clearhighlight } from "../render/main.js";
import { selfhighlight } from "../render/main.js";
import { clearpreviousselfhighlight } from "../render/main.js";
import { moveelement } from "../render/main.js";

//highlighted or not 
let highlight_state = false;


//current yellow highlighted square 
let selfhighlightstate = null;

//in move state or not
let movestate = null;

function whitepawnclicked({piece}){

    //clicked on same element twice
    if(piece == selfhighlightstate){
        clearpreviousselfhighlight(selfhighlightstate);
        selfhighlightstate = null;
        clearhighlight();
        return;
    }

    //highlight clicked element
    selfhighlight(piece);
    clearpreviousselfhighlight(selfhighlightstate);
    selfhighlightstate = piece

    //add piece as move state
    movestate = piece;

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
        else{
            const childelementofclickedel = Array.from(event.target.childNodes);
            
            if(childelementofclickedel.length == 1 || event.target.localName == "span"){
                if(event.target.localName == "span"){
                    const id = event.target.parentNode.id;
                    moveelement(movestate,id);
                    movestate = null;
                }
                else{
                    const id = event.target.id;
                    moveelement(movestate,id);
                    movestate = null;
                }
            }
            else{
                clearhighlight();
                clearpreviousselfhighlight(selfhighlightstate);
            }
        }
    });
}

export {globalevent};