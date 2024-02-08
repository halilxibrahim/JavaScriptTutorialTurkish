// JavaScript'te koşullar if ve else ifadeleri kullanılarak belirtilir.
// Koşullar, belirli bir durumun doğru olup olmadığını kontrol eder.

// Basit bir örnek: Eğer bir sayı 10'dan büyükse, ekrana "Sayı 10'dan büyük" yazdır.
var sayi = 15;
if (sayi > 10) {
    console.log("Sayı 10'dan büyük");
}

// Bir koşul sağlanmazsa, bir başka durumu kontrol etmek için "else if" kullanılabilir.
// Eğer bir sayı 10'dan büyükse "Sayı 10'dan büyük" yazdır, değilse "Sayı 10'dan küçük veya eşit" yazdır.
var sayi = 5;
if (sayi > 10) {
    console.log("Sayı 10'dan büyük");
} else {
    console.log("Sayı 10'dan küçük veya eşit");
}

// Birden fazla koşulu kontrol etmek için "else if" ifadesi kullanılabilir.
// Eğer bir sayı 10'dan büyükse "Sayı 10'dan büyük", 5'ten büyükse "Sayı 5'ten büyük", değilse "Sayı 5'ten küçük veya eşit" yazdır.
var sayi = 7;
if (sayi > 10) {
    console.log("Sayı 10'dan büyük");
} else if (sayi > 5) {
    console.log("Sayı 5'ten büyük");
} else {
    console.log("Sayı 5'ten küçük veya eşit");
}

// Birden fazla koşul varsa, "switch" ifadesi de kullanılabilir.
// Bir gün numarasına göre haftanın gününü yazdıran bir örnek:
var gun = 3;
switch (gun) {
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Geçersiz gün numarası");
}
