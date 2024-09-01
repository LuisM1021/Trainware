import { getItem, initializeStorage, setItem } from "../db/createDB.js";
initializeStorage();

const orders = getItem('orders');
const ordersContainer = document.getElementById('orders');
const noProducts = document.getElementById('noProducts');


function main(){
    loadOrders();
    noProducts.textContent = getItem('cart').length
}

function loadOrders(){
    orders.forEach(item => {
        const div = document.createElement('div');
        div.addEventListener('click', () => {
            window.location.href = '/OrderDetail';
            setItem('orderDetail', item);
        })
        div.classList.add('order__card');
        div.innerHTML = `<div class="card__left">
                    <div class="card__location">
                        <span class="location-icon"></span>
                        <p class="location__country">${item.location}</p>
                    </div>
                    <p class="card__date">${item.date}</p>
                </div>
                <p class="card__price">Q${item.total.toFixed(2)}</p>`
        ordersContainer.append(div);
    })
}
main();