// Promise'ler:
// Promise, JavaScript'te asenkron işlemleri yönetmek için kullanılan bir nesnedir. Asenkron işlemler, genellikle ağ istekleri yapmak, dosya okuma/yazma gibi işlemler için kullanılır ve sonuçları gelecekte belirsiz bir zaman diliminde gerçekleşir.

// Promise Oluşturma:
// Yeni bir Promise nesnesi oluşturulur ve içine bir işlev (executor function) verilir. Bu işlev, asenkron bir işlemi başlatır ve sonucu ya başarıyla tamamlanmış (resolve) ya da hata oluşmuş (reject) olarak işaretlenmiş bir duruma getirir.

var myPromise = new Promise(function(resolve, reject) {
    // Asenkron bir işlem başlatılır (örneğin, bir HTTP isteği yapılır)
    var islemBasarili = true; // Örnek durum
    if (islemBasarili) {
        // İşlem başarılıysa, resolve fonksiyonu çağrılır ve sonuç iletilir
        resolve("İşlem başarıyla tamamlandı!");
    } else {
        // İşlem başarısızsa, reject fonksiyonu çağrılır ve hata iletilir
        reject("İşlem başarısız oldu!");
    }
});

// Promise Kullanımı:
// then() ve catch() yöntemleriyle, bir Promise nesnesinin başarı ve hata durumları işlenir.

myPromise.then(function(sonuc) {
    // Promise başarıyla tamamlandığında bu blok çalışır
    console.log("Başarılı: " + sonuc);
}).catch(function(hata) {
    // Promise'te hata oluştuğunda bu blok çalışır
    console.error("Hata: " + hata);
});

// Birleştirilmiş İşlem Zinciri:
// Birden fazla Promise zinciri birleştirilebilir ve ardışık işlemler zinciri oluşturulabilir.

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));

// Promise Chaining:
// then() yöntemi, bir Promise nesnesinin sonucunu başka bir Promise nesnesine ileterek zincirleme işlemler yapmayı sağlar.

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('ilk adım');
    }, 1000);
});

promise1.then(function(value) {
    console.log(value);
    return 'ikinci adım';
}).then(function(value) {
    console.log(value);
    return 'üçüncü adım';
}).then(function(value) {
    console.log(value);
});

// Bu, ardışık işlemler zinciri oluşturur. Her then() bloğu, önceki işlemin sonucunu alır ve yeni bir işlem gerçekleştirir.

// Promise'ler, asenkron kodu daha düzenli ve okunabilir hale getirir ve callback cehenneminden (callback hell) kaçınmanıza olanak tanır.
