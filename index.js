import { initgame } from "./Data/data.js";
import { initgamerender } from "./render/main.js";

//will be usefull till game end
const globalstate = initgame();

(initgamerender(globalstate));
