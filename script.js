document.addEventListener('DOMContentLoaded', () => {
    // 1. الحصول على العناصر من HTML باستخدام معرفاتها (IDs)
    const navToggle = document.getElementById('nav-toggle'); // زر الهامبرغر
    const navMenu = document.getElementById('nav-menu');     // قائمة التنقل

    // التحقق من وجود العناصر لتجنب الأخطاء
    if (navToggle && navMenu) {
        
        // 2. وظيفة التبديل (الفتح والإغلاق) عند النقر على الزر
        navToggle.addEventListener('click', () => {
            // إضافة وإزالة الفئة 'active' التي تتحكم في ظهور القائمة في ملف style.css
            navMenu.classList.toggle('active');
            
            // إضافة وإزالة فئة خاصة لزر الإغلاق (اختياري لتحويل الأيقونة)
            //navToggle.classList.toggle('is-open'); 
        });

        // 3. إغلاق القائمة تلقائياً عند النقر على أي رابط فيها
        navMenu.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                // إزالة الفئة 'active' لإخفاء القائمة
                navMenu.classList.remove('active');
            });
        });
    }
});

// ملاحظة: هذا الكود يعمل فقط بعد تحميل الصفحة بالكامل (DOMContentLoaded).
