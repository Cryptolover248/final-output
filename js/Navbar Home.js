function burger() {
    var x = document.getElementById("burger");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function drpdwn1() {
      var x = document.getElementById("burgerdrpdwn1")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

      var y = document.getElementById("burgermenu1")
    if (y.className == "burgermenu") {
      y.className = "burgermenuactive";
    } else {
      y.className = "burgermenu";
    }
      var z = document.getElementById("arrow1")
    if (z.className == "arrow") {
        z.className = "arrowactive";
    } else {
        z.className = "arrow";
    }
  }

  function drpdwn2() {
      var x = document.getElementById("burgerdrpdwn2")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
      var y = document.getElementById("burgermenu2")
    if (y.className == "burgermenu") {
      y.className = "burgermenuactive";
    } else {
      y.className = "burgermenu";
    }
    var z = document.getElementById("arrow2")
    if (z.className == "arrow") {
        z.className = "arrowactive";
    } else {
        z.className = "arrow";
    }
  }
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }