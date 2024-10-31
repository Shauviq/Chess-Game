const root_div = document.getElementById("root");

function initgamerender(data){
    data.forEach(element => {
        const rowel = document.createElement("div");
        element.forEach( square => {
            const squarediv = document.createElement("div");
            squarediv.classList.add(square.color,"square");
            rowel.appendChild(squarediv);
        });
        rowel.classList.add("squarerow");
        root_div.appendChild(rowel);
    });
}

export {initgamerender};