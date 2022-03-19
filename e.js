var word = "health";
var length= word.length;
var space = 20;
var filler = "▢";
var rows = 6;
var marge = 0;
var list = [];
var bod = document.createElement("div");
bod.style.backgroundColor = "#FAF9F6"
document.body.appendChild(bod);
bod.style.width= "fit-content";
var header = document.createElement("h2");
header.style.fontSize = "30%";
header.innerHTML = "Word-eel";
bod.appendChild(header);
var list = document.createElement("ul");
list.style.listStyleType = "none";
list.style.margin = 0;
list.style.padding = 0;
bod.appendChild(list);
var listelements = [];

for(var i = 0;i < length;i++){
  list[i] = [];
  for(var e = 0;e<rows;e++){
    list[i][e] = filler;
  }
  var text = document.createElement("li");
  text.innerHTML = list[i].join("");
  
  list.appendChild(text);
  listelements[i] = list;
  marge -= space;
}
