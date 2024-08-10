const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const productDesc = document.getElementById("desc")
const addProductBtn = document.getElementById("addProduct")
const updateProductBtn = document.getElementById("editProduct")
const productsContainer = document.querySelector(".products")

let products = []
const localStorageProducts = localStorage.getItem("productsList")
if (localStorageProducts){
    const JSlocalStorageProducts = JSON.parse(localStorageProducts)
    products= JSlocalStorageProducts
    displayProducts(products)
}

// add (create)
function addProduct (){
const product = {
    id: Date.now(),
    name: productName.value ,
    price: productPrice.value,
    desc: productDesc.value
}

products.push(product)
localStorage.setItem("productsList",JSON.stringify(products))
displayProducts(products)

// scroll down (scroll to (end of page))
}
addProductBtn.addEventListener("click",addProduct)

// display (read)

function displayProducts (list){
    let productsData = ``
for(let i=0;i<list.length;i++){
    productsData += `
        <div class="product">
            <p id="pName"> ${list[i].name} </p>
            <p> ${list[i].price} </p>
            <p> ${list[i].desc} </p>
            <button class="updateBtn" onClick="updateProduct(${list[i].id})" >  update  </button>
            <button class="deleteBtn" onClick="deleteProduct(${list[i].id})">  delete  </button>
        </div>
    `
}
productsContainer.innerHTML = productsData

}

// delete
function deleteProduct (productId){
   const newProducts = products.filter(function(product){
       return product.id !== productId
   })
   products = newProducts
   localStorage.setItem("productsList",JSON.stringify(newProducts))
   displayProducts(products)
   
}

//edit
function updateProduct (productId){
    updateProductBtn.style.display = "block"
    addProductBtn.style.display = "none"
    const selectedProduct = products.filter(function(product){
        return product.id === productId
    })
    productName.value = selectedProduct[0].name,
    productPrice.value = selectedProduct[0].price,
    productDesc.value =selectedProduct[0].desc
    

}


updateProductBtn.addEventListener("click",function(){
    // update product value
    updateProductBtn.style.display = "none"
    addProductBtn.style.display = "block"

    // getting new values
    productName.value = selectedProduct[0].name,
    productPrice.value = selectedProduct[0].price,
    productDesc.value =selectedProduct[0].desc
})