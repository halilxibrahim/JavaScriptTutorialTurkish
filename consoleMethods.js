// Konsol Nesnesi Metotları:
// Konsol nesnesi, tarayıcı veya diğer JavaScript çalışma ortamlarında çıktıları görüntülemek ve hata ayıklamak için kullanılır.
// Metotlar, konsol üzerinde farklı türde mesajlar yazdırmak, veri türlerini incelemek ve diğer hata ayıklama işlemlerini gerçekleştirmek için kullanılır.

// 1. console.log(): Konsola bir mesaj yazdırır.
console.log("Merhaba, dünya!");

// 2. console.error(): Konsola bir hata mesajı yazdırır.
console.error("Bir hata oluştu!");

// 3. console.warn(): Konsola bir uyarı mesajı yazdırır.
console.warn("Bu bir uyarı mesajıdır!");

// 4. console.info(): Konsola bir bilgi mesajı yazdırır.
console.info("Bu bir bilgi mesajıdır.");

// 5. console.table(): Bir nesne veya dizi içeriğini tablo olarak görüntüler.
var meyveler = ["elma", "armut", "muz"];
console.table(meyveler);

// 6. console.clear(): Konsol ekranını temizler.
// console.clear();

// 7. console.dir(): Bir nesnenin özelliklerini görüntüler.
var kullanici = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    yas: 30
};
console.dir(kullanici);

// 8. console.assert(): Bir ifadeyi değerlendirir ve yanlışsa bir hata mesajı yazdırır.
console.assert(2 + 2 === 5, "Hata: 2 + 2, 4'e eşit değil!");

// 9. console.count(): Kaç kez belirli bir metot çağrıldığını sayar.
for (var i = 0; i < 5; i++) {
    console.count("Döngü tekrarı");
}

// 10. console.time() ve console.timeEnd(): Belirli bir işlem süresini ölçmek için kullanılır.
console.time("zaman");
// Yapılacak işlem
console.timeEnd("zaman");
