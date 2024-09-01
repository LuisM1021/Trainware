import { initializeStorage, getItem, setItem } from "../db/createDB.js";
import { Product } from "../classes/Product.js";
initializeStorage();
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