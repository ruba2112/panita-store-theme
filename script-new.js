// 1️⃣ اختر كل الصور في البنر الرئيسي
const banners = document.querySelectorAll('.main-banner img');
let current = 0;

// 2️⃣ وظيفة لتغيير الصور
function changeBanner() {
    banners.forEach((img, index) => {
        img.style.display = 'none';
    });
    banners[current].style.display = 'block';
    current = (current + 1) % banners.length;
}

// 3️⃣ تشغيل التغيير كل 6 ثواني
changeBanner(); // عرض أول صورة فورًا
setInterval(changeBanner, 6000);
