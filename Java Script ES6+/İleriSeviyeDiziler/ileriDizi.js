const dizi=[1,2,3,4]

const kareDizisi=[]

//forEach

dizi.forEach(sayi=>{  //forEach= Dizideki bütün elemanları gezer.
    console.log(sayi)
    kareDizisi.push(sayi*sayi)
})


console.log(kareDizisi)


//map isimli fonksiyon= yeni bir dizi ortaya çıkarabiliyoruz. diziyi yeni bir dizi olarak değiştirerek yeni br diziye aktarıyoruz.

const mapDizi= dizi.map(sayi=> sayi*3) //dizideki her bir elemanı 3 ile çarpıp mapDizi ye ekliyoruz. Eğer map'i kullanacaksan tek satırda oluşturman gerek kodu. yoksa süslü parantezi çoklu satır kod algılayıp çalıştıramayacak kodu.
//mappingi yazılımda özellikle data transformation object denilen sistemler için kullanılır. yani bize bir yerden veri gelir, ve biz o veriyi değiştirerek farklı bir nesneye atarız.

console.log(mapDizi)


//filter

const filtreliDizi=dizi.filter(sayi=>sayi>2)//şart verilir. dizide her bir elemanı gezer. şart sağlanırsa filtreli diziye atar.

console.log(filtreliDizi)

//reduce=kümülatif toplama işlemi gerçekleştirilir.

const toplam=dizi.reduce((acc,sayi)=>{ //parametreler acc ve sayıdır. acc= başlangıç değeri.defaultu 0 oluyor.
    return acc+sayi
},10)//10 başlangıç değerini yani acc yi 0 değil 10 almaya yarayacak.

console.log(toplam)

