document.addEventListener('DOMContentLoaded', function() {
    const elementsToSwitch = document.querySelectorAll('[data-key]');


    const translations = {
        "ar": {
            "home": "الرئيسية",
            "about": "من نحن",
            "service": "الخدمات",
            "contact_us": "اتصل بنا",
            "hero_text_1": "ابتسامتك المشرقة",
            "hero_text_2": "تستحق رعاية الأخصائيين",
            "hero_text_3": "لنضيء مستقبلك",
            "hero_extra_text": "استمتع بتجربة فريدة من رعاية الأسنان الراقية التي تعزز صحة وجمال ابتسامتك. دعنا نبني معاً غدًا أكثر إشراقاً وحيوية.",
            "rate_emergency_service": "خدمة الطوارئ",
            "rate_recover_patient": "مريض تماثل للشفاء",
            "rate_market_experience": "سنوات من الخبرة في السوق",
            "book_now": "احجز الآن",
            "enquires": "الاستفسارات",
            "need_dental_service": "هل تحتاج إلى خدمة أسنان؟",
            "opening_hours": "ساعات العمل",
            "book_appointment": "احجز موعدًا",
            "about_us": "من نحن",
            "about_main_header": "التزامنا بالتميز في طب الأسنان",
            "about_main_content": "منذ أكثر من ثلاثة عقود، وإلى الآن، عيادات Alajaji Dental  تتبوأ قمة الصدارة والريادة في مجال طب الأسنان والعناية بها، وذلك بفضل التزامنا بأعلى المعايير الطبية وأكثرها جودة وأمانًا. نحن نستخدم التقنيات المتطورة الحديثة، ونوظف الكوادر الطبية المدربة والماهرة، ونوفر أحدث وأجود المرافق والمعدات والأدوات الأكثر أمانًا. لدينا مئات من أطباء الأسنان الماهرين الذين يعملون في عياداتنا العديدة، ولا زلنا ننمو ونتوسع.",
            "our_services": "خدماتنا",
            "service_main_header": "رعاية أسنان شاملة مصممة خصيصًا لكل ابتسامة",
            "more_services": "المزيد من الخدمات",
            "see_transformation": "شاهد التحول",
            "transformation_main_header": "نتائج مذهلة تُبرز التأثير الذي يغير الحياة",
            "contact_us": "اتصل بنا",
            "about_main_header_sec": "التزامنا بالتميز في طب الأسنان",
            "our_doctors": "أطباؤنا",
            "doctors_main_header": "تعرف على أطبائنا ذوي الخبرة والعناية",
            "book_your_appointment": "احجز موعدك",
            "contact_main_header": "احجز موعدك اليوم مع Alajaji Dental ",
            "contact_extra_text": "هل تحلم بابتسامة مشرقة؟ تواصل معنا الآن لحجز موعدك ودع فريقنا المتخصص يعتني بك، ليضمن لك تجربة علاجية استثنائية تُعيد الثقة والجمال إلى ابتسامتك.",
            "working_hours": "ساعات العمل",
            "working_hours_text": "نحن نهتم دائمًا بابتسامتك",
            "surname_label": "اللقب",
            "surname_placeholder": "أدخل لقبك",
            "family_name_label": "اسم العائلة",
            "family_name_placeholder": "أدخل اسم عائلتك",
            "email_label": "البريد الإلكتروني",
            "email_placeholder": "أدخل بريدك الإلكتروني",
            "phone_number_label": "رقم الهاتف",
            "phone_number_placeholder": "أدخل رقم هاتفك",
            "appointment_date_label": "التاريخ",
            "message_label": "الرسالة",
            "message_placeholder": "اكتب رسالتك هنا...",
            "send_button": "إرسال",
            "write_to_us": "عبر الايمايل",
            "contact_us_social_media": "تواصل معنا",
            "workinghours_content" : " السبت - الخميس 9:00 ص - 9:00 م",
            "branch_malaz": "فرع الملز - د.مستوصف عبد العزيز العجاجي - الفرع الرئيسي",
            "branch_olaya": "فرع العليا - مستشفى الدكتور سليمان الحبيب",
            "branch_riyan": "فرع الريان - مستشفى الدكتور سليمان الحبيب",
            "branch_suwaidi": "فرع السويدي - مستشفى الدكتور سليمان الحبيب",
            "branch_qassim": "فرع القصيم - مستشفى الدكتور سليمان الحبيب",
            "branch_takhassusi": "فرع التخصصي - مستشفى الدكتور سليمان الحبيب",
            "branch_dubai": "فرع دبي - مستشفى الدكتور سليمان الحبيب",
            "branch_khobar": "فرع الخبر",
            "branch_label"  : "الفرع",
            "workinghours_content_sec" : "السبت - الخميس",
            "branch_header" : "فروعنا"
        },
        "en": {
            "home": "Home",
            "about": "About",
            "service": "Service",
            "contact_us": "Contact Us",
            "hero_text_1": "Your smile",
            "hero_text_2": "matters, expert dental care",
            "hero_text_3": "a bright tomorrow",
            "hero_extra_text": "Experience top-quality dental care focused on your smile’s health and beauty. Trust us to create a brighter, healthier tomorrow.",
            "rate_emergency_service": "Emergency Service",
            "rate_recover_patient": "Recover Patient",
            "rate_market_experience": "Market Experience",
            "book_now": "Book Now",
            "enquires": "Enquires",
            "need_dental_service": "Need Dental Service?",
            "opening_hours": "Opening Hours",
            "book_appointment": "Book An Appointment",
            "about_us": "ABOUT US",
            "about_main_header": "Commitment to your smile's health and beauty",
            "about_main_content": "For over three decades, Alajaji Dental  has been at the forefront of dental care, delivering the highest quality and safest treatments with advanced technology and a team of highly skilled professionals. We continue to grow and expand to better serve our community.",
            "our_services": "OUR SERVICES",
            "service_main_header": "Comprehensive dental care tailored for every smile",
            "more_services": "More Services",
            "see_transformation": "SEE THE TRANSFORMATION",
            "transformation_main_header": "Stunning results that showcase the life-changing impact",
            "contact_us": "Contact Us",
            "about_main_header_sec": "Commitment to your smile's health and beauty",
            "our_doctors": "OUR DOCTORS",
            "doctors_main_header": "Meet our experienced and caring dental professionals",
            "book_your_appointment": "BOOK YOUR APPOINTMENT",
            "contact_main_header": "Book Your dental visit online with Alajaji Dental ",
            "contact_extra_text": "Ready to take the next step towards a healthier smile? Use our easy online booking system to schedule your dental appointment. Simply select a convenient date and time, provide some basic information, and we’ll handle the rest.",
            "working_hours": "Working Hours",
            "working_hours_text": "We always take care of your smile",
            "surname_label": "Surname",
            "surname_placeholder": "Enter your surname",
            "family_name_label": "Family Name",
            "family_name_placeholder": "Enter your family name",
            "email_label": "Email",
            "email_placeholder": "Enter your email",
            "phone_number_label": "Phone Number",
            "phone_number_placeholder": "Enter your phone number",
            "appointment_date_label": "Date",
            "message_label": "Message",
            "message_placeholder": "Write your message here...",
            "send_button": "Send",
            "write_to_us": "Email Us",
            "contact_us_social_media": "Social Media",
            "workinghours_content" : "Saturday - Thursday 9:00 AM - 9:00 PM",
            "branch_malaz": "Al Malaz Branch - Dr. Abdulaziz Al-Ajaji Clinic (Main Branch)",
            "branch_olaya": "Olaya Branch - Dr. Sulaiman Al Habib Hospital",
            "branch_riyan": "Riyan Branch - Dr. Sulaiman Al Habib Hospital",
            "branch_suwaidi": "Suwaidi Branch - Dr. Sulaiman Al Habib Hospital",
            "branch_qassim": "Qassim Branch - Dr. Sulaiman Al Habib Hospital",
            "branch_takhassusi": "Takhassusi Branch - Dr. Sulaiman Al Habib Hospital",
            "branch_dubai": "Dubai Branch - Dr. Sulaiman Al Habib Hospital",
            "branch_khobar": "Khobar Branch",
            "branch_label"  : "Branch",
            "workinghours_content_sec" : "Saturday - Thursday",
            "branch_header" : "Branches"



        }
    };
    


    function setLanguagePreference(language) {
        try {
            sessionStorage.setItem('selectedLanguage', language);
        } catch (error) {
            console.error('Failed to save language preference:', error);
        }
    }

    function getLanguagePreference() {
        try {
            const language = sessionStorage.getItem('selectedLanguage');
            return language || 'ar';
        } catch (error) {
            console.error('Failed to retrieve language preference:', error);
            return 'en';
        }
    }

    function switchLanguage(language) {
        elementsToSwitch.forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = translations[language]?.[key] || translations['en'][key] || `[${key}]`;

            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        });

        changeDirectionAndFont(language);

        setLanguagePreference(language);
    }

    function changeDirectionAndFont(language) {
        const containers = [
            'hero_section',
            // 'contact_hero_container',
            'about_content',
            'service_content',
            'service_header',
            'transformation_container_header',
            'about_us_section',
            'contact_header_main',
            'contact_main',
            'about_content_wrapper',
            'service_card',
            'service_card_header',
            'branch_main_header'
            
            
            


        ];

        containers.forEach(className => {
            const container = document.querySelectorAll(`.${className}`);
            container.forEach(item => {
                if (language === 'ar') {
                    item.style.direction = "rtl";
                    document.getElementById("branches").style.fontFamily = '"Noto Kufi Arabic", serif';
                    
                } else {
                    item.style.direction = "ltr";
                }
            });
        });

        if (language === 'ar') {
            document.body.style.fontFamily = '"Noto Kufi Arabic", serif';

            document.querySelectorAll("button, .nav__links_sec li, h1, form input, form textarea , .email_input input").forEach(element => {
                element.style.fontFamily = '"Noto Kufi Arabic", serif';
            });

            document.querySelectorAll(".main_content h1").forEach(item => {
                item.style.fontSize = "2.5rem"; // Ensure correct Arabic font size
                console.log("done");
            });

            document.querySelectorAll(".service_card_header svg").forEach(item => {
                item.style.position = "relative";
            });
            
        } else {
            document.body.style.fontFamily = '"Plus Jakarta Sans", sans-serif';

            document.querySelectorAll("button, .nav__links_sec li, h1, form input, form textarea , .email_input input").forEach(element => {
                element.style.fontFamily = '"Plus Jakarta Sans", sans-serif';
            });
        }


        document.querySelectorAll(".rate_num").forEach(rate => {
            rate.style.direction = language === 'ar' ? 'rtl' : 'ltr';
        });
    }

    const savedLanguage = getLanguagePreference();
    switchLanguage(savedLanguage);

    function languageSelects() {
        const languageSelect = document.getElementById('language-select');
        if (!languageSelect) {
            return;
        }
        languageSelect.addEventListener('change', function() {
            const selectedOption = languageSelect.options[languageSelect.selectedIndex];
            const selectedLang = selectedOption.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    }
    languageSelects()
}, 100);