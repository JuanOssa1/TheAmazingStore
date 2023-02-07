let url = 'http://localhost:3000/products'
let ul = document.getElementById('productListId')
let userInput = document.getElementById('mainFormInputId')
//const list = document.createDocumentFragment();

function loadData(url) {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        let products = data
        products.map((product)=>{
            let productListItem = document.createElement('li')
            let productListTitle= document.createElement('h1')
            let productListPrice= document.createElement('p')
            let productListDescription= document.createElement('p')
            let productListCategory= document.createElement('p')
            let productListImage= document.createElement('img')
            let productListId= document.createElement('p')

            productListItem.classList.add('product-list__item')
            productListTitle.classList.add('product-list__title')
            productListPrice.classList.add('product-list__price')
            productListDescription.classList.add('product-list__description')
            productListCategory.classList.add('product-list__category')
            productListImage.classList.add('product-list__image')
            productListId.classList.add('product-list__id')

            
            productListTitle.innerHTML = `${product.title}`
            productListPrice.innerHTML = `<b>$ </b>${product.price}`
            productListDescription.innerHTML = `${product.description}`
            productListCategory.innerHTML = `<b>Category: </b> ${product.category}`
            productListImage.src = `${product.image}`
            productListId.innerHTML = `<b>Product Number: </b> ${product.id}`

            
            
            productListItem.appendChild(productListTitle)
            productListItem.appendChild(productListPrice)
            productListItem.appendChild(productListDescription)
            productListItem.appendChild(productListCategory)
            productListItem.appendChild(productListImage)
            productListItem.appendChild(productListId)
            ul.appendChild(productListItem)

            
        })
    }).catch((error)=>{
        console.log(error)
    })
    //ul.appendChild(list) //Recomkendaban hacerlo pero no se porque
    console.log(ul)
}
loadData(url)


userInput.addEventListener("keypress", (event)=>{
    if(event.key==="Enter"){
        ul.innerHTML=""
        loadData(url+"?q="+userInput.value)
    }
})

