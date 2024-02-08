// Düzenli İfadeler (Regular Expressions):
// Düzenli ifadeler, metin desenlerini aramak, eşleştirmek veya değiştirmek için kullanılan bir dil ve araç setidir.
// JavaScript'te düzenli ifadeler "/.../" arasında bir desen olarak tanımlanır.

// Bir metin deseni tanımlama:
var desen = /elma/;

// Metin içinde desen arama:
var metin = "Bu bir elma ağacıdır.";
console.log(desen.test(metin)); // true (Metin deseni içinde "elma" kelimesi var)

// "test" yöntemi, desenin metin içinde olup olmadığını kontrol eder.

// Deseni metinde arayarak tüm eşleşmeleri döndürme:
var metin = "elma armut elma armut";
var desen = /elma/g; // "g" bayrak, tüm eşleşmeleri bulmak için global arama yapar
var eslesmeler = metin.match(desen);
console.log(eslesmeler); // ["elma", "elma"]

// Deseni metinde arayarak ilk eşleşmeyi döndürme:
var metin = "Bu bir elma ağacıdır.";
var desen = /elma/;
var ilkEslesme = metin.match(desen);
console.log(ilkEslesme); // ["elma"]

// Metindeki tüm eşleşmeleri değiştirme:
var metin = "elma armut elma armut";
var desen = /elma/g;
var yeniMetin = metin.replace(desen, "portakal");
console.log(yeniMetin); // "portakal armut portakal armut"

// Bir metinde deseni arayarak indeksini bulma:
var metin = "Bu bir elma ağacıdır.";
var desen = /elma/;
var indeks = metin.search(desen);
console.log(indeks); // 8 (ilk eşleşmenin başlangıç indeksi)

// Düzenli ifadeler ayrıca metinlerde belirli desenlere göre bölme ve desenleri test etme gibi işlemler için de kullanılabilir.
// Daha karmaşık desenler oluşturmak için farklı özel karakterler ve belirleyiciler kullanılabilir.
