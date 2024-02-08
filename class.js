// Sınıflar (Classes):
// ECMAScript 6 ile birlikte JavaScript'e sınıf tabanlı bir yapı eklenmiştir. Sınıflar, nesne yönelimli programlamanın (OOP) temel taşlarından biridir ve daha önceki "prototip tabanlı" yaklaşıma alternatif bir şekilde nesneleri modellemek için kullanılır.

// Sınıf Tanımlama:
// Sınıflar, "class" anahtar kelimesi ile tanımlanır.

class Kedi {
    // Constructor metodu, sınıf bir örneği oluşturulduğunda çağrılan özel bir metottur.
    // Bu metot, sınıfın özelliklerini ve başlangıç değerlerini belirlemek için kullanılır.
    constructor(isim, yas) {
        this.isim = isim;
        this.yas = yas;
    }

    // Sınıfın metotları, sınıf içinde tanımlanır ve herhangi bir nesne örneği üzerinde çağrılabilir.
    // Bu metot, kedinin sesini yazdırır.
    miyav() {
        console.log(this.isim + " miyavladı!");
    }
}

// Sınıfın Kullanımı:
// Yeni bir kedi örneği oluşturmak için "new" anahtar kelimesi kullanılır ve constructor metodu çağrılır.
var kedi1 = new Kedi("Luna", 3);
var kedi2 = new Kedi("Milo", 5);

// Kedilerin özelliklerini ve metotlarını kullanma:
console.log(kedi1.isim); // Luna
console.log(kedi2.yas); // 5
kedi1.miyav(); // Luna miyavladı!
kedi2.miyav(); // Milo miyavladı!

// Kalıtım (Inheritance):
// Sınıflar arasında bir tür kalıtım sağlamak için "extends" anahtar kelimesi kullanılır.
// Alt sınıf (subclass) üst sınıfın (superclass) özelliklerini ve metotlarını miras alır.

class Kaplan extends Kedi {
    // Alt sınıfın constructor metodu, üst sınıfın constructor metodunu çağırmak için "super" anahtar kelimesiyle tanımlanır.
    constructor(isim, yas, agresiflik) {
        super(isim, yas); // Üst sınıfın constructor metodunu çağır
        this.agresiflik = agresiflik;
    }

    // Alt sınıfa özgü bir metot
    saldır() {
        console.log(this.isim + " saldırdı!");
    }
}

// Alt sınıfın kullanımı:
var kaplan1 = new Kaplan("Aslan", 8, "Yüksek");
console.log(kaplan1.agresiflik); // Yüksek
kaplan1.miyav(); // Aslan miyavladı!
kaplan1.saldır(); // Aslan saldırdı!
