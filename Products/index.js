import { initializeStorage, getItem, setItem } from "../db/createDB.js";
// import { Product } from "../classes/Product.js";

initializeStorage();
class Product{
    constructor(id, name, description, category, price, img){
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.img = img;
        this.card = this.getCard();
        // this.html = `<article class="product__card">
        //                 <figure class="product__img-container">
        //                     <img class="product__img" src="${img}" alt="">
        //                 </figure>
        //                 <h2 class="product__name">${name}</h2>
        //                 <p class="product__price">Q${price}</p>
        //                 <span class="product__add-to-cart"></span>
        //             </article>`
        this.productDetail = `<figure class="details__img-container">
                <img class="details__img" src="${img}" alt="">
            </figure>
            <h2 class="details__name">${name}</h2>
            <p class="details__description">${description}</p>
            <p class="details__price">Q${this.price.toFixed(2)}</p>`
    }
    getCard(){
        const article = document.createElement('article');
        article.classList.add('product__card');
        article.draggable = true;
        article.addEventListener('click', () => renderDetail(this.productDetail));
        article.addEventListener('dragstart', (e) =>{
            cart.classList.add('add-to-cart--show')
            cart.classList.remove('add-to-cart--dragged')
            e.dataTransfer.setData('application/json', JSON.stringify(this))
        })
        article.addEventListener('dragend', ()=>cart.classList.remove('add-to-cart--show'))
        const figure = document.createElement('figure');
        figure.classList.add('product__img-container');
        figure.innerHTML = `<img class="product__img" src="${this.img}" alt="">`
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        h2.classList.add('product__name');
        const p = document.createElement('p');
        p.classList.add('product__price');
        p.textContent = `Q${this.price.toFixed(2)}`;
        const button = document.createElement('span');
        button.classList.add('product__add-to-cart');
        button.addEventListener('click', (e) =>{
            e.stopPropagation();
            addToCart(this)
        })
        article.append(figure);
        article.append(h2);
        article.append(p);
        article.append(button);
        return article
    }
}
const productsArea = document.getElementById('products');
const productList = getItem('products');
const cartProducts = getItem('cart');
const productDetails = document.getElementById('productDetails');
const searchInput = document.getElementById('search');
const cartNo = document.getElementById('productsAdded');
const filterBar = document.getElementById('filterBar');
const filterButton = document.getElementById('displayFilter');
const closeFilter = document.getElementById('closeFilter')
const cart = document.getElementById('addToCart');

const products = productList.map(item => new Product(item.id, item.nombre, item.descripcion, item.categoria, item.precio, item.imagen));
let productsAdded = cartProducts.length;
let filterByName = '';

searchInput.addEventListener('input', (e)=>filterProducts(e.target.value))
filterButton.addEventListener('click', () => filterBar.classList.add('filter--show'));
closeFilter.addEventListener('click', () => filterBar.classList.remove('filter--show'));

cart.addEventListener('dragover', (e) =>{
    e.preventDefault()
    cart.classList.add('add-to-cart--dragged');
});
cart.addEventListener('dragleave', () => cart.classList.remove('add-to-cart--dragged'))
cart.addEventListener('drop', (e) => {
    e.preventDefault();
    const product = JSON.parse(e.dataTransfer.getData('application/json'));
    addToCart(product)
});

function main(){
    loadProducts();
    cartNo.textContent = productsAdded;
}
function loadProducts(){
    productsArea.innerHTML = '';
    let filteredProducts
    if(filterByName !== ''){
        filteredProducts = products.filter(item => item.name.toLowerCase().includes(filterByName.toLowerCase()))
    }else{
        filteredProducts = products
    }
    filteredProducts.forEach(product => productsArea.append(product.card))
}
function addToCart(Product){
    const currentProducts = getItem('cart');
    if(currentProducts.find(item => item.id === Product.id)){
    }else{
        currentProducts.push(Product);
        setItem('cart', currentProducts);
        productsAdded++;
        cartNo.textContent = productsAdded;
    }
}
function renderDetail(detail){
    productDetails.innerHTML = detail;
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-detail');
    closeButton.addEventListener('click', () => productDetails.classList.remove('product__details--show'));
    productDetails.append(closeButton);
    productDetails.classList.add('product__details--show');
}
function filterProducts(search){
    filterByName = search;
    loadProducts(); 
}
main();
export {renderDetail, addToCart }