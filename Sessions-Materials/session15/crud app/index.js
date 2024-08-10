const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const productDesc = document.getElementById("desc")
const addBtn = document.getElementById("add-btn")
const productsContainer = document.querySelector(".products")

const products = []
function addProduct (){
    const product = {
        name:productName.value,
        price:productPrice.value,
        desc:productDesc.value
    }
    products.push(product)
    productsContainer.innerHTML += `
    <p> ${product.name}</p>
    <p> ${product.price}</p>
    <p> ${product.desc}</p>
    `
    console.log(product);
    productName.value=""
    productPrice.value=""
    productDesc.value=""
}
addBtn.addEventListener("click",addProduct)

localStorage.setItem("products",products)

