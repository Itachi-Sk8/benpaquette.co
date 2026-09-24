/* site.js — shared behaviour for every page. No dependencies. Loaded with defer;
   each page sets html.js with an inline script in <head> so there is no menu flash.
   - Mobile nav toggle (button[aria-controls] + .site-nav.is-open)
   - Marks the current page's nav links with aria-current="page"
   - Fills [data-current-year] with the current year */
(function () {
    "use strict";

    var root = document.documentElement;
    root.classList.add("js");   // no-op when the inline head script already ran

    // Normalise "/itcareer", "/itcareer/", "/itcareer/index.html" to "/itcareer/".
    function normalise(path) {
        path = path.replace(/index\.html?$/i, "");
        if (path.charAt(path.length - 1) !== "/") path += "/";
        return path;
    }

    function markCurrent() {
        var here = normalise(window.location.pathname);
        var links = document.querySelectorAll(".site-nav__link, .footer-nav__link");
        links.forEach(function (link) {
            var target = normalise(new URL(link.getAttribute("href"), window.location.href).pathname);
            // Home only matches exactly; sections also match their sub-pages (blog posts).
            var isCurrent = target === "/" ? here === "/" : here.indexOf(target) === 0;
            if (isCurrent) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    function setupNav() {
        var toggle = document.querySelector(".nav-toggle");
        if (!toggle) return;
        var nav = document.getElementById(toggle.getAttribute("aria-controls"));
        if (!nav) return;
        var mobile = window.matchMedia("(max-width: 767.98px)");

        function setOpen(open, returnFocus) {
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
            nav.classList.toggle("is-open", open);
            if (!open && returnFocus) toggle.focus();
        }

        toggle.addEventListener("click", function () {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });

        nav.addEventListener("click", function (event) {
            if (event.target.closest("a")) setOpen(false);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && nav.classList.contains("is-open")) setOpen(false, true);
        });

        // Close when clicking outside the header.
        document.addEventListener("click", function (event) {
            if (nav.classList.contains("is-open") && !event.target.closest(".site-header")) setOpen(false);
        });

        // Reset when resizing up to the desktop layout.
        mobile.addEventListener("change", function (event) {
            if (!event.matches) setOpen(false);
        });
    }

    function fillYear() {
        var year = String(new Date().getFullYear());
        document.querySelectorAll("[data-current-year]").forEach(function (el) {
            el.textContent = year;
        });
    }

    function init() {
        markCurrent();
        setupNav();
        fillYear();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
