var $form = document.querySelector("form")
var $inputs = document.querySelectorAll("input")
var $inputt = document.querySelector("input")
var products = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
var $tbody = document.querySelector("tbody")
var $settingBtn = document.querySelector(".setting-btn")

var $id = document.getElementById("id");
var $name = document.getElementById("name");
var $category = document.getElementById("category");
var $price = document.getElementById("price");
var $quantity = document.getElementById("quantity");
var $image = document.getElementById("image");


function updateProducts(products) {
  const product = {
    id: $id.value,
    name: $name.value,
    category: $category.value,
    price: $price.value,
    image: $image.value,
    quantity: $quantity.value
  }

  let unique = $settingBtn.getAttribute("id")

  products.splice(unique, 1, product)
  localStorage.setItem("list", JSON.stringify(products))
  $settingBtn.removeAttribute("id")

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
    <td><i class="fa-solid fa-pen edit-btn" onClick="editItem(${index})"></i></td>
  </tr>`
  })

  $tbody.innerHTML = content
}

// check ID
function checkId(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      return true
    }
  }
}

// edit item
function editItem(index) {
  products.map((product, id) => {
    if (id === index) {
      $id.value = product.id
      $category.value = product.category
      $image.value = product.image
      $name.value = product.name
      $price.value = product.price
      $quantity.value = product.quantity
    }
  })

  $settingBtn.setAttribute("id", index)
  $id.focus()
}

// form submit
$form.addEventListener("submit", (e) => {
  e.preventDefault()
  updateProducts(products)
  displayProducts(products)
})

displayProducts(products)

s

