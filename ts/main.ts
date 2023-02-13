let url = 'http://localhost:3000/products'
let ul = document.getElementById('productListId')!
let userInput = document.getElementById('mainFormInputId')! as HTMLInputElement
const list = document.createDocumentFragment();
type Product = {
    title: string,
    price: string,
    description: string,
    category: string,
    image: string,
    id: string
}

let products: Product[]=[];

function fetchData () {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        products = data
        loadData(products)
    }).catch((error)=>{
        error
    }) 
}
const loadData = async (productsToShow: any) => {
    productsToShow.forEach((product: any)=>{ 
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
}
fetchData()

function createCustomElement(htmlTag: any, htmlTagClass: any, htmlTagContent: any, appendTag: any, boldText: any="") {
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
    }
})
function filterProducts(productsToFilter: any, decisionAttribute: any) {
    const resul = productsToFilter.filter((product: any)=>{
        return product.category.includes(decisionAttribute)
    })
    return resul;  
}

