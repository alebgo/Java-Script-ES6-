// Twitter'a kullanıcı adı ve şifre ile giriş doğruysa takip edilen kişilerin tweetlerini gösterme
// Birden fazla kullanıcı olacağından dizi şeklinde tanımladık.
var kullanicilar = [
    { email: "ebrukocak@gmail.com", sifre: "12345" },
    { email: "alevkocak@gmail.com", sifre: "12345" }
];

var tivitler = [
    { email: "ebrukocak@gmail.com", tivit: "Bugün hava çok güzel" },
    { email: "ebrukocak@gmail.com", tivit: "Bugün hava çok güzel 2" },
    { email: "alevkocak@gmail.com", tivit: "Kapıyı ben açacağım!" }
];

var email = prompt("Email?");
var sifre = prompt("Şifre?");

function kullaniciVarmi(email,sifre){
    console.log(email);
    console.log(sifre)
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true
        }
    }
    return false
}


function giris(email, sifre) {
    if(kullaniciVarmi(email,sifre)){
    console.log(tivitler)
}
else{
    console.log("Kullanıcı adı ve şifresi hatallı...")
}
}

// Fonksiyonu çalıştır
giris(email, sifre);
