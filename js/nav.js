// Shared site navigation. Add new pages here and they show up everywhere.
(function () {
  var LINKS = [
    { id: "home", label: "Home", path: "index.html" },
    { id: "projects", label: "Projects", path: "projects/index.html" },
    { id: "speaking", label: "Speaking", path: "speaking/index.html" },
  ];

  var root = document.getElementById("site-nav");
  if (!root) return;

  var prefix = root.getAttribute("data-prefix") || "";
  var current = root.getAttribute("data-current") || "";

  var nav = document.createElement("nav");
  nav.className = "site_nav";

  LINKS.forEach(function (link) {
    var a = document.createElement("a");
    a.href = prefix + link.path;
    a.textContent = link.label;
    if (link.id === current) {
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  });

  var wrapper = document.createElement("div");
  wrapper.className = "nav_wrapper";

  var toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "nav_toggle";
  toggle.setAttribute("aria-label", "Toggle menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span><span></span><span></span>";

  var backdrop = document.createElement("div");
  backdrop.className = "nav_backdrop";

  function closeMenu() {
    nav.classList.remove("site_nav--open");
    backdrop.classList.remove("nav_backdrop--open");
    toggle.classList.remove("nav_toggle--open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav_open");
  }

  function openMenu() {
    nav.classList.add("site_nav--open");
    backdrop.classList.add("nav_backdrop--open");
    toggle.classList.add("nav_toggle--open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav_open");
  }

  toggle.addEventListener("click", function () {
    if (nav.classList.contains("site_nav--open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  wrapper.appendChild(toggle);
  wrapper.appendChild(backdrop);
  wrapper.appendChild(nav);

  root.replaceWith(wrapper);
})();
