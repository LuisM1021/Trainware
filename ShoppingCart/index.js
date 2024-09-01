import { initializeStorage, getItem, setItem } from "../db/createDB.js";
import { getCountry, renderPrice } from "../utils/index.js";
initializeStorage()

let cartProducts = getItem('cart');

const countryText = document.getElementById('country');
const itemsContainer = document.getElementById('items');
const totalText = document.getElementById('total');
const buyButton = document.getElementById('buyButton');
const noProducts = document.getElementById('noProducts');
let noProd = cartProducts.length;
noProducts.textContent = noProd
let total = getTotal()
buyButton.addEventListener('click', confirmPurchase)

function main(){
    loadCountry()
    loadItems()
    totalText.textContent = `Q${total.toFixed(2)}`
}
function loadItems(){
    itemsContainer.innerHTML = '';
    cartProducts.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('product__card');
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('product__left');
        const deleteButton = document.createElement('span');
        deleteButton.classList.add('trash-icon');
        deleteButton.addEventListener('click', () => deleteProduct(item.id))
        const name = document.createElement('p');
        name.textContent = item.name;
        const price = document.createElement('p');
        price.textContent = `Q${item.price.toFixed(2)}`;
        div.append(leftDiv);
        leftDiv.append(deleteButton);
        leftDiv.append(name);
        div.append(price);
        itemsContainer.append(div);
    })
}
function deleteProduct(id){
    const newProducts = cartProducts.filter(item => item.id !==id);
    setItem('cart', newProducts);
    cartProducts = newProducts;
    loadItems()
    noProducts.textContent = newProducts.length;
    totalText.textContent = `Q${getTotal().toFixed(2)}`
}
function getTotal(){
    const total = cartProducts.reduce((sum, item) => {
        return sum += item.price
    },0)
    return total
}
async function loadCountry(){
    const country = await getCountry();
    if(country.error){
        countryText.textContent = 'desconocido';
    }else{
        countryText.textContent = country;
    }
}
async function confirmPurchase(){
    if(cartProducts.length > 0){
        const currentOrders = getItem('orders');
        const date = new Date();
        let country = await getCountry();
        if(typeof(country)!=='string' || country.error){
            country = 'desconocido'
        }
        const dateFormat = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
        const newOrder = {
            id: currentOrders.length,
            location: country,
            date: dateFormat,
            total: getTotal(),
            products: cartProducts
        }
        currentOrders.push(newOrder);
        setItem('orders',currentOrders);
        setItem('cart', [])
        noProducts.textContent = 0
        cartProducts = []
        loadItems();
        total = 0
        totalText.textContent = total
    }
}
main();
