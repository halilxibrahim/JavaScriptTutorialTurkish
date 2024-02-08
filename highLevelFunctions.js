// Örnek 1: Fonksiyonları parametre olarak alan bir yüksek düzeyli fonksiyon
function islemYap(fonksiyon, x, y) {
    return fonksiyon(x, y);
}

// İki sayının toplamını hesaplayan fonksiyon
function topla(x, y) {
    return x + y;
}

// İki sayının farkını hesaplayan fonksiyon
function cikar(x, y) {
    return x - y;
}

// "islemYap" fonksiyonunu kullanarak "topla" ve "cikar" fonksiyonlarını çağırabiliriz.
console.log(islemYap(topla, 5, 3)); // 8
console.log(islemYap(cikar, 5, 3)); // 2

// Örnek 2: Bir fonksiyon döndüren bir yüksek düzeyli fonksiyon
function islemSec(islemAdi) {
    if (islemAdi === 'topla') {
        return function(x, y) {
            return x + y;
        };
    } else if (islemAdi === 'cikar') {
        return function(x, y) {
            return x - y;
        };
    } else {
        return function(x, y) {
            return 'Geçersiz işlem';
        };
    }
}

// "islemSec" fonksiyonunu kullanarak farklı işlemleri seçebiliriz.
var toplaFonksiyonu = islemSec('topla');
var cikarFonksiyonu = islemSec('cikar');

console.log(toplaFonksiyonu(5, 3)); // 8
console.log(cikarFonksiyonu(5, 3)); // 2

// Örnek 3: Yüksek düzeyli fonksiyonlar ve dizi metodlarıyla birlikte kullanım
var sayilar = [1, 2, 3, 4, 5];

// Dizideki her bir öğenin karesini hesaplayan bir fonksiyon
function kareAl(x) {
    return x * x;
}

// "map" metodu, bir dizinin her öğesi için belirtilen fonksiyonu çağırır ve yeni bir dizi döndürür.
var kareler = sayilar.map(kareAl);
console.log(kareler); // [1, 4, 9, 16, 25]
