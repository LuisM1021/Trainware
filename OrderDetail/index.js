import { getItem, initializeStorage } from "../db/createDB.js";
initializeStorage();

const orderDetail = getItem('orderDetail');
const totalText = document.getElementById('total');
const itemsContainer = document.getElementById('items');
const dateText = document.getElementById('date');
const locationText = document.getElementById('location');
const noProducts = document.getElementById('noProducts');

function main(){
    totalText.textContent = `Q${orderDetail.total.toFixed(2)}`;
    dateText.textContent = orderDetail.date;
    locationText.textContent = orderDetail.location;
    noProducts.textContent = getItem('cart').length
    loadItems();
}

function loadItems(){
    orderDetail.products.forEach(item => {
        itemsContainer.innerHTML += `<div class="product__card">
                    <div class="product__left">
                        <p>${item.name}</p>
                    </div>
                    <p>Q${item.price.toFixed(2)}</p>
                </div>`
    })
}
main()