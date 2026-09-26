/* =========================================================
   WAQAS ALBLOUSHI GOLF
   PREMIUM WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SETTINGS
    ===================================================== */

    const SETTINGS = {

        whatsapp:
            "97466565639",

        whatsappMessage:
            "Hello Waqas, I would like to enquire about golf coaching in Qatar.",

        slideDuration:
            6500

    };

    const translations = {
        en: {
            navHome: "Home",
            navAbout: "About",
            navCoaching: "Coaching",
            navPlan: "Package",
            navContact: "Contact",
            enquire: "Enquire",
            menu: "Menu",
            heroTestimonial: "USGTF PROFESSIONAL",
            heroLocation: "DOHA, QATAR",
            heroSmall: "Golf Coaching",
            heroLarge: "in Qatar",
            heroDesc: "Practical coaching for beginners, intermediate and advanced players.",
            explore: "Explore Coaching",
            discover: "Discover Coaching",
            book: "Book a Lesson",
            startJourney: "Start Your Journey",
            meetCoach: "Meet Your Coach",
            hero1Label: "PERSONAL GOLF COACHING",
            hero1TitleA: "PLAY WITH",
            hero1TitleB: "PURPOSE.",
            hero1Text: "Build a more consistent swing, sharper decisions, and greater confidence on the course.",
            hero2Label: "PERFORMANCE · PRECISION · PROGRESS",
            hero2TitleA: "YOUR GAME.",
            hero2TitleB: "YOUR NEXT LEVEL.",
            hero2Text: "Structured coaching designed around your goals, your game, and your progress.",
            hero3Label: "COACHING IN DOHA",
            hero3TitleA: "CONFIDENCE",
            hero3TitleB: "STARTS HERE.",
            hero3Text: "Practical guidance to help you step onto the course with greater clarity and confidence.",
            hero4Label: "ALL LEVELS WELCOME",
            hero4TitleA: "FROM FIRST SWING",
            hero4TitleB: "TO FINER DETAILS.",
            hero4Text: "Coaching for beginners, intermediate players, and golfers looking to refine their game.",
            hero5Label: "WAQAS ALBLOUSHI · USGTF PROFESSIONAL",
            hero5TitleA: "MAKE EVERY",
            hero5TitleB: "SHOT COUNT.",
            hero5Text: "Develop the skills, course awareness, and confidence to play with greater intention.",
            contact: "Contact",
            footerBook: "Book via WhatsApp",
            annualTitle: "Yearly Coaching Package",
            annualLabel: "PRIVATE CLIENT · ANNUAL PROGRAM",
            annualDesc: "A full year of dedicated coaching for players ready to take their game further.",
            annualSave: "30% SAVING · SAVE $5,400",
            annualPerYear: "/ YEAR",
            annualAltText: "One annual package $18,000 when paid month by month",
            annualLessonCount: "120 private lessons · 10 sessions per month",
            annualFeature1: "Full swing, short game, putting, chipping and bunker play",
            annualFeature2: "Coaching tailored to your level and goals",
            annualFeature3: "Flexible scheduling via WhatsApp",
            annualFeature4: "Easy date or time changes through WhatsApp",
            annualFeature5: "Best value for serious players",
            annualButton: "Enquire About the Yearly Package",
            monthlyHeading: "Monthly Coaching Package",
            monthlyIntro: "10 private golf coaching lessons each month, scheduled around your availability. Suitable for beginners, intermediate and advanced players.",
            monthlyTag: "MONTHLY PACKAGE",
            monthlyLabel: "MONTHLY",
            monthlyButton: "Enquire About Coaching",
            seriousPlayers: "FOR SERIOUS PLAYERS",
            seriousPlayersText: "Ready to commit to a full year of focused coaching?",
            seriousPlayersButton: "Discover the Yearly Package"
        },
        ar: {
            navHome: "الرئيسية",
            navAbout: "من نحن",
            navCoaching: "التدريب",
            navPlan: "الباقات",
            navContact: "تواصل",
            enquire: "استفسار",
            menu: "القائمة",
            heroTestimonial: "محترف USGTF",
            heroLocation: "الدوحة، قطر",
            heroSmall: "تدريب الجولف",
            heroLarge: "في قطر",
            heroDesc: "تدريب عملي للاعبين المبتدئين والمتوسطين والمتقدمين.",
            explore: "استكشف التدريب",
            discover: "اكتشف التدريب",
            book: "احجز جلسة",
            startJourney: "ابدأ رحلتك",
            meetCoach: "قابل المدرب",
            hero1Label: "تدريب شخصي للجولف",
            hero1TitleA: "العب",
            hero1TitleB: "بهدف.",
            hero1Text: "ابنِ ضربة أكثر اتساقاً، قرارات أكثر دقة، وثقة أكبر على الملعب.",
            hero2Label: "الأداء · الدقة · التقدم",
            hero2TitleA: "لعبتك.",
            hero2TitleB: "المستوى التالي.",
            hero2Text: "تدريب منظم مصمم وفق أهدافك، ومستواك، وتقدمك في اللعبة.",
            hero3Label: "التدريب في الدوحة",
            hero3TitleA: "الثقة",
            hero3TitleB: "تبدأ هنا.",
            hero3Text: "إرشاد عملي يساعدك على دخول الملعب بوضوح وثقة أكبر.",
            hero4Label: "جميع المستويات مرحب بها",
            hero4TitleA: "من الضربة الأولى",
            hero4TitleB: "إلى التفاصيل الدقيقة.",
            hero4Text: "تدريب للمبتدئين واللاعبين المتوسطين ولكل من يسعى إلى تطوير مستواه في اللعبة.",
            hero5Label: "وقاص البلوشي · محترف USGTF",
            hero5TitleA: "اجعل كل",
            hero5TitleB: "ضربة ذات قيمة.",
            hero5Text: "طور مهاراتك، ووعي الملعب، والثقة للعب بنية واضحة.",
            contact: "تواصل",
            footerBook: "احجز عبر واتساب",
            annualTitle: "باقة التدريب السنوية",
            annualLabel: "عميل خاص · برنامج سنوي",
            annualDesc: "عام كامل من التدريب المخصص للاعبين المستعدين لتطوير مستواهم أكثر.",
            annualSave: "خصم 30٪ · وفّرت 5400 دولار",
            annualPerYear: "/ سنة",
            annualAltText: "حزمة سنوية واحدة 18000 دولار عند الدفع شهرياً",
            annualLessonCount: "120 درساً خاصاً · 10 جلسات في الشهر",
            annualFeature1: "الضربة الكاملة، اللعب القصير، ضربات التهديف، الضربات القصيرة، واللعب من الحواجز الرملية",
            annualFeature2: "تدريب مخصص لمستواك وأهدافك",
            annualFeature3: "جدولة مرنة عبر واتساب",
            annualFeature4: "تغيير التاريخ أو الوقت بسهولة عبر واتساب",
            annualFeature5: "أفضل قيمة للاعبين الجادين",
            annualButton: "استفسر عن الباقة السنوية",
            monthlyHeading: "باقة التدريب الشهرية",
            monthlyIntro: "10 جلسات تدريبية خاصة كل شهر، وفق جدولك المتاح. مناسبة للمبتدئين والوسطاء والمتقدمين.",
            monthlyTag: "الباقة الشهرية",
            monthlyLabel: "شهري",
            monthlyButton: "استفسر عن التدريب",
            seriousPlayers: "للاعبين الجادين",
            seriousPlayersText: "هل أنت مستعد لالتزام بدورة تدريبية كاملة على مدار العام؟",
            seriousPlayersButton: "اكتشف الباقة السنوية"
        }
    };

    const contentTranslations = {
        "Loading website": "جارٍ تحميل الموقع",
        "DOHA · QATAR": "الدوحة · قطر",
        "WAQAS": "وقاص",
        "ALBLOUSHI": "البلوشي",
        "USGTF PROFESSIONAL": "محترف معتمد من USGTF",
        "GOLF COACHING": "تدريب الجولف",
        "MENU": "القائمة",
        "About": "نبذة عني",
        "Coaching": "التدريب",
        "Package": "الباقات",
        "Contact": "تواصل",
        "PERSONAL GOLF COACHING": "تدريب شخصي على الجولف",
        "PLAY WITH": "العب",
        "PURPOSE.": "بهدف.",
        "Build a more consistent swing, sharper decisions, and greater confidence on the course.": "طوّر ضربة أكثر ثباتاً، واتخذ قرارات أدق، والعب بثقة أكبر في الملعب.",
        "PERFORMANCE · PRECISION · PROGRESS": "الأداء · الدقة · التطور",
        "YOUR GAME.": "لعبتك.",
        "YOUR NEXT LEVEL.": "نحو مستوى جديد.",
        "Structured coaching designed around your goals, your game, and your progress.": "تدريب منظم يواكب أهدافك ومستواك وتطورك في اللعبة.",
        "COACHING IN DOHA": "تدريب في الدوحة",
        "CONFIDENCE": "الثقة",
        "STARTS HERE.": "تبدأ من هنا.",
        "Practical guidance to help you step onto the course with greater clarity and confidence.": "إرشادات عملية تساعدك على دخول الملعب بتركيز وثقة أكبر.",
        "ALL LEVELS WELCOME": "نرحب بجميع المستويات",
        "FROM FIRST SWING": "من الضربة الأولى",
        "TO FINER DETAILS.": "إلى أدق التفاصيل.",
        "Coaching for beginners, intermediate players, and golfers looking to refine their game.": "تدريب للمبتدئين والمتوسطين ولكل لاعب يسعى إلى تطوير أدائه.",
        "WAQAS ALBLOUSHI · USGTF PROFESSIONAL": "وقاص البلوشي · محترف USGTF",
        "MAKE EVERY": "اجعل كل",
        "SHOT COUNT.": "ضربة تصنع الفرق.",
        "Develop the skills, course awareness, and confidence to play with greater intention.": "طوّر مهاراتك وقراءتك للملعب وثقتك لتلعب بوعي أكبر.",
        "Explore Coaching": "اكتشف التدريب",
        "Enquire": "استفسر الآن",
        "Discover Coaching": "اكتشف التدريب",
        "Start Your Journey": "ابدأ رحلتك",
        "Meet Your Coach": "تعرّف على مدربك",
        "Book a Lesson": "احجز حصة تدريبية",
        "SCROLL TO EXPLORE": "مرّر لاكتشاف المزيد",
        "ABOUT · USGTF PROFESSIONAL · DOHA": "نبذة · محترف USGTF · الدوحة",
        "Master the Basics .  Master Your Game": "أتقن الأساسيات. وارتقِ بلعبتك",
        "WAQAS ALBLOUSHI": "وقاص البلوشي",
        "USGTF PRO": "محترف USGTF",
        "Waqas Albloushi": "وقاص البلوشي",
        "Waqas Albloushi is a professional golf coach and competitive player with more than 19 years in the game. He started playing in 2007 at the age of 17 and continues to represent Qatar while coaching players of all levels around Doha.": "وقاص البلوشي مدرب جولف محترف ولاعب منافس، يمتلك خبرة تتجاوز 19 عاماً في اللعبة. بدأ ممارسة الجولف عام 2007، وهو في السابعة عشرة، ويواصل تمثيل قطر وتدريب لاعبين من مختلف المستويات في الدوحة.",
        "His approach is simple: make the game clearer. Coaching focuses on strong foundations, better technique, course strategy, and the confidence to perform, whether you’re a beginner or an experienced player.": "نهجه واضح: تبسيط اللعبة. يركز التدريب على ترسيخ الأساسيات وتحسين التقنية واستراتيجية اللعب وبناء الثقة، للمبتدئين واللاعبين أصحاب الخبرة.",
        "Years in Golf": "عاماً في الجولف",
        "Started 2007": "بدأ عام 2007",
        "Professional (2021)": "محترف منذ 2021",
        "Represents Qatar": "يمثل دولة قطر",
        "Languages": "اللغات",
        "COACHING": "التدريب",
        "Practical coaching.": "تدريب عملي يصنع الفرق.",
        "Sessions start with understanding where you are and what you want to achieve. Coaching is tailored for beginners, intermediate and advanced players.": "نبدأ بفهم مستواك وما تطمح إلى تحقيقه، ثم نصمم التدريب ليناسب المبتدئين والمتوسطين والمتقدمين.",
        "Full Swing": "الضربة الكاملة",
        "Grip, posture, alignment and consistency.": "القبضة والوقفة والمحاذاة وثبات الأداء.",
        "Short Game": "اللعب القصير",
        "Control and confidence around the green.": "تحكم وثقة أكبر حول منطقة الحفرة.",
        "Putting": "ضربات التهديف",
        "Touch and distance control.": "إحساس أدق وتحكم بالمسافة.",
        "Bunker Play": "اللعب من الحواجز الرملية",
        "Practical techniques for different situations.": "أساليب عملية للتعامل مع مختلف المواقف.",
        "The goal is to turn better golf understanding into confident decisions and better performance.": "هدفنا أن يتحول فهمك الأفضل للجولف إلى قرارات واثقة وأداء أقوى.",
        "THE GOAL": "الهدف",
        "Play with": "العب",
        "confidence.": "بثقة.",
        "USGTF CREDENTIALS": "اعتمادات USGTF",
        "Professional credentials": "اعتمادات احترافية",
        "View certificate": "عرض الشهادة",
        "VIEW": "عرض",
        "COACHING PLAN": "خطط التدريب",
        "Monthly Coaching Package": "باقة التدريب الشهرية",
        "10 private golf coaching lessons each month, scheduled around your availability. Suitable for beginners, intermediate and advanced players.": "10 حصص جولف خاصة شهرياً، تُجدول بما يناسب وقتك. مناسبة للمبتدئين والمتوسطين والمتقدمين.",
        "MONTHLY PACKAGE": "الباقة الشهرية",
        "DOHA": "الدوحة",
        "MONTHLY": "شهرياً",
        "/ MONTH": "/ الشهر",
        "10 private lessons every month": "10 حصص تدريبية خاصة كل شهر",
        "Full swing, short game, putting, chipping and bunker play": "الضربة الكاملة واللعب القصير والتهديف والضربات القصيرة واللعب من الحواجز الرملية",
        "Coaching tailored to your level and goals": "تدريب يناسب مستواك وأهدافك",
        "Flexible scheduling via WhatsApp": "مواعيد مرنة عبر واتساب",
        "Confirmation after booking and payment": "تأكيد الحجز بعد إتمام الدفع",
        "Easy date and time changes through WhatsApp": "تعديل الموعد أو الوقت بسهولة عبر واتساب",
        "Package automatically renews every month": "تتجدد الباقة تلقائياً كل شهر",
        "Enquire About Coaching": "استفسر عن التدريب",
        "FOR SERIOUS PLAYERS": "للاعبين الجادين",
        "Ready to commit to a full year of focused coaching?": "هل أنت مستعد لعام كامل من التدريب المركّز؟",
        "Discover the Yearly Package": "اكتشف الباقة السنوية",
        "PRIVATE CLIENT · ANNUAL PROGRAM": "عميل خاص · برنامج سنوي",
        "Yearly Coaching Package": "باقة التدريب السنوية",
        "A full year of dedicated coaching for players ready to take their game further.": "عام كامل من التدريب المخصص للاعبين المستعدين للارتقاء بمستواهم.",
        "30% SAVING · SAVE $5,400": "وفّر 30٪ · خصم 5,400 دولار",
        "/ YEAR": "/ السنة",
        "One annual package": "باقة سنوية واحدة",
        "when paid month by month": "عند الدفع شهرياً",
        "120 private lessons": "120 حصة تدريبية خاصة",
        "10 sessions per month": "10 حصص شهرياً",
        "· 10 sessions per month": "· 10 حصص شهرياً",
        "Easy date or time changes through WhatsApp": "تعديل الموعد أو الوقت بسهولة عبر واتساب",
        "Best value for serious players": "أفضل قيمة للاعبين الجادين",
        "Enquire About the Yearly Package": "استفسر عن الباقة السنوية",
        "CONTACT": "تواصل",
        "Ready to": "هل أنت مستعد",
        "improve?": "للتطور؟",
        "Tell Coach Waqas about your current level and what you’d like to work on. Coaching is available for all levels in QATAR.": "أخبر المدرب وقاص عن مستواك الحالي وما ترغب في تطويره. التدريب متاح لجميع المستويات في قطر.",
        "FASTEST RESPONSE": "أسرع وسيلة للتواصل",
        "Start a Conversation": "ابدأ محادثة",
        "EMAIL": "البريد الإلكتروني",
        "Send an Email": "أرسل رسالة بريدية",
        "Waqas Albloushi Golf Coaching home": "الصفحة الرئيسية لتدريب الجولف مع وقاص البلوشي",
        "Waqas Albloushi Golf Coaching": "تدريب الجولف مع وقاص البلوشي",
        "PROFESSIONAL GOLF COACH": "مدرب جولف محترف",
        "Footer navigation": "روابط التذييل",
        "Doha, Qatar": "الدوحة، قطر",
        "BOOK A GOLF LESSON": "احجز حصة جولف",
        "Book via WhatsApp": "احجز عبر واتساب",
        "© 2026 Waqas Albloushi Golf Coaching. All rights reserved.": "© 2026 تدريب الجولف مع وقاص البلوشي. جميع الحقوق محفوظة.",
        "Certificate": "شهادة",
        "Close certificate viewer": "إغلاق عارض الشهادات",
        "Previous certificate": "الشهادة السابقة",
        "Next certificate": "الشهادة التالية",
        "Back to top": "العودة إلى الأعلى",
        "Language selector": "اختيار اللغة",
        "Main navigation": "التنقل الرئيسي",
        "Open menu": "فتح القائمة",
        "English": "الإنجليزية",
        "Arabic": "العربية"
    };


    /* =====================================================
       DOM
    ===================================================== */

    const body =
        document.body;

    const loader =
        document.getElementById(
            "page-loader"
        );

    const logoTransition =
        document.getElementById(
            "logo-transition"
        );

    const loaderBar =
        document.getElementById(
            "loader-progress-bar"
        );

    const loaderPercent =
        document.getElementById(
            "loader-percent"
        );

    const header =
        document.getElementById(
            "main-header"
        );

    const mobileButton =
        document.getElementById(
            "mobile-menu-button"
        );

    const mobileMenu =
        document.getElementById(
            "mobile-menu"
        );

    const backTop =
        document.getElementById(
            "back-to-top"
        );

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );

    const lightboxClose =
        document.getElementById(
            "lightbox-close"
        );

    const lightboxPrev =
        document.getElementById(
            "lightbox-prev"
        );

    const lightboxNext =
        document.getElementById(
            "lightbox-next"
        );

    const lightboxCaption =
        document.getElementById(
            "lightbox-caption"
        );

    const lightboxCounter =
        document.getElementById(
            "lightbox-counter"
        );

    const certificateTrack =
        document.getElementById(
            "certificate-track"
        );

    const certificateCounter =
        document.getElementById(
            "certificate-counter"
        );

    const certificateLightbox =
        document.getElementById(
            "certificate-lightbox"
        );

    const certificateLightboxImage =
        document.getElementById(
            "certificate-lightbox-image"
        );

    const certificateLightboxCounter =
        document.getElementById(
            "certificate-lightbox-counter"
        );

    const certificateLightboxClose =
        document.getElementById(
            "certificate-lightbox-close"
        );

    const certificateLightboxPrev =
        document.getElementById(
            "certificate-lightbox-prev"
        );

    const certificateLightboxNext =
        document.getElementById(
            "certificate-lightbox-next"
        );

    const certificateImages = [
        "./assets/images/certificate-1.jpeg",
        "./assets/images/certificate-2.jpeg",
        "./assets/images/certificate-3.jpeg"
    ];

    let activeCertificateIndex = 0;


    function certificateCounterText(index) {

        return `${String(index + 1).padStart(2, "0")} / ${String(certificateImages.length).padStart(2, "0")}`;

    }


    function renderCertificates() {

        if (!certificateTrack) {
            return;
        }

        certificateTrack.innerHTML = certificateImages.map(
            (image, index) => `
                <button
                    class="certificate-item certificate-item-${index + 1} reveal"
                    type="button"
                    data-certificate-index="${index}"
                    aria-label="View certificate ${index + 1}"
                >
                    <span class="certificate-image-wrap">
                        <img src="${image}" alt="Certificate ${index + 1}">
                    </span>
                    <span class="certificate-view">VIEW</span>
                </button>
            `
        ).join("");

        certificateTrack
            .querySelectorAll(".certificate-item")
            .forEach(item => {

                item.addEventListener(
                    "click",
                    () => {

                        setActiveCertificate(
                            Number(item.dataset.certificateIndex),
                            true
                        );

                    }
                );

            });

    }


    function setActiveCertificate(index, openViewer = false) {

        activeCertificateIndex =
            (index + certificateImages.length) %
            certificateImages.length;

        certificateTrack
            ?.querySelectorAll(".certificate-item")
            .forEach((item, itemIndex) => {

                item.classList.toggle(
                    "is-active",
                    itemIndex === activeCertificateIndex
                );

                item.classList.toggle(
                    "is-prev",
                    itemIndex === (activeCertificateIndex - 1 + certificateImages.length) % certificateImages.length
                );

                item.classList.toggle(
                    "is-next",
                    itemIndex === (activeCertificateIndex + 1) % certificateImages.length
                );

            });

        const counter =
            certificateCounterText(activeCertificateIndex);

        if (certificateCounter) {
            certificateCounter.textContent = counter;
        }

        if (openViewer) {
            openCertificateLightbox();
        }

    }


    function openCertificateLightbox() {

        if (
            !certificateLightbox ||
            !certificateLightboxImage
        ) {
            return;
        }

        certificateLightboxImage.src =
            certificateImages[activeCertificateIndex];

        certificateLightboxImage.alt =
            `Certificate ${activeCertificateIndex + 1}`;

        certificateLightboxCounter.textContent =
            certificateCounterText(activeCertificateIndex);

        certificateLightbox.classList.add("active");
        certificateLightbox.setAttribute("aria-hidden", "false");
        body.classList.add("lightbox-open");

    }


    function closeCertificateLightbox() {

        certificateLightbox?.classList.remove("active");
        certificateLightbox?.setAttribute("aria-hidden", "true");

        if (!lightbox?.classList.contains("active")) {
            body.classList.remove("lightbox-open");
        }

    }


    renderCertificates();
    setActiveCertificate(0);

    document
        .getElementById("certificate-prev")
        ?.addEventListener(
            "click",
            () => setActiveCertificate(activeCertificateIndex - 1)
        );

    document
        .getElementById("certificate-next")
        ?.addEventListener(
            "click",
            () => setActiveCertificate(activeCertificateIndex + 1)
        );

    let certificateTouchStartX = 0;

    certificateTrack?.addEventListener(
        "touchstart",
        event => {
            certificateTouchStartX = event.changedTouches[0].screenX;
        },
        { passive: true }
    );

    certificateTrack?.addEventListener(
        "touchend",
        event => {

            const distance =
                event.changedTouches[0].screenX -
                certificateTouchStartX;

            if (Math.abs(distance) < 40) {
                return;
            }

            setActiveCertificate(
                activeCertificateIndex +
                (distance < 0 ? 1 : -1)
            );

        },
        { passive: true }
    );

    certificateLightboxClose?.addEventListener(
        "click",
        closeCertificateLightbox
    );

    certificateLightboxPrev?.addEventListener(
        "click",
        () => {
            setActiveCertificate(activeCertificateIndex - 1);
            openCertificateLightbox();
        }
    );

    certificateLightboxNext?.addEventListener(
        "click",
        () => {
            setActiveCertificate(activeCertificateIndex + 1);
            openCertificateLightbox();
        }
    );

    certificateLightbox?.addEventListener(
        "click",
        event => {

            if (event.target === certificateLightbox) {
                closeCertificateLightbox();
            }

        }
    );

    document.addEventListener(
        "keydown",
        event => {

            if (!certificateLightbox?.classList.contains("active")) {
                return;
            }

            if (event.key === "ArrowLeft") {
                setActiveCertificate(activeCertificateIndex - 1);
                openCertificateLightbox();
            }

            if (event.key === "ArrowRight") {
                setActiveCertificate(activeCertificateIndex + 1);
                openCertificateLightbox();
            }

            if (event.key === "Escape") {
                closeCertificateLightbox();
            }

        }
    );

    const slides =
        document.querySelectorAll(
            ".hero-slide"
        );

    const dots =
        document.querySelectorAll(
            ".hero-dot"
        );

    const heroCurrent =
        document.getElementById(
            "hero-current"
        );

    const heroSection =
        document.querySelector(
            ".hero"
        );


    /* =====================================================
       STARTUP LOADER
    ===================================================== */

    let progress = 0;

    const fakeLoader =
        setInterval(() => {

            progress +=
                Math.floor(
                    Math.random() * 5
                ) + 1;

            if (progress >= 91) {

                progress = 91;

                clearInterval(
                    fakeLoader
                );

            }

            updateLoader(progress);

        }, 75);


    function updateLoader(value) {

        if (loaderBar) {

            loaderBar.style.width =
                `${value}%`;

        }

        if (loaderPercent) {

            loaderPercent.textContent =
                `${Math.floor(value)}%`;

        }

    }


    window.addEventListener(
        "load",
        () => {

            clearInterval(
                fakeLoader
            );

            let finalProgress =
                progress;


            const finish =
                setInterval(() => {

                    finalProgress += 2;

                    if (
                        finalProgress >= 100
                    ) {

                        finalProgress = 100;

                        updateLoader(
                            finalProgress
                        );

                        clearInterval(
                            finish
                        );


                        setTimeout(() => {

                            body.classList.add(
                                "page-ready"
                            );

                            if (loader) {

                                loader.classList.add(
                                    "loader-hidden"
                                );

                                setTimeout(() => {

                                    logoTransition?.classList.add(
                                        "active"
                                    );

                                }, 1200);

                            }


                            setTimeout(() => {

                                logoTransition?.classList.remove(
                                    "active"
                                );

                                body.classList.remove(
                                    "loading"
                                );

                            }, 2300);

                        }, 450);

                    } else {

                        updateLoader(
                            finalProgress
                        );

                    }

                }, 25);

        }
    );


    /* =====================================================
       HERO SLIDER
    ===================================================== */

    let currentSlide = 0;

    let sliderTimer = null;


    function syncMobileHeroRatio(index) {

        if (
            !heroSection ||
            window.innerWidth > 800
        ) {

            return;

        }


        const image =
            slides[index]?.querySelector(
                "img"
            );


        if (!image) {

            return;

        }


        const applyRatio = () => {

            if (
                image.naturalWidth &&
                image.naturalHeight
            ) {

                heroSection.style.aspectRatio =
                    `${image.naturalWidth} / ${image.naturalHeight}`;

            }

        };


        if (image.complete) {

            applyRatio();

        } else {

            image.addEventListener(
                "load",
                applyRatio,
                {
                    once: true
                }
            );

        }

    }


    function showSlide(index) {

        if (!slides.length) {

            return;

        }


        if (
            index < 0
        ) {

            index =
                slides.length - 1;

        }


        if (
            index >= slides.length
        ) {

            index = 0;

        }


        slides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === index
                );

            }
        );


        dots.forEach(
            (dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === index
                );

            }
        );


        currentSlide =
            index;

        if (heroSection) {

            heroSection.dataset.activeSlide =
                String(index + 1);

            const heroContent =
                heroSection.querySelector(
                    ".hero-content"
                );

            if (heroContent) {

                heroContent.dataset.activeSlide =
                    String(index + 1);

            }

        }


        syncMobileHeroRatio(index);


        if (heroCurrent) {

            heroCurrent.textContent =
                String(index + 1)
                    .padStart(2, "0");

        }


        animateHeroText();

    }


    function nextSlide() {

        showSlide(
            currentSlide + 1
        );

    }


    function previousSlide() {

        showSlide(
            currentSlide - 1
        );

    }


    function startSlider() {

        stopSlider();


        if (slides.length > 1) {

            sliderTimer =
                setInterval(
                    nextSlide,
                    SETTINGS.slideDuration
                );

        }

    }


    function stopSlider() {

        if (sliderTimer) {

            clearInterval(
                sliderTimer
            );

            sliderTimer = null;

        }

    }


    function animateHeroText() {

        const title =
            document.getElementById(
                "hero-title"
            );


        if (!title) {

            return;

        }


        title.classList.remove(
            "hero-title-refresh"
        );


        void title.offsetWidth;


        title.classList.add(
            "hero-title-refresh"
        );

    }


    dots.forEach(
        dot => {

            dot.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            dot.dataset.slideTo
                        );


                    showSlide(index);

                    startSlider();

                }
            );

        }
    );


    let heroPointerStartX = 0;
    let heroPointerStartY = 0;
    let heroPointerActive = false;
    let heroSuppressClick = false;


    if (heroSection) {

        heroSection.style.touchAction = "pan-y";

        heroSection.addEventListener(
            "pointerdown",
            event => {

                if (event.pointerType === "mouse" && event.button !== 0) {
                    return;
                }

                heroPointerStartX = event.clientX;
                heroPointerStartY = event.clientY;
                heroPointerActive = true;
                heroSection.setPointerCapture?.(event.pointerId);
                stopSlider();

            }
        );

        heroSection.addEventListener(
            "pointerup",
            event => {

                if (!heroPointerActive) {
                    return;
                }

                const distanceX = event.clientX - heroPointerStartX;
                const distanceY = event.clientY - heroPointerStartY;

                heroPointerActive = false;

                if (
                    Math.abs(distanceX) >= 45 &&
                    Math.abs(distanceX) > Math.abs(distanceY)
                ) {
                    heroSuppressClick = true;

                    if (distanceX < 0) {
                        nextSlide();
                    } else {
                        previousSlide();
                    }
                }

                startSlider();

            }
        );

        heroSection.addEventListener(
            "pointercancel",
            () => {

                heroPointerActive = false;
                startSlider();

            }
        );

        heroSection.addEventListener(
            "click",
            event => {

                if (heroSuppressClick) {
                    event.preventDefault();
                    event.stopPropagation();
                    heroSuppressClick = false;
                }

            },
            true
        );

    }


    showSlide(0);

    startSlider();


    /* =====================================================
       PAUSE HERO WHEN TAB IS HIDDEN
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                stopSlider();

            } else {

                startSlider();

            }

        }
    );


    /* =====================================================
       HEADER
    ===================================================== */

    function updateHeader() {

        if (!header) {

            return;

        }


        if (
            window.scrollY > 50
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMenu() {

        if (!mobileMenu) {

            return;

        }


        mobileMenu.classList.add(
            "active"
        );


        mobileButton?.classList.add(
            "active"
        );


        mobileButton?.setAttribute(
            "aria-expanded",
            "true"
        );


        body.classList.add(
            "menu-open"
        );

    }


    function closeMenu() {

        if (!mobileMenu) {

            return;

        }


        mobileMenu.classList.remove(
            "active"
        );


        mobileButton?.classList.remove(
            "active"
        );


        mobileButton?.setAttribute(
            "aria-expanded",
            "false"
        );


        body.classList.remove(
            "menu-open"
        );

    }


    mobileButton?.addEventListener(
        "click",
        () => {

            if (
                mobileMenu.classList.contains(
                    "active"
                )
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    document.querySelectorAll(
        ".mobile-menu-link"
    ).forEach(
        link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        }
    );


    /* =====================================================
       ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeMenu();

                closeLightbox();

            }

        }
    );


    /* =====================================================
       WHATSAPP
    ===================================================== */

    const languageToggle = document.getElementById("language-toggle");
    const langButtons = document.querySelectorAll(".lang-option");
    const rtlLanguages = ["ar"];
    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();
    const textTranslations = Object.fromEntries(
        Object.entries(contentTranslations).map(([source, target]) => [
            source.trim().replace(/\s+/g, " "),
            target
        ])
    );

    Object.entries(translations.ar).forEach(([key, value]) => {
        const english = translations.en[key];
        if (english) {
            textTranslations[english] = value;
        }
    });

    const attributeTranslations = {
        "Waqas Golf": "جولف مع وقاص",
        "Golf coaching in Qatar": "تدريب الجولف في قطر",
        "Professional golf instruction": "تعليم احترافي للجولف",
        "Golf player on course": "لاعب جولف في الملعب",
        "Golf course in Doha": "ملعب جولف في الدوحة",
        "Golfer making a confident golf shot": "لاعب جولف ينفذ ضربة بثقة",
        "Professional golf coaching session": "حصة تدريب جولف احترافية",
        "Waqas Albloushi golf professional": "محترف الجولف وقاص البلوشي",
        "Waqas coaching a golf player": "وقاص يدرب لاعب جولف",
        "Show slide 1": "عرض الشريحة 1",
        "Show slide 2": "عرض الشريحة 2",
        "Show slide 3": "عرض الشريحة 3",
        "Show slide 4": "عرض الشريحة 4",
        "Show slide 5": "عرض الشريحة 5",
        "Show slide 6": "عرض الشريحة 6",
        "Close yearly coaching package": "إغلاق باقة التدريب السنوية",
        "Close certificate viewer": "إغلاق عارض الشهادات",
        "Previous certificate": "الشهادة السابقة",
        "Next certificate": "الشهادة التالية",
        "Back to top": "العودة إلى الأعلى",
        "Language selector": "اختيار اللغة",
        "Main navigation": "التنقل الرئيسي",
        "Footer navigation": "روابط التذييل",
        "Open menu": "فتح القائمة",
        "English": "الإنجليزية",
        "Arabic": "العربية"
    };

    function translatedWhatsappUrl(language, annual = false) {
        const message = language === "ar"
            ? annual
                ? "مرحباً وقاص، أود الاستفسار عن باقة التدريب السنوية."
                : "مرحباً وقاص، أود الاستفسار عن تدريب الجولف في قطر."
            : annual
                ? "Hello Waqas, I am interested in the Yearly Coaching Package."
                : SETTINGS.whatsappMessage;

        return `https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(message)}`;
    }

    function applyLanguage(language) {
        const activeLanguage = translations[language] || translations.en;
        const html = document.documentElement;
        const isArabic = language === "ar";

        html.lang = language;
        html.dir = rtlLanguages.includes(language) ? "rtl" : "ltr";

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

        while (walker.nextNode()) {
            const node = walker.currentNode;
            const parent = node.parentElement;
            if (!parent || parent.closest("script, style, noscript")) {
                continue;
            }

            if (!originalText.has(node)) {
                originalText.set(node, node.nodeValue);
            }

            const source = originalText.get(node);
            const trimmed = source.trim().replace(/\s+/g, " ");
            const translation = textTranslations[trimmed];
            if (!trimmed || !translation) {
                continue;
            }

            const leading = source.match(/^\s*/)[0];
            const trailing = source.match(/\s*$/)[0];
            node.nodeValue = isArabic
                ? `${leading}${translation}${trailing}`
                : source;
        }

        document.querySelectorAll("[aria-label], [alt], [title], [placeholder]").forEach(element => {
            const attributes = ["aria-label", "alt", "title", "placeholder"];
            attributes.forEach(attribute => {
                if (!element.hasAttribute(attribute)) {
                    return;
                }

                let sources = originalAttributes.get(element);
                if (!sources) {
                    sources = {};
                    originalAttributes.set(element, sources);
                }
                if (!(attribute in sources)) {
                    sources[attribute] = element.getAttribute(attribute);
                }

                const source = sources[attribute];
                const translation = attributeTranslations[source] || textTranslations[source];
                if (translation) {
                    element.setAttribute(attribute, isArabic ? translation : source);
                }
            });
        });

        document.querySelectorAll(".lang-option").forEach(button => {
            const isActive = button.dataset.lang === language;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        const langLabel = document.getElementById("language-label");
        if (langLabel) {
            langLabel.textContent = language === "ar" ? "AR" : "EN";
        }

        document.body.classList.toggle("rtl-mode", isArabic);
        document.body.classList.toggle("ltr-mode", !isArabic);

        document.title = isArabic
            ? "وقاص البلوشي | مدرب جولف في الدوحة"
            : "Waqas Albloushi | Golf Coach in Doha";
        document.querySelector('meta[name="description"]')?.setAttribute(
            "content",
            isArabic
                ? "وقاص البلوشي مدرب جولف محترف ولاعب منافس في الدوحة، قطر. محترف USGTF بخبرة تتجاوز 19 عاماً، يقدم تدريباً عملياً لجميع المستويات."
                : "Waqas Albloushi is a professional golf coach and competitive player in Doha, Qatar. USGTF Professional with 19+ years in golf, offering practical coaching for beginners, intermediate and advanced players."
        );
        document.querySelector('meta[property="og:title"]')?.setAttribute(
            "content",
            isArabic
                ? "وقاص البلوشي | تدريب الجولف في قطر"
                : "Waqas Albloushi | Golf Coaching in Qatar"
        );
        document.querySelector('meta[property="og:description"]')?.setAttribute(
            "content",
            isArabic
                ? "تدريب جولف احترافي في قطر مع وقاص البلوشي، محترف USGTF ولاعب منافس بخبرة تتجاوز 19 عاماً."
                : "Professional golf coaching in Qatar by Waqas Albloushi, a USGTF Professional and competitive player with 19+ years in golf."
        );

        document.querySelectorAll(".whatsapp-link").forEach(link => {
            link.href = translatedWhatsappUrl(language);
        });
        const yearlyEnquire = document.querySelector(".yearly-package-enquire");
        if (yearlyEnquire) {
            yearlyEnquire.href = translatedWhatsappUrl(language, true);
        }
    }

    langButtons.forEach(button => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.lang);
            localStorage.setItem("preferred-language", button.dataset.lang);
        });
    });

    let savedLanguage = "en";
    try {
        savedLanguage = localStorage.getItem("preferred-language") || "en";
    } catch (error) {
        savedLanguage = "en";
    }
    applyLanguage(savedLanguage);

    document.querySelectorAll(
        ".whatsapp-link"
    ).forEach(
        link => {

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

        }
    );

    const yearlyPackageDialog =
        document.getElementById("yearly-package-dialog");

    const yearlyPackageOpen =
        document.getElementById("yearly-package-open");

    const yearlyPackageClose =
        document.getElementById("yearly-package-close");

    yearlyPackageOpen?.addEventListener(
        "click",
        () => {
            if (
                yearlyPackageDialog instanceof HTMLDialogElement &&
                !yearlyPackageDialog.open
            ) {
                yearlyPackageDialog.showModal();
            }
        }
    );

    yearlyPackageClose?.addEventListener(
        "click",
        () => {
            if (yearlyPackageDialog instanceof HTMLDialogElement) {
                yearlyPackageDialog.close();
            }
        }
    );

    yearlyPackageDialog?.addEventListener(
        "click",
        event => {
            if (
                event.target === yearlyPackageDialog &&
                yearlyPackageDialog instanceof HTMLDialogElement
            ) {
                yearlyPackageDialog.close();
            }
        }
    );


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !id ||
                        id === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            id
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const top =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight;


                    window.scrollTo({

                        top,

                        behavior:
                            "smooth"

                    });

                }
            );

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right"
        );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"

            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       STAGGER CARDS
    ===================================================== */

    document.querySelectorAll(
        ".coaching-card"
    ).forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 90}ms`;

        }
    );


    document.querySelectorAll(
        ".gallery-item"
    ).forEach(
        (item, index) => {

            item.style.transitionDelay =
                `${index * 100}ms`;

        }
    );


    const motionGalleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );

    const motionGalleryFlight =
        document.querySelector(
            ".gallery-flight"
        );

    const motionGalleryBall =
        document.querySelector(
            ".gallery-ball"
        );

    const gallerySection =
        document.querySelector(
            ".gallery-section"
        );

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        gallerySection &&
        motionGalleryFlight &&
        motionGalleryBall &&
        motionGalleryItems.length > 1 &&
        !prefersReducedMotion
    ) {

        let galleryAnimationFrame = null;

        function updateGalleryBallPosition() {

            const galleryRect =
                gallerySection.getBoundingClientRect();

            const viewportProgress =
                Math.min(
                    Math.max(
                        (window.innerHeight - galleryRect.top) /
                        (galleryRect.height + window.innerHeight),
                        0
                    ),
                    1
                );

            const travel =
                viewportProgress * (motionGalleryItems.length - 1);

            const segmentIndex =
                Math.min(
                    Math.floor(travel),
                    motionGalleryItems.length - 2
                );

            const localT =
                travel - segmentIndex;

            const itemA =
                motionGalleryItems[segmentIndex];

            const itemB =
                motionGalleryItems[segmentIndex + 1];

            const rectA =
                itemA.getBoundingClientRect();

            const rectB =
                itemB.getBoundingClientRect();

            const centerA = {
                x: rectA.left - galleryRect.left + rectA.width / 2,
                y: rectA.top - galleryRect.top + rectA.height / 2
            };

            const centerB = {
                x: rectB.left - galleryRect.left + rectB.width / 2,
                y: rectB.top - galleryRect.top + rectB.height / 2
            };

            const curveShift =
                Math.min(
                    180,
                    Math.max(90, Math.abs(centerB.x - centerA.x) * 0.65)
                );

            const controlX =
                (centerA.x + centerB.x) / 2 +
                (centerB.x - centerA.x) * 0.14;

            const controlY =
                Math.min(centerA.y, centerB.y) -
                curveShift;

            const x =
                (1 - localT) * (1 - localT) * centerA.x +
                2 * (1 - localT) * localT * controlX +
                localT * localT * centerB.x;

            const y =
                (1 - localT) * (1 - localT) * centerA.y +
                2 * (1 - localT) * localT * controlY +
                localT * localT * centerB.y;

            motionGalleryBall.style.transform =
                `translate3d(${x}px, ${y}px, 0)`;

            motionGalleryItems.forEach(
                (item, index) => {

                    const normalized =
                        index / (motionGalleryItems.length - 1);

                    item.classList.toggle(
                        "is-active",
                        Math.abs(viewportProgress - normalized) < 0.14
                    );

                }
            );

        }

        function requestGalleryBallUpdate() {

            if (galleryAnimationFrame) {
                cancelAnimationFrame(galleryAnimationFrame);
            }

            galleryAnimationFrame =
                requestAnimationFrame(() => {

                    updateGalleryBallPosition();
                    galleryAnimationFrame = null;

                });

        }

        requestGalleryBallUpdate();

        window.addEventListener(
            "scroll",
            requestGalleryBallUpdate,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            requestGalleryBallUpdate,
            { passive: true }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            const id =
                                entry.target.id;


                            navLinks.forEach(
                                link => {

                                    const href =
                                        link.getAttribute(
                                            "href"
                                        );


                                    link.classList.toggle(
                                        "active",
                                        href === `#${id}`
                                    );

                                }
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach(
        section => {

            sectionObserver.observe(
                section
            );

        }
    );


    /* =====================================================
       GALLERY LIGHTBOX
    ===================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );

    let activeGalleryIndex = 0;


    function updateLightbox(index) {

        const item =
            galleryItems[index];

        const image =
            item?.querySelector(
                "img"
            );


        if (
            !image ||
            !lightboxImage
        ) {

            return;

        }


        activeGalleryIndex = index;

        lightboxImage.classList.remove(
            "lightbox-image-changing"
        );


        requestAnimationFrame(() => {

            lightboxImage.src =
                image.currentSrc ||
                image.src;

            lightboxImage.alt =
                image.alt ||
                "Golf image";

            lightboxCaption.textContent =
                item.querySelector(
                    ".gallery-overlay span"
                )?.textContent.trim() ||
                image.alt ||
                "Golf image";

            lightboxCounter.textContent =
                `${String(index + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;

            lightboxImage.classList.add(
                "lightbox-image-changing"
            );

        });

    }


    function showNextGalleryImage(direction) {

        const nextIndex =
            (activeGalleryIndex + direction + galleryItems.length) %
            galleryItems.length;


        updateLightbox(nextIndex);

    }


    galleryItems.forEach(
        (item, index) => {

            item.setAttribute(
                "tabindex",
                "0"
            );

            item.setAttribute(
                "role",
                "button"
            );

            item.setAttribute(
                "aria-label",
                `Open gallery image ${index + 1}`
            );

            item.addEventListener(
                "click",
                () => {

                    if (
                        !lightbox ||
                        !lightboxImage
                    ) {

                        return;

                    }


                    updateLightbox(index);


                    lightbox.classList.add(
                        "active"
                    );


                    lightbox.setAttribute(
                        "aria-hidden",
                        "false"
                    );


                    body.classList.add(
                        "lightbox-open"
                    );

                }
            );

            item.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        item.click();

                    }

                }
            );

        }
    );


    function closeLightbox() {

        if (!lightbox) {

            return;

        }


        lightbox.classList.remove(
            "active"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        body.classList.remove(
            "lightbox-open"
        );

    }


    lightboxClose?.addEventListener(
        "click",
        closeLightbox
    );


    lightboxPrev?.addEventListener(
        "click",
        () => showNextGalleryImage(-1)
    );


    lightboxNext?.addEventListener(
        "click",
        () => showNextGalleryImage(1)
    );


    lightbox?.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                !lightbox?.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                event.key === "ArrowLeft"
            ) {

                showNextGalleryImage(-1);

            }


            if (
                event.key === "ArrowRight"
            ) {

                showNextGalleryImage(1);

            }

        }
    );


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function updateBackTop() {

        if (!backTop) {

            return;

        }


        if (
            window.scrollY > 700
        ) {

            backTop.classList.add(
                "visible"
            );

        } else {

            backTop.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop,
        {
            passive: true
        }
    );


    backTop?.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const hero =
        document.querySelector(
            ".hero"
        );


    if (
        hero &&
        window.matchMedia(
            "(min-width: 901px)"
        ).matches
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;


                if (
                    scroll <
                    window.innerHeight
                ) {

                    const slides =
                        document.querySelectorAll(
                            ".hero-slide img"
                        );


                    slides.forEach(
                        image => {

                            image.style.transform =
                                `translateY(${scroll * .08}px)`;

                        }
                    );

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        document.querySelector(
            ".cursor-dot"
        );

    const cursorRing =
        document.querySelector(
            ".cursor-ring"
        );


    if (
        cursorDot &&
        cursorRing &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        let mouseX = 0;

        let mouseY = 0;

        let ringX = 0;

        let ringY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;

            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX) *
                .14;

            ringY +=
                (mouseY - ringY) *
                .14;


            cursorRing.style.left =
                `${ringX}px`;

            cursorRing.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        document.querySelectorAll(
            "a, button, .gallery-item"
        ).forEach(
            element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursorRing.style.width =
                            "58px";

                        cursorRing.style.height =
                            "58px";

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        cursorRing.style.width =
                            "38px";

                        cursorRing.style.height =
                            "38px";

                    }
                );

            }
        );

    }


    /* =====================================================
       CONTACT CARD MOUSE EFFECT
    ===================================================== */

    if (
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        document.querySelectorAll(
            ".contact-card"
        ).forEach(
            card => {

                card.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const rotateX =
                            ((y /
                                rect.height) -
                                .5) *
                            -2;


                        const rotateY =
                            ((x /
                                rect.width) -
                                .5) *
                            2;


                        card.style.transform =
                            `perspective(800px)
                             rotateX(${rotateX}deg)
                             rotateY(${rotateY}deg)
                             translateY(-3px)`;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       IMAGE LAZY LOADING
    ===================================================== */

    document.querySelectorAll(
        "img"
    ).forEach(
        image => {

            if (
                !image.closest(
                    ".hero-slide"
                ) &&
                !image.hasAttribute(
                    "loading"
                )
            ) {

                image.loading =
                    "lazy";

            }


            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-failed"
                    );

                }
            );

        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                heroSection &&
                window.innerWidth <= 800
            ) {

                syncMobileHeroRatio(
                    currentSlide
                );

            } else if (heroSection) {

                heroSection.style.removeProperty(
                    "aspect-ratio"
                );

            }

            if (
                window.innerWidth > 800
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       PREVENT EMPTY SOCIAL LINKS
    ===================================================== */

    document.querySelectorAll(
        ".footer-social a"
    ).forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    if (
                        link.getAttribute(
                            "href"
                        ) === "#"
                    ) {

                        event.preventDefault();

                    }

                }
            );

        }
    );


    /* =====================================================
       CONSOLE BRANDING
    ===================================================== */

    console.log(
        "%c WAQAS ALBLOUSHI GOLF ",
        "background:#0d1712;color:#d0b67e;padding:10px 15px;font-size:14px;font-weight:bold;"
    );


    console.log(
        "USGTF Professional · Doha, Qatar"
    );

});