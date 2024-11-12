//classlar bir metodun/fonksiyonun/özelliğin bir arada tutulması için kullanılır. 
//aşağıdaki blok tanımdır.
class Personel{//SINIFLAR PASCAL CASE DİR. YANİ kelimelerin ilk harfleri BÜYÜK HARFLE BAŞLAR.
    //class içinde fonksiyon tanımlanabilir.
    kaydet(){
        console.log("Personel Kaydedildi...")
    }
}

//yukarıdaki bloğa göre örnek oluşturulmalı.
const personel = new Personel() //class örneği oluşturulmuş oldu.
personel.kaydet()


//Personelin ismini tutmak için

class Personel2{//SINIFLAR PASCAL CASE DİR. YANİ kelimelerin ilk harfleri BÜYÜK HARFLE BAŞLAR.
    //class içinde fonksiyon tanımlanabilir.
    
    constructor(ad,soyad){  //
        this.ad=ad
        this.soyad=soyad
    }

    
    kaydet(){
        console.log("Personel Kaydedildi..."+this.ad+" "+this.soyad)
        console.log(`Personel Kaydedildi : ${this.ad}`)//string literal altgr shift space
        
    }
}

//yukarıdaki bloğa göre örnek oluşturulmalı.
const personel2 = new Personel2("Ebru","Koçak") //class örneği oluşturulmuş oldu.
personel2.kaydet()
personel2.ad="Ebru"
console.log(personel2.ad)
console.log(personel2.soyad)

