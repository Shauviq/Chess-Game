import { initgame } from "./Data/data.js";
import { globalevent } from "./Events/global.js";
import { initgamerender } from "./render/main.js";

//will be usefull till game end
const globalstate = initgame();

initgamerender(globalstate);
globalevent();

export {globalstate};
