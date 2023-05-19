
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
      // Sản phẩm đã tồn tại trong giỏ hàng
      alert('Sản phẩm' +productName +'đã có trong giỏ hàng!');
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

var cartCount = document.querySelector('.number-cart');
var addToCartButtons = document.querySelectorAll('#addToCartButton');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var currentNumber = parseInt(numberCart.textContent);
    numberCart.textContent = currentNumber + 1;
    // var dataName = this.getAttribute('data-name');
    // console.log('Thêm vào giỏ hàng: ' + dataName);
  });
});




// // Lấy tham chiếu đến phần tử "number-cart"
// var numberCart = document.querySelector('.number-cart');

// // Lấy tất cả các phần tử có lớp CSS "addToCartButton"
// var addToCartButtons = document.querySelectorAll('.add-cart a');

// // Lấy dữ liệu từ Local Storage (nếu có)
// var cartProducts = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : [];

// // Cập nhật số lượng sản phẩm trong giỏ hàng khi tải lại trang
// numberCart.textContent = cartProducts.length;

// // Lặp qua từng nút "Thêm vào giỏ hàng"
// addToCartButtons.forEach(function(button) {
//   button.addEventListener('click', function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

//     var dataName = this.getAttribute('data-name'); // Lấy giá trị của thuộc tính data-name

//     if (isProductInCart(dataName)) {
//       // Hiển thị thông báo sản phẩm đã tồn tại trong giỏ hàng
//       alert('Sản phẩm ' + dataName + ' đã tồn tại trong giỏ hàng.');
//     } else {
//       // Thêm sản phẩm vào danh sách giỏ hàng
//       cartProducts.push(dataName);
//       localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

//       // Cập nhật số lượng sản phẩm trong giỏ hàng
//       numberCart.textContent = cartProducts.length;

//       // Hiển thị thông báo thành công
//       var successMessage = document.createElement('div');
//       successMessage.textContent = 'Đã thêm ' + dataName + ' vào giỏ hàng.';
//       successMessage.classList.add('success-message');
//       document.body.appendChild(successMessage);

//       // Xóa thông báo sau 3 giây
//       setTimeout(function() {
//         successMessage.remove();
//       }, 3000);

//       console.log('Thêm vào giỏ hàng: ' + dataName);
//     }
//   });
// });

// // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
// function isProductInCart(productName) {
//   return cartProducts.includes(productName);
// }