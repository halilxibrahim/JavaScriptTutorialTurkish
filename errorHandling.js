// Hata İşleme (Error Handling):
// JavaScript'te hata işleme, kodunuzda oluşabilecek hataları belirlemek ve bu hatalara uygun bir şekilde yanıt vermek anlamına gelir.
// Hata işleme, uygulamanızın güvenilirliğini artırır ve beklenmedik durumlarla başa çıkmanıza olanak tanır.

// 1. try...catch Bloğu:
// try bloğu içinde oluşabilecek hataları yakalamak ve bir catch bloğunda işlemek için kullanılır.

try {
    // Hata oluşturacak bir kod parçası
    var x = y + 1; // y tanımlı değil, bu nedenle hata oluşacak
} catch (error) {
    // Hata durumunda çalışacak kod
    console.error("Hata oluştu: " + error.message);
}

// 2. finally Bloğu:
// finally bloğu, try-catch bloğunun sonunda her durumda çalıştırılacak kod parçacığı sağlar.

try {
    // Potansiyel olarak hata oluşturacak bir kod parçası
} catch (error) {
    // Hata durumunda çalışacak kod
} finally {
    // Her durumda çalıştırılacak kod
}

// 3. throw İfadesi:
// throw ifadesi, belirli bir hatayı oluşturur ve hatanın yakalanması için bir catch bloğuna yönlendirir.

function bol(x, y) {
    if (y === 0) {
        throw new Error("Bölme sıfıra bölünemez.");
    }
    return x / y;
}

try {
    var sonuc = bol(10, 0);
    console.log(sonuc);
} catch (error) {
    console.error("Hata oluştu: " + error.message);
}

// 4. Error Nesnesi:
// JavaScript'te hatalar Error nesneleri olarak temsil edilir ve hata türüne ve ayrıntılarına erişmenizi sağlar.

try {
    // Hata oluşturacak bir kod parçası
} catch (error) {
    if (error instanceof TypeError) {
        // TypeError durumunda yapılacak işlemler
    } else if (error instanceof RangeError) {
        // RangeError durumunda yapılacak işlemler
    } else {
        // Diğer hata türleri için genel işlemler
    }
}

// 5. Custom Error (Özel Hata):
// Özel hatalar, genellikle Error sınıfından türetilen ve kendi uygulama mantığınıza uygun hata türlerini temsil eden hatalardır.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("Bu bir özel hata!");
} catch (error) {
    console.error("Hata oluştu: " + error.message);
}
