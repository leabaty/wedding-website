// PARALLAX EFFECT (from codepen https://codepen.io/Prachl/pen/jjKzEy)

function Parallax() {
    const throttle = (fn, wait) => {
      var time = Date.now();
  
      return function () {
        if (time + wait - Date.now() < 0) {
          fn();
          time = Date.now();
        }
      };
    };
  
    const parallax = () => {
      var scrolled = window.pageYOffset;
      var parallaxItem = document.querySelector(".parallax");
      // To adjust the speed, change the coords
      var coords = scrolled * 0.4 + "px";
      parallaxItem.style.transform = "translateY(" + coords + ")";
    };

    window.addEventListener("scroll", throttle(parallax, 14));
}

    export default Parallax;