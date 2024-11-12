//nesneler referans odaklıdır. []===[]=false olarak algılar.[1,2]===[1,2]=false olarak algılar. Çünkü referans olarak algıladığı için
var dizi1=[]
var dizi2=[]
console.log(dizi1===dizi2)

var dizi3=[1,2]
var dizi4=[1,2]
console.log(dizi3===dizi4)


var nesne1={deger:1}
var nesne2={deger:1}
console.log(nesne1===nesne2)

//this keyword'ü içinde bulunan nesnenin kendisini anlatır. içinde bulunduğu nesneinn ta kendisidir.
console.log(this)

console.log(this===window)

this.alert("merhaba")

alert("merhaba2")//window.alert çalışmış olur.

window.alert("merhaba3")

//nesne tanımlarımızı yaparken içerisinde kendi fonksiyonlarımızı barındırabiliriz.

const urunServis={
    ekle : function(){
        console.log(this)// this fonksiyonun ta kendisidir.
    }
}

urunServis.ekle()