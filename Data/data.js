function Greet() {
  alert("Hello, World");
}

  
// for each square
function Square(color, id, piece) {
  return { color, id, piece };
}

function dosquarerow(rowid){
  const squarerow = [];
  const abcd = ['a','b','c','d','e','f','g','h'];

  if(rowid%2==0){
    abcd.forEach((element, index) => {
      if(index%2==0){
        squarerow.push(Square("white",element + rowid,null));
      }
      else{
        squarerow.push(Square("black",element + rowid,null));
      }
    })
  }
  else{
    abcd.forEach((element, index) => {
      if(index%2==0){
        squarerow.push(Square("black",element + rowid,null));
      }
      else{
        squarerow.push(Square("white",element + rowid, null));
      }
    })
  }

  return squarerow;
}

function initgame(){
    return [dosquarerow(8),dosquarerow(7),dosquarerow(6),dosquarerow(5),dosquarerow(4),dosquarerow(3),dosquarerow(2),dosquarerow(1)];
}

export {initgame};