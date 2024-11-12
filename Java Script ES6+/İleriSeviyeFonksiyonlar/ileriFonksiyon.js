// function selam(){
//     console.log("Merhaba...")
// }

// selam()

var selamFonksiyonu=function selam(){ // Fonksiyonlar da referans tiptir.
    console.log("Merhaba...")

}
selamFonksiyonu()

const selamFonksiyonu2=function selam(){
    console.log("Merhaba...222222222")
}
selamFonksiyonu2()

const selamFonksiyonu3=()=>{
    console.log("Merhaba...33333333333")
}
selamFonksiyonu3()

const selamFonksiyonu4=() =>console.log("Merhaba...4444444")
selamFonksiyonu4()

const selamFonksiyonu5=()=>{
    console.log("Merhaba.... 55555555555")
    console.log("Birşey")
}
selamFonksiyonu5()


const selamFonksiyonu6=(mesaj)=>{
    console.log(mesaj)   
}
selamFonksiyonu6("Merhaba Dünya!!!") //any türünde=her tür değer döndürülebilir.


const selamFonksiyonu7=(mesaj,mesaj2)=>{//İki parametre de gönderilebilir.
    console.log(mesaj,mesaj2)   
}
//mesaj="Merhaba Dünya!!!"
//mesaj2="Vurgun..."
selamFonksiyonu7("Merhaba Dünya!!!","Vurgun") //any türünde=her tür değer döndürülebilir.

var topla=(sayi1,sayi2)=>{ //Değer de döndürebiliyoruz.
    return sayi1+sayi2
}  

let toplam=topla(3,4)

console.log(topla)
console.log(toplam)