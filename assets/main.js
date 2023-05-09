// import owl js
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: false,
    // navText: [
    //   "<i class='fa fa-angle-left'></i>",
    //   "<i class='fa fa-angle-right'></i>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// card-slider
$(document).ready(function () {
  $(".card-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    infinite: true,
    // navText: [
    //   "<i class='fa fa-angle-left'></i>",
    //   "<i class='fa fa-angle-right'></i>",
    // ],
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

// const menu = document.querySelector (".menu-mb")
// const body = document.querySelector(".body")
// menu.addEventListener("click", function() {
//   menu.classList.toggle("change")
//   body.classList.toggle("change-body")
// })
// function myFunction(x) {
//   x.classList.toggle("change");
// }

// const side = document.querySelector(".sidenav")
// console.log(side)

// side.addEventListener("click", function(e) {
//   console.log(e.target.classList.contains(".sidenav"))
//   if(e.target.classList.contains(".sidenav")){
//     side.style.backgroundColor = "#fff";
//   }
// })