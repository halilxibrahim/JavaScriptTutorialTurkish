// Temiz Kod Yazma İlkeleri:

// 1. Anlaşılır ve Açık Olun:
// Kodunuzun ne yaptığı hakkında net olun. Değişken adları, fonksiyon adları ve yorum satırları kodunuzu anlaşılır kılacaktır.

// Örnek: Değişken ve fonksiyon adlarını açıklayıcı yapın
var musteriAdi = "Ahmet";
function urunEkle(urunAdi) {
    // Fonksiyonun ne yaptığını açıklayan bir yorum ekleyin
    console.log(urunAdi + " sepete eklendi.");
}

// 2. Tek Sorumluluk İlkesi (Single Responsibility Principle):
// Her fonksiyon veya sınıfın sadece bir görevi olmalıdır. Karmaşık ve çok işlevli yapılar yerine küçük, bağımsız ve yeniden kullanılabilir parçalar oluşturun.

// Örnek: Sepete ürün ekleme işlevi tek bir görevle sınırlı olmalıdır
function urunEkle(urunAdi) {
    // Sepete ürün ekleme işlevi
}

// 3. Kod Tekrarını Önleyin (DRY - Don't Repeat Yourself):
// Benzer veya aynı kodu tekrar tekrar yazmaktan kaçının. Ortak işlevleri ayrı bir fonksiyon veya modülde toplayarak kod tekrarını azaltın.

// Örnek: Ortak bir işlevi kullanarak benzer işlemleri birleştirin
function toplamHesapla(fiyatlar) {
    return fiyatlar.reduce((toplam, fiyat) => toplam + fiyat, 0);
}

// 4. Kodu Kısa Tutun ve Basitleştirin:
// Karmaşık kodlar yerine basit ve anlaşılır alternatifler kullanın. Tek satırlık ifadeleri veya fonksiyonları tercih edin.

// Örnek: Kısa ve açık bir yazım tarzı kullanın
var toplam = fiyatlar.reduce((toplam, fiyat) => toplam + fiyat, 0);

// 5. Hata Yakalama ve İşleme:
// Kodunuzda hata oluşabilecek herhangi bir yerde uygun hata işleme mekanizmalarını ekleyin. Bunlar, kodunuzun daha güvenilir ve sorunsuz çalışmasını sağlar.

// Örnek: Promise'lerde hata işleme
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Veri alınamadı!');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Hata:', error));

// 6. Kodu Düzenleyin ve Biçimlendirin:
// Kodunuzu düzenli ve tutarlı bir biçimde biçimlendirin. Girintileri doğru yapın, boşlukları kullanın ve kodunuzu anlaşılır hale getirin.

// Örnek: Kod biçimlendirme ve düzenleme
function kullaniciGirisiKontrol(kullaniciAdi, sifre) {
    if (kullaniciAdi === 'admin' && sifre === '12345') {
        return true;
    } else {
        return false;
    }
}
