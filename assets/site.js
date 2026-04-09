(function () {
  var config = window.PROJECT_SITE_CONFIG || {};
  var links = document.querySelectorAll("[data-link]");

  links.forEach(function (node) {
    var key = node.getAttribute("data-link");
    if (key && config[key]) {
      node.href = config[key];
    }
  });

  var footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
})();
