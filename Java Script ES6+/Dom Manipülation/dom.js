// document.getElementById("bio").innerHTML="EBRU KOÇAK :1995"

// var intro1 = document.getElementById("intro1")
// var mesaj = document.getElementById("mesaj")

// mesaj.innerHTML = intro1.innerHTML

// var tumListeler = document.getElementsByTagName("ul")
// var sehirler = tumListeler[0]

// tumElemanlar = sehirler.getElementsByTagName("li")

// for (i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML)
// }

// var classElemanları=document.getElementsByClassName("intro1")

// alert(classElemanları[1].innerHTML)
// alert(classElemanları.length)

// intro1 i kullanan eleman sayısı
// var queryElemanları=document.querySelectorAll("p.intro1")
// alert(queryElemanları[1].innerHTML)
// alert(queryElemanları.length)

//elementlerimizin ismine göre bulmamıza yarar=getElementsByName
// var isimElermanlari=document.getElementsByName("musteriAdi")
// alert(isimElermanlari[0].value)

//event= tıklama özelliği veriyor bir şeye.Click

//var alev=document.getElementById("alev").addEventListener("click",rengiDegistr)

// var alev=document.getElementById("alev").addEventListener("mouseover",rengiDegistir)

// function rengiDegistir(){
//     document.getElementById("div1").style.color="red"
//     var isimElemanlari=document.getElementsByName("musteriAdi")
//     isimElemanlari[0].value="Derin"
// }

// var node=document.getElementById("agac")
// alert(node.childNodes[0].nodeValue)

var baslik=document.createElement("h2")
var node=document.createTextNode("Merhaba Javascript")

baslik.appendChild(node)

var div1=document.getElementById("div1")
var p2=document.getElementById("p2")

div1.insertBefore(baslik,p2)

alert("p2 siliniyor...")
div1.removeChild(p2)

alert("Değiştiriliyor...")
var p1=document.getElementById("p1")
div1.replaceChild(baslik,p1) //Başlığı p1 in yerine koyar.




