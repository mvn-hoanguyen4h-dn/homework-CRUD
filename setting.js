var $form = document.querySelector("form")
var $inputs = document.querySelectorAll("input[type='text']")
var $inputt = document.querySelector("input")
var products = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
var $tbody = document.querySelector("tbody")

var $id = document.getElementById("id");
var $name = document.getElementById("name");
var $category = document.getElementById("category");
var $price = document.getElementById("price");
var $quantity = document.getElementById("quantity");
var $image = document.getElementById("image");


function addProducts() {
  const product = {
    id: $id.value,
    name: $name.value,
    category: $category.value,
    price: $price.value,
    image: $image.value,
    quantity: $quantity.value
  }

  if (!checkId(product.id)) {
    products.push(product)
    localStorage.setItem("list", JSON.stringify(products))
  } else {
    alert("The product has been already")
  }

  $inputs.forEach($input => {
    $input.value = ""
  })

  $id.focus()
}

// displayProducts
function displayProducts(products) {
  let content = ''
  products.map((item, index) => {

    content += `<tr key=${index} class="item">
    <td>${item.id}</td>
    <td><img class="item-img" src=${item.image}></td>
    <td>${item.name}</td>
    <td>${item.category}</td>
    <td>${item.quantity}</td>
    <td>$${item.price}</td>
  </tr>`
  })

  $tbody.innerHTML = content
}

function checkId(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return true
    }
  }
}

$form.addEventListener("submit", (e) => {
  e.preventDefault()
  addProducts()
  displayProducts(products)
})

displayProducts(products)


