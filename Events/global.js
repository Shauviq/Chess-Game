import { root_div } from "../Helper/constants.js";

function globalevent(){
    root_div.addEventListener("click", (event) => {
        console.log(event);
    });
}

export {globalevent};