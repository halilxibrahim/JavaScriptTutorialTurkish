// Web Depolama (Web Storage):
// Web depolama, web tarayıcılarının yerel olarak veri depolamak için sunduğu bir API'dir. Bu, tarayıcıda oturumlar arası veya oturumlar arası veri depolamak için kullanılır.

// 1. Local Storage:
// Local Storage, belirli bir anahtar-değer çiftini kalıcı olarak tarayıcıda saklamak için kullanılır. Bu veri, kullanıcı tarayıcıyı kapatsa bile korunur.

// Local Storage'a veri ekleme:
localStorage.setItem("anahtar", "değer");

// Local Storage'dan veri almak:
var veri = localStorage.getItem("anahtar");
console.log(veri); // değer

// Local Storage'dan veri silme:
localStorage.removeItem("anahtar");

// Local Storage'daki tüm verileri silme:
// localStorage.clear();

// 2. Session Storage:
// Session Storage, bir tarayıcı oturumu boyunca veri depolamak için kullanılır. Oturum sonlandığında, bu veriler otomatik olarak silinir.

// Session Storage'a veri ekleme:
sessionStorage.setItem("anahtar", "değer");

// Session Storage'dan veri almak:
var veri = sessionStorage.getItem("anahtar");
console.log(veri); // değer

// Session Storage'dan veri silme:
sessionStorage.removeItem("anahtar");

// Session Storage'daki tüm verileri silme:
// sessionStorage.clear();

// Web depolama, çerezlere (cookies) kıyasla daha güvenli ve daha fazla depolama alanı sunar.
// Veri depolama, web uygulamalarında oturum durumlarını, tercihleri, kullanıcı ayarlarını ve daha fazlasını saklamak için kullanılabilir.
// Ancak, hassas verileri depolamadan önce güvenlik önlemleri almak önemlidir, çünkü depolanan verilere JavaScript kodu tarafından erişilebilir.
