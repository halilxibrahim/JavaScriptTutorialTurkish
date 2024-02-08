/* DOM Manipülasyonları 
DOM, bir HTML veya XML belgesini temsil eden bir programlama arayüzüdür. 
Tarayıcılar, bir web sayfasını yüklediklerinde, sayfanın içeriğini bir DOM ağacısı oluştururlar. 
Bu ağaç yapısı, HTML veya XML belgesindeki her öğeyi (element), her öğenin özniteliklerini ve içeriğini temsil eden bir veri yapısıdır. 
JavaScript, bu DOM ağacı üzerinde işlem yaparak web sayfalarını dinamik olarak değiştirebilir.


*/


// 1. Eleman Seçme:
// Belirli bir HTML elemanını seçmek için getElementById() veya querySelector() kullanabiliriz.
var myElement = document.getElementById("myElement"); // ID'si "myElement" olan bir elemanı seçme
var elements = document.querySelectorAll(".className"); // CSS sınıfı "className" olan tüm elemanları seçme

// 2. Eleman Oluşturma:
// Yeni bir HTML elemanı oluşturmak için createElement() yöntemini kullanabiliriz.
var newDiv = document.createElement("div"); // Yeni bir div elemanı oluşturma

// 3. Eleman Ekleme:
// appendChild() veya insertBefore() yöntemleriyle oluşturulan elemanları başka bir elemana veya bölgeye ekleyebiliriz.
var parentElement = document.getElementById("parentElement"); // Eklenecek olan bölgeyi seçme
parentElement.appendChild(newDiv); // Yeni oluşturulan div'i belirtilen bölgeye ekleme

// 4. Eleman Kaldırma:
// removeChild() yöntemiyle belirli bir elemanı DOM'dan kaldırabiliriz.
var elementToRemove = document.getElementById("elementToRemove"); // Kaldırılacak elemanı seçme
elementToRemove.parentNode.removeChild(elementToRemove); // Seçilen elemanı DOM'dan kaldırma

// 5. Eleman Stillerini ve Sınıflarını Değiştirme:
// Elemanların stillerini ve sınıflarını değiştirmek için style özelliği ve classList'i kullanabiliriz.
myElement.style.color = "red"; // Bir elemanın rengini değiştirme
myElement.classList.add("newClass"); // Bir elemana yeni bir sınıf ekleme

// 6. Eleman İçeriğini Değiştirme:
// Elemanların içeriğini değiştirmek için innerHTML veya textContent özelliklerini kullanabiliriz.
myElement.innerHTML = "<p>New content</p>"; // Bir elemanın içeriğini HTML ile değiştirme
myElement.textContent = "New text"; // Bir elemanın metin içeriğini değiştirme

// 7. Olay İşleyicilerini Eklemek:
// addEventListener() ile bir elemana olay işleyicisi ekleyebiliriz.
myElement.addEventListener("click", function() {
    console.log("Element clicked!"); // Elemana tıklandığında konsola bir mesaj yazdırma
});
