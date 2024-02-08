/*
avaScript'te çeşitli operatörler bulunur:

Aritmetik Operatörler: + (toplama), - (çıkarma), * (çarpma), / (bölme), % (mod alma).
Atama Operatörleri: = (atama), +=, -=, *=, /= (kısa atama).
Karşılaştırma Operatörleri: == (eşit mi), != (eşit değil mi), === (aynı tipte ve değerde mi), !==, <, >, <=, >=.
Mantıksal Operatörler: && (ve), || (veya), ! (değil).
Ternary (Üçlü) Operatör: condition ? expression1 : expression2 (koşul ? ifade1 : ifade2).
İkili Operatörler: & (ve), | (veya), ^ (XOR), << (sol kaydırma), >> (sağ kaydırma).

*/

let x = 10;
let y = 5;

let sum = x + y; // 15
let isGreater = x > y; // true
let result = isGreater ? "x, y'den büyüktür" : "x, y'den küçüktür"; // "x, y'den büyüktür"

/*
Karşılaştırm Operatörleri
*/

let now = new Date(); // Geçerli tarih ve saat bilgisini alır
console.log(now);

let specificDate = new Date("2023-12-31"); // Belirli bir tarih oluşturur
console.log(specificDate);

let year = now.getFullYear(); // Yılı alır
let month = now.getMonth(); // Ayı alır (0'dan başlar)
let day = now.getDate(); // Günü alır
let hour = now.getHours(); // Saati alır
let minute = now.getMinutes(); // Dakikayı alır
let second = now.getSeconds(); // Saniyeyi alır

//Mantıksal Operatör

// &&   ve işareti operatörü örneği ( ampersand olarak anlandırılıyor)

const a = 4 > 3 && 10 > 5         // true && true -> true
const b = 4 > 3 && 10 < 5         // true && false -> false
const c = 4 < 3 && 10 < 5         // false && false -> false

// || boru veya operatör, örnek

const d = 4 > 3 || 10 > 5         // true  || true -> true
const e = 4 > 3 || 10 < 5         // true  || false -> true
const f = 4 < 3 || 10 < 5         // false || false -> false

//! olumsuzlama örnekleri

let check = 4 > 3                     // true
let checked = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true


//Arttırma Operatörü JavaScript'te, bir değişkende saklanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, artış öncesi veya sonrası olabilir. Her birini görelim:

// Öncesi Artış
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

// Sonrası Artış

let sayi = 0
console.log(count++)        // 0
console.log(count)          // 1


// Azaltma Operatörü JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azaltma, eksiltme öncesi veya sonrası olabilir. Her birini görelim:

//Öncesi Azaltma
let sayi2 = 0
console.log(--count) // -1
console.log(count)  // -1

//Sonrası Azaltma

let sayi3 = 0
console.log(count--) // 0
console.log(count)   // -1

/*
Koşul Operatörü (Ternary - Üçlü )
Üçlü operatör bir koşul yazmaya izin verir. Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır. Aşağıdaki örneklere bakın
*/

let isRaining = true
isRaining
  ? console.log('Yağmurluk lazım.')
  : console.log('Yağmurluğa gerek yok.')
isRaining = false

isRaining
  ? console.log('Yağmurluk lazım.')
  : console.log('Yağmurluğa gerek yok.')

  //-----
  let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

  