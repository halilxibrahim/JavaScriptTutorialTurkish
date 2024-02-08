// Set:
// Set, benzersiz değerleri depolamak için kullanılan bir veri yapısıdır.
// Bir Set, herhangi bir öğenin yalnızca bir kez bulunabileceği bir koleksiyon olarak düşünülebilir.

// Bir Set oluşturmak için "new Set()" kullanılır.
var renkler = new Set();

// Set'e öğe eklemek için "add" yöntemi kullanılır.
renkler.add("kırmızı");
renkler.add("mavi");
renkler.add("yeşil");

// Aynı değer bir kez daha eklenirse, Set bunu kabul etmez.
renkler.add("kırmızı");

// Set'in boyutunu öğrenmek için "size" özelliği kullanılır.
console.log(renkler.size); // Çıktı: 3 (kırmızı, mavi, yeşil)

// Set'teki bir öğeyi kontrol etmek için "has" yöntemi kullanılır.
console.log(renkler.has("mavi")); // Çıktı: true
console.log(renkler.has("sarı")); // Çıktı: false

// Set'ten bir öğe çıkarmak için "delete" yöntemi kullanılır.
renkler.delete("yeşil");

// Set'in içeriğini boşaltmak için "clear" yöntemi kullanılır.
// renkler.clear();

// Set'teki öğeleri döngüyle gezmek için "forEach" yöntemi kullanılır.
renkler.forEach(function(renk) {
    console.log(renk);
});

// Map:
// Map, anahtar/değer çiftlerini depolamak için kullanılan bir veri yapısıdır.
// Anahtarlar benzersiz olmalıdır ve her anahtar yalnızca bir değere karşılık gelir.

// Bir Map oluşturmak için "new Map()" kullanılır.
var ulkeler = new Map();

// Map'e anahtar/değer çiftleri eklemek için "set" yöntemi kullanılır.
ulkeler.set("TR", "Türkiye");
ulkeler.set("US", "Amerika Birleşik Devletleri");
ulkeler.set("DE", "Almanya");

// Aynı anahtara sahip bir değer bir kez daha eklenirse, Map bunu kabul etmez.
ulkeler.set("TR", "Türkiye");

// Map'in boyutunu öğrenmek için "size" özelliği kullanılır.
console.log(ulkeler.size); // Çıktı: 3

// Map'ten bir değer almak için "get" yöntemi kullanılır.
console.log(ulkeler.get("US")); // Çıktı: Amerika Birleşik Devletleri

// Map'ten bir anahtar/değer çiftini silmek için "delete" yöntemi kullanılır.
ulkeler.delete("DE");

// Map'te bir anahtarın varlığını kontrol etmek için "has" yöntemi kullanılır.
console.log(ulkeler.has("TR")); // Çıktı: true
console.log(ulkeler.has("FR")); // Çıktı: false

// Map'teki her bir anahtar/değer çiftini döngüyle gezmek için "forEach" yöntemi kullanılır.
ulkeler.forEach(function(deger, anahtar) {
    console.log(anahtar + " -> " + deger);
});
