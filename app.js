// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("prog-bar").style.width = scrolled + "%";
// }



const links = document.querySelectorAll('a[href^="#"]');

console.log("links", links);
links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const href = this.getAttribute("href").substring(1);
        const offsetTop = document.getElementById(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth",
        });
    });
});



