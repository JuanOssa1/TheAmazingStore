let url = 'http://localhost:3000/products'
let ul = document.getElementById('productListId')
let userInput = document.getElementById('mainFormInputId')
const list = document.createDocumentFragment();
let products;

function fetchData () {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        products = data
        loadData(products)
    }).catch((error)=>{
        console.log(error)
    }) 
}
const loadData = async (productsToShow) => {
    productsToShow.forEach((product)=>{ 
        let productListItem = document.createElement('li')
        productListItem.classList.add('product-list__item')
        createCustomElement('h1','product-list__title',product.title,productListItem)
        createCustomElement('p','product-list__price',product.price,productListItem, "$")
        createCustomElement('p','product-list__description',product.description,productListItem)
        createCustomElement('p','product-list__category',product.category,productListItem,"Category:")
        createCustomElement('img','product-list__image',product.image,productListItem)
        createCustomElement('p','product-list__id',product.id,productListItem, "Product Id:")
        list.appendChild(productListItem)
    })
    ul.appendChild(list)
    console.log(ul)
}
fetchData()

function createCustomElement(htmlTag, htmlTagClass, htmlTagContent, appendTag, boldText="") {
    let newTag = document.createElement(htmlTag)
    newTag.classList.add(htmlTagClass)
    if(htmlTag === "img"){
        newTag.src = `${htmlTagContent}`
        appendTag.appendChild(newTag)
        return
    }
    newTag.innerHTML = `<b>${boldText}</b> ${htmlTagContent}` 
    appendTag.appendChild(newTag)
}

userInput.addEventListener("keypress", (event)=>{
    if(event.key==="Enter"){
        ul.innerHTML=""
        loadData(filterProducts(products, userInput.value))
        
        //loadData(url+"?q="+userInput.value)
    }
})
function filterProducts(productsToFilter, decisionAttribute) {
    const resul = productsToFilter.filter((product)=>{
        return product.category.includes(decisionAttribute)
    })
    console.log(resul)
    return resul;  
}

