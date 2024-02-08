// JavaScript'te dizi, birden fazla öğeyi depolamak için kullanılan bir veri yapısıdır.
// Diziler köşeli parantezler [] içine yazılır ve virgülle ayrılmış öğeler içerir.

// Bir dizi oluşturalım ve bazı örnek öğeler ekleyelim.
var renkler = ["kırmızı", "mavi", "yeşil", "sarı"];

// Dizinin öğelerine erişmek için indis numarasını kullanabiliriz.
// Dizi indisleri 0'dan başlar.
console.log(renkler[0]); // İlk öğe: "kırmızı"
console.log(renkler[2]); // Üçüncü öğe: "yeşil"

// Diziler, farklı türlerdeki öğeleri de içerebilir.
var karisikDizi = ["elma", 3, true, { isim: "Ahmet", yas: 25 }];

// Dizilerin uzunluğunu öğrenmek için "length" özelliğini kullanabiliriz.
console.log(renkler.length); // renkler dizisinin uzunluğu: 4

// Dizilere yeni öğeler eklemek için "push" yöntemini kullanabiliriz.
renkler.push("mor");
console.log(renkler); // ["kırmızı", "mavi", "yeşil", "sarı", "mor"]

// Dizinin belirli bir öğesini değiştirmek için indis numarasını kullanabiliriz.
renkler[1] = "turuncu";
console.log(renkler); // ["kırmızı", "turuncu", "yeşil", "sarı", "mor"]

// Diziden öğe çıkarmak için "pop" yöntemini kullanabiliriz.
var sonRenk = renkler.pop();
console.log(sonRenk); // "mor"
console.log(renkler); // ["kırmızı", "turuncu", "yeşil", "sarı"]

// Dizi öğelerini birleştirmek için "concat" yöntemini kullanabiliriz.
var meyveler = ["elma", "armut", "muz"];
var sebzeler = ["havuç", "patates", "salatalık"];
var meyveSebzeler = meyveler.concat(sebzeler);
console.log(meyveSebzeler); // ["elma", "armut", "muz", "havuç", "patates", "salatalık"]

// Dizi öğelerini sıralamak için "sort" yöntemini kullanabiliriz.
var sayilar = [5, 1, 3, 2, 4];
sayilar.sort();
console.log(sayilar); // [1, 2, 3, 4, 5]
