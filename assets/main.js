// import owl js
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     autoplay: false,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     center: false,
//     // navText: [
//     //   "<i class='fa fa-angle-left'></i>",
//     //   "<i class='fa fa-angle-right'></i>",
//     // ],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1000: {
//         items: 4,
//       },
//     },
//   });
// });

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


// Thêm vào giỏ hàng => localStorage

// Xoá sản phẩm

// Bấm nút delete để xoá sản phẩm
// Xoá trên giao diện
// Cập nhật thông tin giỏ hàng
const deleteButtons = document.querySelectorAll(".cart-item-actions button");
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cartItemElement = button.closest(".cart-item");

    cartItemElement.remove();
    updateCartInfo();
  });
});

// Cập nhật số lượng
const downButtons = document.querySelectorAll(".btn-down");
downButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.nextElementSibling;

    const current = +quantityElement.textContent;

    if (current > 1) {
      quantityElement.textContent = current - 1;
      updateCartInfo();
    }
  });
});

const upButtons = document.querySelectorAll(".btn-up");
upButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.previousElementSibling;

    const current = +quantityElement.textContent;

    quantityElement.textContent = current + 1;
    updateCartInfo();
  });
});

// Mã giảm giá

function updateCartInfo() {
  const emptyCart = document.querySelector(".shopping-cart-empty");
  const shoppingCart = document.querySelector(".shopping-cart");
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.querySelector(".total-price");
  const totalQuantityElement = document.querySelector(".total-quantity");

  if (cartItems.length == 0) {
    emptyCart.style.display = "block";
    shoppingCart.style.display = "none";
  } else {
    emptyCart.style.display = "none";
    shoppingCart.style.display = "table";
  }

  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((cartItem) => {
    const price = +cartItem.querySelector(".product-price").textContent;
    const quantity = +cartItem.querySelector(".quantity").textContent;
    const downButton = cartItem.querySelector(".btn-down");
    const total = cartItem.querySelector(".cart-item-price");

    // Cập nhật giá tiền cho từng item
    total.textContent = price * quantity;

    totalQuantity += quantity;
    totalPrice += price * quantity;

    downButton.disabled = quantity == 1;
  });

  totalPriceElement.textContent = totalPrice;
  totalQuantityElement.textContent = totalQuantity;
}

updateCartInfo();