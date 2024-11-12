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

function giris(email, sifre) {
    // Kullanıcı doğrulama
    var kullanici = kullanicilar.find(function(user) {
        return user.email === email && user.sifre === sifre;
    });

    if (kullanici) {
        // Giriş başarılı, kullanıcının tweetlerini göster
        var kullaniciTivitleri = tivitler.filter(function(tivit) {
            return tivit.email === email;
        });
        console.log("Giriş başarılı! Kullanıcının tweetleri:");
        kullaniciTivitleri.forEach(function(tivit) {
            console.log(tivit.tivit);
        });
    } else {
        console.log("Kullanıcı adı veya şifre hatalı.");
    }
}

// Fonksiyonu çalıştır
giris(email, sifre);
