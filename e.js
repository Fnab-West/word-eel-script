var word = "health";
var length= word.length;
var space = 20;
var filler = "▢";
var rows = 6;
var marge = 0;
var list = [];
var bod = document.createElement("div");
document.body.appendChild(bod);
bod.style.width = 33%;
for(var i = 0;i < length;i++){
  list[i] = [];
  for(var e = 0;e<rows;e++){
    list[i][e] = filler;
  }
  var text = document.createElement("b");
  text.innerHTML = list[i].join("");
  text.style.verticalAlign = marge.toString() + "px";
  bod.appendChild(text);
  marge -= space;
}
