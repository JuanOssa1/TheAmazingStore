let url = 'http://localhost:3000/products'
let ul = document.getElementById('productListId')!
let userInput = document.getElementById('mainFormInputId')! as HTMLInputElement
const list = document.createDocumentFragment();


let products: Product[]=[];

function fetchData () {
    fetch(url).then((response)=>{
        return response.json();
    }).then((data: Product[])=>{
        products = data
        loadData(products)
    }).catch((error)=>{
        error
    }) 
}
const loadData = async (productsToShow: Product[]) => {
    productsToShow.forEach((product: Product)=>{ 
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
//Dado que append tg puidera ser un inputHTMLelement que se pondria alli asi como se hio esta bien?
function createCustomElement(htmlTag: string, htmlTagClass: string, htmlTagContent: string, appendTag: HTMLLIElement|HTMLInputElement, boldText: string="") {
    let newTag = document.createElement(htmlTag)
    newTag.classList.add(htmlTagClass)
    if(htmlTag === "img"){
        let imageTag = newTag as HTMLImageElement
        imageTag.src = `${htmlTagContent}`
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
function filterProducts(productsToFilter: Product[], decisionAttribute: string) {
    const resul = productsToFilter.filter((product: Product)=>{
        return product.category.includes(decisionAttribute)
    })
    return resul;  
}

