// Yıkım (Destructuring):
// Yıkım, bir dizi veya nesne içindeki değerleri ayıklamak için kullanılan bir özelliktir. 
// Bu, daha kolay okunabilir ve daha kompakt kod yazmanıza olanak tanır.

// Dizi Yıkımı:
var renkler = ["kırmızı", "mavi", "yeşil"];

// Diziden değerleri ayıklayarak değişkenlere atama
var [renk1, renk2, renk3] = renkler;

console.log(renk1); // kırmızı
console.log(renk2); // mavi
console.log(renk3); // yeşil

// Nesne Yıkımı:
var kullanici = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    yas: 30
};

// Nesne içindeki özellikleri ayıklayarak değişkenlere atama
var { ad, soyad, yas } = kullanici;

console.log(ad); // Ahmet
console.log(soyad); // Yılmaz
console.log(yas); // 30

// Yayılma (Spread) Operatörü:
// Yayılma operatörü, bir dizi veya nesnenin öğelerini başka bir diziye veya nesneye yaymak için kullanılır. 
// Bu, dizileri birleştirmek veya nesneleri birleştirmek için kullanılabilir.

// Dizi Yayılması:
var sayilar1 = [1, 2, 3];
var sayilar2 = [4, 5, 6];

// İki diziyi birleştirme
var birlesikSayilar = [...sayilar1, ...sayilar2];

console.log(birlesikSayilar); // [1, 2, 3, 4, 5, 6]

// Nesne Yayılması:
var eskiKullanici = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    yas: 30
};

var yeniKullanici = {
    ...eskiKullanici,
    yas: 31 // Yeni bir değer atama
};

console.log(yeniKullanici); // { ad: "Ahmet", soyad: "Yılmaz", yas: 31 }
