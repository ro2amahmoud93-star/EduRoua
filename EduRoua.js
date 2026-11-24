const translations = {

    en: {
        home: "Home",
        about: "About Us",
        courses: "Courses",
        contact: "Contact",
        signup: "Sign Up",
        heroTitle: "Learn Today, Lead Tomorrow",
        heroText: "Discover the skills that shape your future.",
        aboutLabel: "ABOUT EDUROUA",
        aboutTitle: "Empowering Minds Through Education",
        aboutText1: "At EduRoua, we believe that education is the key to a brighter future. Our mission is to make learning accessible, engaging, and effective for everyone.",
        aboutText2: "Explore a wide range of courses, develop new skills, and take the next step toward achieving your goals.",
        explore: "Explore Courses",
        coursesLabel: "OUR COURSES",
        coursesTitle: "Explore Our Popular Courses",
        coursesText: "Discover new skills and start your learning journey with us.",
        webTitle: "Web Development",
        webText: "Learn HTML, CSS and JavaScript to build modern and responsive websites.",
        designTitle: "Graphic Design",
        designText: "Discover the world of design and learn how to create amazing visuals.",
        englishTitle: "English Language",
        englishText: "Improve your English skills and communicate with confidence.",
        allCourses: "View All Courses",
        contactLabel: "CONTACT US",
        contactTitle: "Get In Touch With Us",
        contactText: "We'd love to hear from you. Send us a message!",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Your Message",
        namePlaceholder: "Enter your name",
        emailPlaceholder: "Enter your email",
        phonePlaceholder: "Enter your phone number",
        messagePlaceholder: "Write your message...",
        send: "Send Message",
        info: "Contact Information",
        infoText: "Have questions about our courses? Feel free to contact us."
    },

    ar: {
        home: "الرئيسية",
        about: "من نحن",
        courses: "الكورسات",
        contact: "تواصل معنا",
        signup: "إنشاء حساب",
        heroTitle: "تعلّم اليوم، وقُد المستقبل غداً",
        heroText: "اكتشف المهارات التي تصنع مستقبلك.",
        aboutLabel: "عن EDUROUA",
        aboutTitle: "نرتقي بالعقول من خلال التعليم",
        aboutText1: "في EduRoua نؤمن أن التعليم هو مفتاح المستقبل الأفضل. مهمتنا هي جعل التعلم متاحاً وممتعاً وفعالاً للجميع.",
        aboutText2: "اكتشف مجموعة واسعة من الكورسات، وطوّر مهاراتك، وخذ خطوتك التالية نحو تحقيق أهدافك.",
        explore: "استكشف الكورسات",
        coursesLabel: "كورساتنا",
        coursesTitle: "اكتشف أشهر كورساتنا",
        coursesText: "اكتشف مهارات جديدة وابدأ رحلتك التعليمية معنا.",
        webTitle: "تطوير المواقع",
        webText: "تعلم HTML وCSS وJavaScript لبناء مواقع حديثة ومتجاوبة.",
        designTitle: "التصميم الغرافيكي",
        designText: "اكتشف عالم التصميم وتعلم كيفية إنشاء تصاميم إبداعية.",
        englishTitle: "اللغة الإنكليزية",
        englishText: "طوّر مهاراتك باللغة الإنكليزية وتواصل بثقة.",
        allCourses: "عرض جميع الكورسات",
        contactLabel: "تواصل معنا",
        contactTitle: "يسعدنا التواصل معك",
        contactText: "نحن سعداء بسماع آرائكم، أرسلوا لنا رسالة!",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "رسالتك",
        namePlaceholder: "أدخل اسمك",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        phonePlaceholder: "أدخل رقم هاتفك",
        messagePlaceholder: "اكتب رسالتك هنا...",
        send: "إرسال الرسالة",
        info: "معلومات التواصل",
        infoText: "هل لديك أسئلة حول كورساتنا؟ لا تتردد في التواصل معنا."
    }

};

let currentLang = "en";

document.getElementById("langBtn").addEventListener("click", function() {

    currentLang = currentLang === "en" ? "ar" : "en";

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    this.textContent = currentLang === "en" ? "العربية" : "English";

    const t = translations[currentLang];

    const elements = {
        ".nav-links li:nth-child(1) a": "home",
        ".nav-links li:nth-child(2) a": "about",
        ".nav-links li:nth-child(3) a": "courses",
        ".nav-links li:nth-child(4) a": "contact",
        ".signup-btn": "signup",
        ".hero-content h1": "heroTitle",
        ".hero-content p": "heroText",
        ".section-label": "aboutLabel",
        ".about-content h2": "aboutTitle",
        ".about-content p:nth-of-type(1)": "aboutText1",
        ".about-content p:nth-of-type(2)": "aboutText2",
        ".about-btn": "explore",
        ".courses-heading span": "coursesLabel",
        ".courses-heading h2": "coursesTitle",
        ".courses-heading p": "coursesText",
        ".course-card:nth-child(1) h3": "webTitle",
        ".course-card:nth-child(1) p": "webText",
        ".course-card:nth-child(2) h3": "designTitle",
        ".course-card:nth-child(2) p": "designText",
        ".course-card:nth-child(3) h3": "englishTitle",
        ".course-card:nth-child(3) p": "englishText",
        ".all-courses a": "allCourses",
        ".contact-heading span": "contactLabel",
        ".contact-heading h2": "contactTitle",
        ".contact-heading p": "contactText",
        "label[for='name']": "name",
        "label[for='email']": "email",
        "label[for='phone']": "phone",
        "label[for='message']": "message",
        ".contact-form button": "send",
        ".contact-info h3": "info",
        ".contact-info p": "infoText"
    };

    for (let selector in elements) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = t[elements[selector]];
        }
    }

    document.getElementById("name").placeholder = t.namePlaceholder;
    document.getElementById("email").placeholder = t.emailPlaceholder;
    document.getElementById("phone").placeholder = t.phonePlaceholder;
    document.getElementById("message").placeholder = t.messagePlaceholder;

    document.querySelector(".contact-detail h4").textContent =
        currentLang === "ar" ? "رقم الهاتف" : "Phone Number";

    document.querySelectorAll(".contact-detail h4")[1].textContent =
        currentLang === "ar" ? "البريد الإلكتروني" : "Email Address";

});
