// Shared site navigation. Add new pages here and they show up everywhere.
(function () {
  var LINKS = [
    { id: "home", label: "Home", path: "index.html" },
    { id: "projects", label: "Projects", path: "projects/index.html" },
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

  root.replaceWith(nav);
})();
