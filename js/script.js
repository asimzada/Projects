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

    const whatsappURL =
        `https://wa.me/${SETTINGS.whatsapp}` +
        `?text=${encodeURIComponent(
            SETTINGS.whatsappMessage
        )}`;


    document.querySelectorAll(
        ".whatsapp-link"
    ).forEach(
        link => {

            link.href =
                whatsappURL;

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

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