import { root_div } from "../Helper/constants.js";
import { globalstate } from "../index.js";
import { renderhighlight } from "../render/main.js";
import { clearhighlight } from "../render/main.js";
import { selfhighlight } from "../render/main.js";
import { clearpreviousselfhighlight } from "../render/main.js";
import { moveelement } from "../render/main.js";
import { checkpieceofopponent } from "../Helper/commonhelper.js";
import { globalstaterenderer } from "../render/main.js";


//highlighted or not 
let highlight_state = false;


//current yellow highlighted square 
let selfhighlightstate = null;

//in move state or not
let movestate = null;


//move piece from x to y
function movepiecefromxtoy(from , to){

}


//local function to clear highlight dot
function clearhighlightlocal(){
    clearhighlight();
    highlight_state = false;
}


//white pawn
function whitepawnclicked({piece}){
    
    clearpreviousselfhighlight(selfhighlightstate);

    //clicked on same element twice
    if(piece == selfhighlightstate){
        selfhighlightstate = null;
        clearhighlightlocal();
        return;
    }

    //highlight clicked element
    selfhighlight(piece);
    clearpreviousselfhighlight(selfhighlightstate);
    highlight_state = true;
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
        clearhighlightlocal();

        highlightsquareids.forEach((hightlight) => {
            globalstate.forEach((row) => {
                row.forEach((element) => {
                    if(element.id == hightlight){
                        element.highlight = true;
                    }
                })
            })
        })
        globalstaterenderer();
    }
    else{

        // code for capturing
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1])+1}`;
        const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1])+1}`;

        const captureid = [col1,col2];

        //array for single movement after first and capturing
        const highlightsquareids = [
            `${current_pos[0]}${Number(current_pos[1])+1}`,
        ];

        captureid.forEach(element => {
            checkpieceofopponent(element,"WHITE");
        });



        highlightsquareids.forEach((hightlight) => {
            globalstate.forEach((row) => {
                row.forEach((element) => {
                    if(element.id == hightlight){
                        element.highlight = true;
                    }
                })
            })
        })
        globalstaterenderer();
    }
}

//black pawn
function blackpawnclicked({piece}){
   
    clearpreviousselfhighlight(selfhighlightstate);
   
    //clicked on same element twice
    if(piece == selfhighlightstate){
        selfhighlightstate = null;
        clearhighlightlocal();
        return;
    }

    //highlight clicked element
    selfhighlight(piece);
    clearpreviousselfhighlight(selfhighlightstate);
    highlight_state = true;
    selfhighlightstate = piece

    //add piece as move state
    movestate = piece;

    const current_pos = piece.current_position;
    const flatarray = globalstate.flat();

    //on initial position
    if(current_pos[1]=="7"){
        const highlightsquareids = [
            `${current_pos[0]}${Number(current_pos[1])-1}`,
            `${current_pos[0]}${Number(current_pos[1])-2}`,
        ];

        //clears privious highlight
        clearhighlightlocal();

        highlightsquareids.forEach((hightlight) => {
            globalstate.forEach((row) => {
                row.forEach((element) => {
                    if(element.id == hightlight){
                        element.highlight = true;
                    }
                })
            })
        })
        globalstaterenderer();
    }
    else{

        // code for capturing
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1])-1}`;
        const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1])-1}`;

        const captureid = [col1,col2];

        //array for single movement after first and capturing
        const highlightsquareids = [
            `${current_pos[0]}${Number(current_pos[1])-1}`,
        ];

        captureid.forEach(element => {
            checkpieceofopponent(element,"BLACK");
        });



        highlightsquareids.forEach((hightlight) => {
            globalstate.forEach((row) => {
                row.forEach((element) => {
                    if(element.id == hightlight){
                        element.highlight = true;
                    }
                })
            })
        })
        globalstaterenderer();
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
            else if(square.piece.piece_name == "BLACK_PAWN"){
                blackpawnclicked(square);
            }
        }
        else{
            selfhighlightstate = null;
            const childelementofclickedel = Array.from(event.target.childNodes);
            
            if(childelementofclickedel.length == 1 || event.target.localName == "span"){
                //if player click on circle
                if(event.target.localName == "span"){
                    const id = event.target.parentNode.id;
                    moveelement(movestate,id);
                    movestate = null;
                }
                //if player clickes on square
                else{
                    const id = event.target.id;
                    moveelement(movestate,id);
                    movestate = null;
                }

                clearpreviousselfhighlight(selfhighlightstate);
                selfhighlightstate = null;
            }
            else{
                clearhighlightlocal();
                clearpreviousselfhighlight(selfhighlightstate);
            }
        }
    });
}

export {globalevent};