// JSON (JavaScript Object Notation):
// JSON, verileri organize etmek, depolamak ve aktarmak için kullanılan bir hafif veri değişim formatıdır.
// JavaScript'te nesne (object) veri yapısının bir türevidir ve insanlar ve bilgisayarlar tarafından kolayca okunabilir ve yazılabilir.

// JSON Sözdizimi:
// JSON, anahtar-değer çiftleri (key-value pairs) içeren bir veri formatıdır. Anahtarlar bir string olmalıdır ve çift tırnak içinde belirtilmelidir.
// Değerler string, sayı, nesne, dizi, boolean veya null olabilir.

// Örnek bir JSON verisi:
var personel = {
    "ad": "Ahmet",
    "soyad": "Yılmaz",
    "yas": 30,
    "departmanlar": ["Mühendislik", "Yazılım"],
    "aktif": true,
    "izinli": null,
    "adres": {
        "il": "İstanbul",
        "ilçe": "Beşiktaş"
    }
};

// JSON verisini bir stringe dönüştürme (JSON.stringify):
// JSON.stringify() yöntemi, bir JavaScript nesnesini JSON formatına dönüştürür.
var jsonString = JSON.stringify(personel);
console.log(jsonString);
// Çıktı: {"ad":"Ahmet","soyad":"Yılmaz","yas":30,"departmanlar":["Mühendislik","Yazılım"],"aktif":true,"izinli":null,"adres":{"il":"İstanbul","ilçe":"Beşiktaş"}}

// JSON verisini bir JavaScript nesnesine dönüştürme (JSON.parse):
// JSON.parse() yöntemi, bir JSON stringini JavaScript nesnesine dönüştürür.
var personelNesnesi = JSON.parse(jsonString);
console.log(personelNesnesi);
// Çıktı: { ad: 'Ahmet', soyad: 'Yılmaz', yas: 30, departmanlar: [ 'Mühendislik', 'Yazılım' ], aktif: true, izinli: null, adres: { il: 'İstanbul', ilçe: 'Beşiktaş' } }

// JSON verisi, verileri web sunucuları ve istemcileri arasında taşımak, depolamak ve paylaşmak için sıkça kullanılır.
// Web API'leri genellikle JSON formatında veri alışverişi yapar ve AJAX kullanarak bu verileri almak ve göndermek için JSON kullanılabilir.
// JSON, XML'e alternatif olarak kullanılan bir veri formatıdır ve özellikle web uygulamalarında yaygın olarak kullanılır.
