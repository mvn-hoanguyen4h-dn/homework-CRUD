var itemList = JSON.parse(localStorage.getItem("list"))
var $tbody = document.querySelector("tbody")
var $input = document.querySelector(".input-search")
var $deleteBtn = document.querySelector(".delete-btn")
var productList = []

function displayItemList() {
  itemList.map((item, index) => {

    var trElement = document.createElement("tr")
    trElement.className = "item"

    trElement.innerHTML = `
      <td>${item.id}</td>
      <td><img class="item-img" src=${item.image}></td>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.quantity}</td>
      <td>$${item.price}</td>
      <td><i class="fa-solid fa-trash" onClick="deleteItem(${index})"></i></td>
      `
    $tbody.appendChild(trElement)
    productList.push(trElement)
  })
}
displayItemList()

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
    <td><i class="fa-solid fa-trash" onClick="deleteItem(${index})"></i></td>
  </tr>`
  })

  $tbody.innerHTML = content
}

// search product name
var $input = document.querySelector(".input-search")

$input.addEventListener("input", (e) => searchProductName(e.target.value))

function searchProductName(inputValue) {
  productList.filter(product => {
    if (product.children[2].innerText.toLowerCase().includes(inputValue.toLowerCase())) {
      product.classList.remove("hide")
    } else {
      product.classList.add("hide")
    }
  })
}

// delete item
function deleteItem(id) {
  itemList.forEach((item, index) => {
    if (index === id) {
      itemList.splice(id, 1)
      localStorage.setItem("list", JSON.stringify(itemList))
      displayProducts(itemList)
    }
  })
}

// submit form
// const $form = document.querySelector("form")

// $form.addEventListener("submit", (e) => {
//   e.preventDefault()

//   $input.value == ""
//   $input.focus()
// })
