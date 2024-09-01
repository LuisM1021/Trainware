import { renderDetail, addToCart } from "../Products/index.js";
import { renderPrice } from "../utils/index.js";

const cart = document.getElementById('addToCart');

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

export { Product }