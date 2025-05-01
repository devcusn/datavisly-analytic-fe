(function () {
  const { document } = window;
  const currentScript = document.currentScript;
  const domain = currentScript.getAttribute("data-domain");
  console.log(domain);
})();
