var products=[
  {
    "title": "Ghế Sofa Soto",
    "image-url": "./assets/image/2.jpg",
    "price": 5250000,
    "rating": 4.8,
    "rating-num": 86,
    "category": "Ghế",
    "material": "Đồ da",
  },
  {
    "title": "Tủ Gỗ Ridge",
    "image-url": "./assets/image/2n.jpg",
    "price": 6250000,
    "rating": 4.5,
    "rating-num": 62,
    "category": "Tủ, Kệ",
    "material": "Đồ gỗ",
  },
  {
    "title": "Kệ Đặt Kinshi",
    "image-url": "./assets/image/3n.jpg",
    "price": 2250000,
    "rating": 5,
    "rating-num": 73,
    "material": "Thép",
    "category": "Tủ, Kệ",
  },
  {
    "title": "Ghế Sitzer",
    "image-url": "./assets/image/4.jpg",
    "price": 5650000,
    "rating": 5,
    "rating-num": 36,
    "category": "Ghế",
    "material": "Đồ da",
  },
  {
    "title": "Ghế Kifa Scandi",
    "image-url": "./assets/image/5.jpg",
    "price": 1250000,
    "rating": 5,
    "rating-num": 98,
    "category": "Ghế",
    "material": "Đồ gỗ",
  },
  {
    "title": "Bàn Coffe Mesa",
    "image-url": "./assets/image/6.jpg",
    "price": 2250000,
    "rating": 4.6,
    "rating-num": 88,
    "category": "Bàn",
    "material": "Thép",
  },
  {
    "title": "Giường Hộp Iris",
    "image-url": "./assets/image/10.jpg",
    "price": 10350000,
    "rating": 4.6,
    "rating-num": 23,
    "category": "Giường",
    "material": "Gỗ",
  },
  {
    "title": "Ghế Apart",
    "image-url": "./assets/image/1.jpg",
    "price": 2250000,
    "rating": 4.6,
    "rating-num": 88,
    "category": "Tủ, Kệ",
    "material": "Thép",
  },
  {
    "title": "Bàn Sofa Marb",
    "image-url": "./assets/image/8.webp",
    "price": 3150000,
    "rating": 4.6,
    "rating-num": 28,
    "category": "Bàn",
    "material": "Thép",
  }
]


//  ScrollTop
var lastScrollTop = 0;
$(window).scroll(function(event){
    const menubar = document.getElementsByClassName("menu")[0];
    var st = $(this).scrollTop();
   if (st > lastScrollTop){
    console.log("dơn");
      menubar.classList.remove("menu-sticky");
   } else {
    console.log("up");
      menubar.classList.add("menu-sticky");
   }
   lastScrollTop = st;
});


// card-slider-product
$(document).ready(function () {
  $(".card-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    infinite: true,
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
          slidesToShow: 2,
        },
      },
    ],
  });
});

var isNavClosed=true;

//  MENU MOBILE
function openNav() {
  isNavClosed=false;
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  isNavClosed=true;
  document.getElementById("mySidenav").style.width = "0";
}

//  ĐÓNG MENU MOBILE
const body = document.getElementsByTagName("body")[0];
console.log(body);
const sideNav = document.querySelector("#mySidenav");
body.addEventListener ("click", function(e) {
  // console.log(e.target);
  // console.log(isNavClosed);
  if(e.target.classList.contains("mbicon")){
    openNav();
  }else
  if(isNavClosed===false && !$(e.target).closest("#mySidenav").length){
  // if(e.target.classList.contains("#mySidenav")){
    // sideNav.style.display = "none";
    // body.classList.remove('#mySidenav');
    closeNav();
  }}
)



// Image product
function changeBorder(box) {
  var boxes = document.querySelectorAll(".sm-img");
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("selected");
  }
  box.classList.add("selected");
}
function changeImage(img) {
  var mainImage = document.getElementById("bigimg");
  console.log(mainImage);
  mainImage.src = img.src;
}


//  numberCart
var addToCartButtons = document.querySelectorAll(".addToCartButton");
var numberCart = document.querySelector(".number-cart");

addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault();

    var productName = this.getAttribute("data-name");
    var productPrice = parseFloat(this.getAttribute("data-price"));

    // Lấy dữ liệu giỏ hàng từ Local Storage
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    var productExists = cartItems.some(function(item) {
      return item.name === productName;
    });

    if (productExists) {
      alert('Sản phẩm ' + productName + ' đã có trong giỏ hàng!');
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng
      var newQuantity = parseInt(numberCart.textContent) + 1;
      numberCart.textContent = newQuantity;

      // Cập nhật dữ liệu giỏ hàng vào Local Storage
      var newItem = {
        name: productName,
        price: productPrice,
        quantity: newQuantity
      };
      cartItems.push(newItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Hiển thị thông báo thành công
      var successMessage = document.createElement('div');
      successMessage.textContent = 'Đã thêm ' + productName + ' vào giỏ hàng.';
      successMessage.classList.add('success-message');
      document.body.appendChild(successMessage);

      // Xóa thông báo sau 3 giây
      setTimeout(function() {
        successMessage.remove();
      }, 3000);

      console.log('Thêm vào giỏ hàng: ' + productName);
    }
  });
});

function clearCart() {
    localStorage.removeItem("cartItems");
  }
window.addEventListener("load", function() {
    clearCart();
});


// localStorage.removeItem('cartProducts');



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
    emptyCart.style.display = "table";
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

