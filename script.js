```javascript
document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });


    /* Close mobile menu after clicking a link */

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            nav.classList.remove("active");
        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".expertise-card, .portfolio-card, .cert-card, .experience-item"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

});
```
