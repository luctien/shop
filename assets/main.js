var products=[
  {
    "title": "Ghế Soto Apartment",
    "image-url": "./assets/image/1.jpg",
    "price": 5250000,
    "rating": 5,
    "rating-num": 50,
    "category": "Ghế",
  },
  {
    "title": "Ghế Soto Apartment",
    "image-url": "./assets/image/1.jpg",
    "price": 6250000,
    "rating": 4.5,
    "rating-num": 62,
    "category": "Ghế",
  },
  {
    "title": "Ghế Soto Apartment",
    "image-url": "./assets/image/1.jpg",
    "price": 2250000,
    "rating": 5,
    "rating-num": 73,
    "category": "Bàn",
  },
  {
    "title": "Ghế Soto Apartment",
    "image-url": "./assets/image/1.jpg",
    "price": 3250000,
    "rating": 5,
    "rating-num": 56,
    "category": "Tủ",

  },
  {
    "title": "Ghế Soto Apartment",
    "image-url": "./assets/image/1.jpg",
    "price": 1250000,
    "rating": 5,
    "rating-num": 58,
    "category": "Giường",

  }
]
console.log(products);



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
  // document.body.style.backgroundColor = "white";
}

//  ĐÓNG MENU MOBILE
const body = document.getElementsByTagName("body")[0];
console.log(body);
const sideNav = document.querySelector("#mySidenav");
body.addEventListener ("click", function(e) {
  console.log(e.target);
  console.log(isNavClosed);
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

