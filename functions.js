// JavaScript'te fonksiyonlar, belirli bir işlevi gerçekleştirmek için kullanılır.
// Fonksiyonlar, kodu yeniden kullanılabilir ve daha okunabilir hale getirebilir.

// Bir fonksiyon tanımlamak için "function" anahtar kelimesi kullanılır.

// Örnek: İki sayının toplamını hesaplayan bir fonksiyon tanımlayalım.
function topla(sayi1, sayi2) {
    var toplam = sayi1 + sayi2;
    return toplam; // Sonucu döndür
}

// Fonksiyonları çağırmak için fonksiyon adını ve gerekli argümanları kullanırız.
var sonuc = topla(3, 5); // "topla" fonksiyonunu çağır ve sonucu "sonuc" değişkenine ata.
console.log(sonuc); // 8

// Fonksiyonlar ayrıca değer döndürmek zorunda değildir.
// Örneğin, bir fonksiyon bir değer döndürmek yerine bir işlem yapabilir.
function selamla(isim) {
    console.log("Merhaba, " + isim + "!");
}

// Fonksiyonu çağırırken, gerekli argümanı geçiririz.
selamla("Ahmet"); // Merhaba, Ahmet!

// Fonksiyonlar ayrıca varsayılan değerlerle de tanımlanabilir.
function karsilama(isim = "Misafir") {
    console.log("Hoş geldiniz, " + isim + "!");
}

karsilama(); // Hoş geldiniz, Misafir!
karsilama("Ali"); // Hoş geldiniz, Ali!

// JavaScript'te fonksiyonlar bir değişkene atanabilir veya başka bir fonksiyona argüman olarak geçirilebilir.
var kareAl = function(x) {
    return x * x;
};

console.log(kareAl(3)); // 9

// Fonksiyonları bir araya getirerek karmaşık işlemler yapabiliriz.
// Örneğin, bir fonksiyon, başka bir fonksiyonun sonucunu kullanarak bir işlem gerçekleştirebilir.
function ikiKatiniAl(x) {
    return x * 2;
}

function toplaminiAl(y) {
    return y + y;
}

var sonuc = toplaminiAl(ikiKatiniAl(3));
console.log(sonuc); // 12
