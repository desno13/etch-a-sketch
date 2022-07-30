
const container = document.querySelector('#pad'); 

function Grid(size){
for(c = 0; c < size; c++){
  let cell = document.createElement("div");
  cell.setAttribute('id',c+1);
  container.appendChild(cell).className = "grid-item";
  console.log("in the loop")
  };
  for(a = 0; a < size; a++){
    let row = document.getElementById(a+1)
    for(c = 0; c < size; c++){
      let col = document.createElement("div");
      col.setAttribute('id', "c"+(c+1));
      row.appendChild(col).className = "col";
      console.log("in the loop")
      };
  };
}

Grid(16);
