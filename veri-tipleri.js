/* Veri Tipleri
JavaScript, dinamik ve zayıf tipleme özelliklerine sahip bir programlama dilidir, bu nedenle değişkenlerin veri tipleri çalışma zamanında otomatik olarak belirlenir. İşte JavaScript'te bulunan temel veri tipleri
*/

//String (Metin): Metin veri tiplerini temsil eder. Bir string, tek tırnak (' '), çift tırnak (" "), veya şablon literal ( ) içinde belirtilir.

let isim = 'Halil ibrahim';
let soyad = "Kamacı";
let isimSoyisim = `My name is ${isim,soyad}.`;

//Number (Sayı): Sayısal veri tiplerini temsil eder. Tamsayılar veya ondalık sayılar olabilir.

let sayı = 10;
let fiyat = 19.99; //ondalık

//Boolean (Mantıksal): İki değeri temsil eder: true (doğru) veya false (yanlış).

let evliMi = true;
let kapıAçık = false;

//Undefined: Değer atanmamış bir değişkenin varsayılan değeri undefined'dir.

let x;
console.log(x); // undefined

//Null: Bir değişkenin bilinçli olarak boş olduğunu belirtmek için kullanılır.

let y = null;

//Object (Nesne): Karmaşık veri yapılarını temsil eder. Nesneler, anahtar-değer çiftlerinden oluşan bir koleksiyondur.

let kişi = {
    name: 'Halil',
    age: 24,
    isAdmin: false
};

//Array (Dizi): Bir dizi, sıralı bir listeyi temsil eder. Her bir eleman bir indeks numarasıyla erişilebilir.

let colors = ['kırmızı', 'beyaz', 'mavi'];

//Function (Fonksiyon): Bir işlevi temsil eder. JavaScript'te fonksiyonlar birinci sınıf nesnelerdir, yani diğer nesneler gibi işlem görebilirler.

function toplama (a,b) {
    return a + b;
}
function ucgenealan (x, y) {
    return x * y / 2; 
}

//Symbol: Benzersiz ve değişmez değerler oluşturmak için kullanılır. Genellikle nesne özelliklerinin anahtarları olarak kullanılır.

let key = Symbol('description');
