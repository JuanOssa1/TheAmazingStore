const url = 'http://localhost:3000/products'
const ul = document.getElementById('productListId')
//const list = document.createDocumentFragment();

function loadData(url) {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        let products = data
        products.map((product)=>{
            let productListItem = document.createElement('li')//.classList.add('product-list__item');
            let productListTitle= document.createElement('h1')//.classList.add('product-list__title');
            let productListPrice= document.createElement('p')//.classList.add('product-list__price');
            let productListDescription= document.createElement('p')//.classList.add('product-list__description');
            let productListCategory= document.createElement('p')//.classList.add('product-list__category');
            let productListImage= document.createElement('img')//.classList.add('product-list__image');
            let productListId= document.createElement('p')//.classList.add('product-list__id');

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