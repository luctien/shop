function sortByPriceDescending(products) {
  products.sort((a, b) => {
    return a.price - b.price;
  });
  renderProductList(products);
}

function sortByPriceUp(products) {
  products.sort((a, b) => {
    return b.price - a.price;
  });
  renderProductList(products);
}

function sortByRatingNumDescending(products) {
  products.sort((a, b) => {
    return b["rating-num"] - a["rating-num"];
  });
  renderProductList(products);
}

const lowBtn = document.querySelector(".upsort");
const highBtn = document.querySelector(".downsort");
const viewBtn = document.querySelector(".rating-sort");

lowBtn.addEventListener("click", () => {
  sortByPriceDescending(products);
});

highBtn.addEventListener("click", () => {
  sortByPriceUp(products);
});

viewBtn.addEventListener("click", () => {
  sortByRatingNumDescending(products);
});

function renderProductList(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    let node = document.createElement("div");
    node.classList.add("col-12", "col-sm-6", "col-lg-4");
    let html =
      `<div class="item">
        <a href="./detailproduct.html">
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
          <a href="#" class="addToCartButton" data-name="Product 1"><button>Thêm vào giỏ hàng</button></a>
        </div>
      </div>`;
    node.innerHTML = html;

    productList.appendChild(node);
  });

  // Lắng nghe sự kiện click trên các nút "addToCartButton"
  const addToCartButtons = document.querySelectorAll(".addToCartButton");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
      const productName = button.getAttribute("data-name");
      addToCart(productName);
    });
  });
}

function addToCart(productName) {
  // Xử lý logic thêm sản phẩm vào giỏ hàng
  console.log("Thêm sản phẩm vào giỏ hàng:", productName);
}

// Gọi hàm renderProductList ban đầu để hiển thị danh sách sản phẩm
renderProductList(products);



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

      setTimeout(function() {
        successMessage.remove();
      }, 3000);

      console.log('Thêm vào giỏ hàng: ' + productName);
    }
  });
});



// Lọc sản phẩm theo giá
function filterByPrice(minPrice, maxPrice) {
  const filteredProducts = products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });
  renderProductList(filteredProducts);
}

// Lọc sản phẩm theo danh mục
function filterByCategory(category) {
  const filteredProducts = products.filter((product) => product.category === category);
  renderProductList(filteredProducts);
}

// Lọc sản phẩm theo chất liệu
function filterByMaterial(material) {
  const filteredProducts = products.filter((product) => product.material === material);
  renderProductList(filteredProducts);
}

// Lấy danh sách tất cả các checkbox danh mục
const checkboxes = document.querySelectorAll('.select-filter.categoryfl input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const checkedCategories = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.parentNode.textContent.trim());
    if (checkedCategories.length > 0) {
      const filteredProducts = products.filter((product) => checkedCategories.includes(product.category));
      renderProductList(filteredProducts);
    } else {
      renderProductList(products);
    }
  });
});

// Lấy danh sách tất cả các checkbox chất liệu
const materialCheckboxes = document.querySelectorAll('.select-filter.material input[type="checkbox"]');
materialCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const checkedMaterials = Array.from(materialCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.parentNode.textContent.trim());
    if (checkedMaterials.length > 0) {
      const filteredProducts = products.filter((product) => checkedMaterials.includes(product.material));
      renderProductList(filteredProducts);
    } else {
      renderProductList(products);
    }
  });
});

// Lọc sản phẩm khi nhấp vào nút "Lọc"
const filterButton = document.querySelector('.acti button.bg-primary');
filterButton.addEventListener('click', () => {
  const minPriceInput = document.querySelector('#enter-price input:first-child');
  const maxPriceInput = document.querySelector('#enter-price input:last-child');
  const minPrice = parseInt(minPriceInput.value);
  const maxPrice = parseInt(maxPriceInput.value);
  if (minPrice && maxPrice) {
    filterByPrice(minPrice, maxPrice);
  }
});

// Reset dữ liệu lọc
function resetData() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  materialCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  const minPriceInput = document.querySelector('#enter-price input:first-child');
  const maxPriceInput = document.querySelector('#enter-price input:last-child');
  minPriceInput.value = '';
  maxPriceInput.value = '';
  renderProductList(products);
}

// localStorage.removeItem('cartProducts');
function clearCart() {
  localStorage.removeItem("cartItems");
}
window.addEventListener("load", function() {
  clearCart();
});

