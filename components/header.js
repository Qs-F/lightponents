  // document.addEventListener("DOMContentCreated", function() {
    x[0] = function() {g = document.querySelector("header");
      g.addEventListener("click", function() {
        g.classList.toggle("clicked");
        document.querySelector("div.nav").classList.toggle("hidden");
        console.log("click");
      }, false);
    };
  // }, false);
