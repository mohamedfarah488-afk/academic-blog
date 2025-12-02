document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/* تنسيق الشعار في قسم الغلاف */
.hero h2 {
    font-size: 2.5rem;
    color: var(--dark-color);
    margin-top: 10px;
}
.hero .slogan {
    font-size: 1.2rem;
    color: #666;
    font-style: italic;
    margin-top: 15px;
}
.btn-secondary {
    background: #6c757d; /* لون ثانوي */
}
.btn-secondary:hover {
    background: #5a6268;
}

/* تنسيق قسم روابط الباحث */
.large-icons a {
    font-size: 2.5rem; /* لجعل الأيقونات كبيرة */
    color: var(--primary-color);
    margin: 0 15px;
}
.large-icons a:hover {
    color: var(--dark-color);
}
.read-more {
    display: block;
    margin-top: 15px;
    font-weight: bold;
    color: var(--primary-color);
}