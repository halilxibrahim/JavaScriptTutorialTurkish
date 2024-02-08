/* 
Date (Tarih Objesi)
JavaScript'te, tarih ve saat bilgilerini işlemek için Date nesnesi bulunur. Bu nesne, gün, ay, yıl, saat, dakika, saniye ve milisaniye gibi tarih ve saat bileşenlerini temsil eder. Örneğin:
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
