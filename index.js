import { initializeStorage, getItem } from './db/createDB.js';
import { renderPrice } from './utils/index.js';
initializeStorage();

window.addEventListener('load', main)
const productsArea = document.getElementById('products');
const productList = getItem('products');
const categoryTitle = document.getElementById('category');
const rightArrow = document.getElementById('rightArrow');
const leftArrow = document.getElementById('leftArrow');
let categoryIndex = 0;

const categories = productList.reduce((categories, item)=>{
    if(!categories.includes(item.categoria)){
        categories.push(item.categoria);
        return categories;
    }
    return categories;
},[])

function main(){
    loadProducts();
    categoryTitle.textContent = categories[categoryIndex];
}
function loadProducts(){
    const categoryProducts = productList.filter(item => item.categoria === categories[categoryIndex]);
    categoryTitle.textContent = categories[categoryIndex];
    productsArea.innerHTML = '';
    for(let i = 1; i<=3; i++){
        productsArea.innerHTML += `
        <div class="product__card">
            <figure class="product__img-container">
                <img class="product__img" src="${categoryProducts[i].imagen}" alt="">
            </figure>
            <p class="product__detail">
                <span class="product__name">${categoryProducts[i].nombre}</span>
                <span class="product__price">Q${categoryProducts[i].precio.toFixed(2)}</span>
            </p>
        </div>
        `
    }
}
function changeCategory(to){
    if(to === 'next'){
        if(categoryIndex+1 === categories.length){
            categoryIndex = 0
        }else{
            categoryIndex++;
        }
        loadProducts();
    }else{
        if(categoryIndex - 1 === -1){
            categoryIndex = categories.length - 1
        }else{
            categoryIndex--;
        }
        loadProducts();

    }
}
rightArrow.addEventListener('click', () => changeCategory('next'))
leftArrow.addEventListener('click', () => changeCategory('before'))
