var sayi=10
var sehir="Ankara"

sayi=11
sehir="iSTANBUL"

var sehir="Adana"  //Hata oluşturmayacak ama sehir olarak Adanayı basacak.Böyle problem le karşılaşıldığından let keywordü ile tanımlama yapılır.

let il="Ankara"
il="Bursa"

// let il="İzmir"

function mesajVer(){
    var isim="Ebru" // Fonksiyon parantezi içerisinde etkili dışında tanımsız.
    console.log(sehir)
    console.log(isim)
    console.log("xxxxxx")
}

console.log(sayi)
console.log(sehir)
console.log(il)

mesajVer()

//console.log(isim)// var isim fonksiyon parantezleri içerisinde tanımlı o yüzden tanımsız.



// for(var i=1;i<10;i++){

// }

// console.log(i)




// for(let i=1;i<10;i++){//let i'yi süslü parantez içerisinde kullanır sadece.

// }

// console.log(i) 



const soyad="Koçak" //const sabit anlamına gelir. Değişmeyen veriler için kullanılır.

//soyad="Demir"//const değişkenini değiştiremezsin.

const sehirler=["Ankara","İstanbul"]//dizide nesne(obje) de bu kural geçerli değildir. referans tiptedirler çünkü. 
sehirler.push("izmir")

sehirler=["Bursa","Mardin"]// hata verir. bellekte yeni yer açıyor.Pointerin işaret ettiği  yeri değiştiriyor. buna da izin vermez.

console.log(soyad)
console.log(sehirler)

