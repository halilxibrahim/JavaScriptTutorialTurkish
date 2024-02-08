// Olay Dinleyicileri

// Olaylar, kullanıcı etkileşimlerine (örneğin, bir düğmeye tıklama, fareyi bir öğenin üzerine getirme, bir tuşa basma vb.) yanıt olarak tetiklenen eylemlerdir. Olay dinleyicileri, belirli bir olay meydana geldiğinde çalıştırılacak JavaScript işlevleridir.

// 1. Olay Dinleyicisi Ekleme:
// Bir HTML elemanına bir olay dinleyicisi eklemek için addEventListener() yöntemini kullanırız. Bu yöntem, belirli bir olayı ("click", "mouseover", "keydown", vb.) dinler ve olay meydana geldiğinde belirtilen işlevi çalıştırır.

var myButton = document.getElementById("myButton"); // Bir düğmeyi seçme
myButton.addEventListener("click", function() {
    console.log("Düğmeye tıklandı!"); // Düğmeye tıklandığında bir mesaj yazdırma
});

// Yukarıdaki örnekte, "click" olayı gerçekleştiğinde, belirtilen işlev (callback function) çalıştırılacaktır.

// 2. Olay Dinleyicisi Kaldırma:
// Bir olay dinleyicisini kaldırmak için removeEventListener() yöntemini kullanırız. Bu yöntem, önceden eklenmiş bir olay dinleyicisini kaldırır.

function handleClick() {
    console.log("Düğmeye tıklandı!");
}

myButton.addEventListener("click", handleClick); // Olay dinleyicisi ekleme
myButton.removeEventListener("click", handleClick); // Olay dinleyicisini kaldırma

// Yukarıdaki örnekte, handleClick işlevi düğmeye tıklama olayını dinlemek için eklenir, ancak daha sonra removeEventListener() kullanılarak kaldırılır.

// Olay dinleyicileri, web sayfalarının etkileşimli ve dinamik olmasını sağlar. Kullanıcıların belirli eylemlere yanıt olarak sayfanın nasıl davranacağını belirlemek için kullanılabilirler.
