/* tabs.js — accessible tabs for any [data-tabs] block (used on /itcareer/).
   Markup: .tabs__list[role=tablist] > button[role=tab][aria-controls],
   plus .tabs__panel[role=tabpanel] elements. Without JS every panel stays visible.
   Keyboard: Left/Right (and Up/Down) move between tabs, Home/End jump to the ends. */
(function () {
    "use strict";

    function setup(root) {
        var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
        if (!tabs.length) return;

        function select(tab, focus) {
            tabs.forEach(function (t) {
                var selected = t === tab;
                t.setAttribute("aria-selected", String(selected));
                t.tabIndex = selected ? 0 : -1;
                var panel = document.getElementById(t.getAttribute("aria-controls"));
                if (panel) panel.hidden = !selected;
            });
            if (focus) tab.focus();
        }

        tabs.forEach(function (tab, index) {
            tab.addEventListener("click", function () {
                select(tab);
            });

            tab.addEventListener("keydown", function (event) {
                var next;
                switch (event.key) {
                    case "ArrowRight":
                    case "ArrowDown":
                        next = tabs[(index + 1) % tabs.length];
                        break;
                    case "ArrowLeft":
                    case "ArrowUp":
                        next = tabs[(index - 1 + tabs.length) % tabs.length];
                        break;
                    case "Home":
                        next = tabs[0];
                        break;
                    case "End":
                        next = tabs[tabs.length - 1];
                        break;
                    default:
                        return;
                }
                event.preventDefault();
                select(next, true);
            });
        });

        var initial = tabs.filter(function (t) {
            return t.getAttribute("aria-selected") === "true";
        })[0] || tabs[0];
        select(initial);
        root.classList.add("is-enhanced");
    }

    document.querySelectorAll("[data-tabs]").forEach(setup);
})();
