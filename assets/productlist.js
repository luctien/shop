//filter theo price
// products.sort((b,a)=>{
//     return a.price-b.price;
//   })

function sortByPriceDescending(products) {
  products.sort((a, b) => {
    return a.price - b.price;
  });
}
function sortByPriceUp(products) {
  products.sort((a, b) => {
    return b.price - a.price;
  });
}

const lowBtn = document.querySelector(".upsort");
console.log(lowBtn);
const highBtn = document.querySelector(".downsort");
lowBtn.addEventListener("click", sortByPriceDescending);
highBtn.addEventListener("click", sortByPriceUp);



var productList = document.getElementById("product-list");
productList.innerHTML = "";
products.forEach((product) => {
  let node = document.createElement("div");
  node.classList.add("col-12", "col-sm-6", "col-lg-4");
  let html =
    `<div class="item">
    <a href="#">
      <div class="product-img"><img src="` +
    product["image-url"] +
    `" alt=""></div>
      <div class="product-info">
        <h6 class="pro-title">` +
    product.title +
    `</h6>
        <div class="pro-price">` +
    product.price.toLocaleString() +
    " đ" +
    `</div>
        <div class="pro-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <div class="rating-num text-dark">(` +
    product["rating-num"] +
    `)</div>
        </div>
      </div>
    </a>
      <div class="add-cart">
        <a href="" class="addToCartButton" data-name="Product 1"><button>Thêm vào giỏ hàng</button></a>
      </div>
  </div>`;
  node.innerHTML = html;

  productList.appendChild(node);
});

// RESET filter
function resetData() {
  var priceInputs = document.querySelectorAll("#enter-price input");
  priceInputs.forEach(function (input) {
    input.value = "";
  });
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



// localStorage.removeItem('cartProducts');
function clearCart() {
  localStorage.removeItem("cartItems");
}
window.addEventListener("load", function() {
  clearCart();
});

// var upSortButton = document.querySelector(".upsort");
// var itemsContainer = document.querySelector(".items-container");

// upSortButton.addEventListener("click", function() {
//   itemsContainer.innerHTML = ""; // Xóa các sản phẩm hiện tại trong container

//   // Sắp xếp các sản phẩm theo giá cao tới thấp
//   var sortedItems = products.from(itemsContainer.children).sort(function(a, b) {
//     var priceA = parseFloat(a.querySelector(".pro-price").textContent.replace(" đ", "").replace(".", ""));
//     var priceB = parseFloat(b.querySelector(".pro-price").textContent.replace(" đ", "").replace(".", ""));
//     return priceB - priceA;
//   });

//   sortedItems.forEach(function(item) {
//     itemsContainer.appendChild(item);
//   });
// });
