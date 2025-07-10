var myNodelist = document.qetElementsByTagName("LI");
var i;
for(i=0;i< myNodelist.length;i++){
    var span =document.createElement("SPAN");
    var txt =document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    //x nın genel yapısı ve span oluşumu
}
var close =document.getElementsByClassName("close");
var i;
for(i=0;i< close.length;i++){
    close[i].onclick = function () {
    var div =this.parentElement;
    div.style.display = "none";
// x ın kapanması ve görevin kaybolma olayı
};
}
var list = document.querySelector("ul"); // ul listesini açma
list.addEventListener("click",function(ev){
    if(ev.target.tagName === "LI"){ // tıklanan şey bşr li mi emin olmaya çalışıyoruz
        ev.target.classList.toggle("checked");
    } // herhangi bir li listessie tıklanınca üzerine cizgi çek
},
);
function newElement(){
     // yeni görev ekleme functionu
     
     var li =document.createElement("li"); // görev metni hazırlanıyor
     var inputValue = document.getElementById("task").value;
     var t= document.createTextNode(inputValue);
     li.appendChild(t);


  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}