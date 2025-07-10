var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  // x in genel yapısı ve span oluşumu
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    // x in kapanması ve görevin kaybolma olayı
  };
}

var list = document.querySelector("ul"); // ul listesini açma  
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") { // tiklanan şey bir li mi emin olmaya çalışıyoruz
      ev.target.classList.toggle("checked");
    } // herhangi bir li listesine tıklanınca üzerine cizgi çek
  },
  false
);

function newElement() {
    // yeni görev ekleme functionu 
  var li = document.createElement("li"); // görev metni hazırlanıyor yeni li elemanı oluşturur
  var inputValue = document.getElementById("task").value;// input kutusundaki yazıyı alır
  var t = document.createTextNode(inputValue); // görev mernini text node a çevirir
  li.appendChild(t); // text nodeu li içine yerleştirir

// boş metin kontrolü
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = ""; // input kutusu teemizlenir yeni görev eklemeye açık hale gelir

  var span = document.createElement("SPAN"); // yeni gelenn elemana çarpı spanı eklenir
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }; // çarpı işaretne silme işlevi atanır. yeni eklenen çarpılar çin de tıklama olayı yeniden atanır.
  }
}
