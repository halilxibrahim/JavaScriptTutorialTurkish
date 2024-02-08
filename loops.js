// JavaScript'te döngüler, belirli bir işlemi tekrar tekrar yapmak için kullanılır.
// En yaygın kullanılan döngüler "for" ve "while" döngüleridir.

// 1. for Döngüsü:
// "for" döngüsü, belirli bir koşul sağlanana kadar belirli bir işlemi tekrarlar.

// Örnek: 1'den 5'e kadar olan sayıları ekrana yazdıralım.
for (var i = 1; i <= 5; i++) {
    console.log(i); // Her bir adımda i değeri artar ve ekrana yazdırılır.
}

// Döngüdeki "i" değişkeni genellikle döngü adımını temsil eder.

// 2. while Döngüsü:
// "while" döngüsü, belirli bir koşul sağlandığı sürece belirli bir işlemi tekrarlar.

// Örnek: 1'den 5'e kadar olan sayıları ekrana yazdıralım (while döngüsü ile).
var j = 1; // Başlangıç değeri
while (j <= 5) {
    console.log(j); // Ekrana yazdır
    j++; // j değerini artır
}

// "while" döngüsü, koşul sağlandığı sürece devam eder.
// Bu nedenle döngü içinde dikkatli olmalı ve döngüden çıkış koşulunun sağlanacağından emin olmalısınız.

// Döngüler ayrıca "break" ve "continue" ifadeleriyle kontrol edilebilir.
// "break", döngüyü tamamen durdururken, "continue", döngünün devam eden kısmını atlar ve bir sonraki adıma geçer.

// Örnek: 1'den 10'a kadar olan tek sayıları ekrana yazdıralım, ancak 5'te döngüyü durduralım.
for (var k = 1; k <= 10; k++) {
    if (k % 2 === 0) { // Eğer sayı çiftse
        continue; // Bir sonraki adıma geç
    }
    console.log(k); // Eğer sayı tekse ekrana yazdır
    if (k === 5) { // Eğer sayı 5'e eşitse
        break; // Döngüyü durdur
    }
}
