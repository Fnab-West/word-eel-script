var word = "health";
var length= word.length;
var space = 20;
var filler = "▢";
var rows = 6;
var marge = 0;
var list = [];
var bod = document.createElement("div");
var key;
var tries = 0;
function replaceAt(s, i, c) {
  const arr = [...s];  // Convert string to array
  arr[i] = c;          // Set char c at pos i
  return arr.join(''); // Back to string
}

bod.style.backgroundColor = "#FAF9F6"
document.body.appendChild(bod);
bod.style.width= "fit-content";
var header = document.createElement("h2");
header.style.fontSize = "100%";
header.innerHTML = "Word-eel";
header.style.textAlign = "center";
bod.appendChild(header);
header.style.margin = 0;
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
window.addEventListener("keydown", function(e) {
    //tested in IE/Chrome/Firefox
    key = e.keyCode;
    if(key != 8){
      const keyName = event.key;
      var keyString = replaceAt(listelements[1].innerHTML,1,keyName);
      alert(keyString);
    }
  })
