const products = [
    {
        "id": 1,
        "nombre": "Zapatos Running Ultra",
        "descripcion": "Zapatos deportivos ligeros de Trainware para correr largas distancias.",
        "categoria": "zapatos",
        "precio": 749.99,
        "imagen": "../assets/images/shoes1.jpg"
    },
    {
        "id": 2,
        "nombre": "Calzado de Entrenamiento",
        "descripcion": "Calzado para entrenamientos intensos en el gimnasio de Trainware.",
        "categoria": "zapatos",
        "precio": 599.50,
        "imagen": "../assets/images/shoes2.jpg"
    },
    {
        "id": 3,
        "nombre": "Zapatos de Fútbol",
        "descripcion": "Zapatos diseñados para jugar fútbol en césped artificial, marca Trainware.",
        "categoria": "zapatos",
        "precio": 849.00,
        "imagen": "../assets/images/shoes3.jpg"
    },
    {
        "id": 4,
        "nombre": "Calzado Trail Running",
        "descripcion": "Calzado resistente de Trainware para correr en terrenos accidentados.",
        "categoria": "zapatos",
        "precio": 899.99,
        "imagen": "../assets/images/shoes4.jpg"
    },
    {
        "id": 5,
        "nombre": "Zapatos de Baloncesto",
        "descripcion": "Zapatos con soporte adicional de Trainware para jugar baloncesto.",
        "categoria": "zapatos",
        "precio": 950.00,
        "imagen": "../assets/images/shoes5.jpg"
    },
    {
        "id": 6,
        "nombre": "Calzado de Skate",
        "descripcion": "Calzado resistente de Trainware para la práctica de skateboarding.",
        "categoria": "zapatos",
        "precio": 699.75,
        "imagen": "../assets/images/shoes6.jpg"
    },
    {
        "id": 7,
        "nombre": "Zapatos Casual Sport",
        "descripcion": "Zapatos deportivos casuales de Trainware para uso diario.",
        "categoria": "zapatos",
        "precio": 499.90,
        "imagen": "../assets/images/shoes6.jpg"
    },
    {
        "id": 8,
        "nombre": "Calzado de Senderismo",
        "descripcion": "Calzado resistente y cómodo de Trainware para senderismo.",
        "categoria": "zapatos",
        "precio": 799.00,
        "imagen": "../assets/images/shoes8.jpg"
    },
    {
        "id": 9,
        "nombre": "Zapatos de CrossFit",
        "descripcion": "Zapatos ideales de Trainware para entrenamientos de CrossFit.",
        "categoria": "zapatos",
        "precio": 820.00,
        "imagen": "../assets/images/shoes9.jpg"
    },
    {
        "id": 10,
        "nombre": "Calzado Running Elite",
        "descripcion": "Calzado deportivo de alta gama de Trainware para corredores exigentes.",
        "categoria": "zapatos",
        "precio": 1100.00,
        "imagen": "../assets/images/shoes10.jpg"
    },
    {
        "id": 11,
        "nombre": "Playera Performance",
        "descripcion": "Playera deportiva de alto rendimiento de Trainware, ideal para entrenamiento.",
        "categoria": "playeras",
        "precio": 299.00,
        "imagen": "../assets/images/shirt1.jpg"
    },
    {
        "id": 12,
        "nombre": "Playera Running",
        "descripcion": "Playera ligera de Trainware para corredores, con tecnología de absorción de sudor.",
        "categoria": "playeras",
        "precio": 349.50,
        "imagen": "../assets/images/shirt2.jpg"
    },
    {
        "id": 13,
        "nombre": "Playera Gym Fit",
        "descripcion": "Playera de entrenamiento de Trainware, adecuada para el gimnasio y actividades físicas intensas.",
        "categoria": "playeras",
        "precio": 279.75,
        "imagen": "../assets/images/shirt3.jpg"
    },
    {
        "id": 14,
        "nombre": "Playera Casual Sport",
        "descripcion": "Playera casual deportiva de Trainware para el día a día y actividades ligeras.",
        "categoria": "playeras",
        "precio": 249.90,
        "imagen": "../assets/images/shirt4.jpg"
    },
    {
        "id": 15,
        "nombre": "Playera CrossFit",
        "descripcion": "Playera resistente de Trainware para entrenamientos de CrossFit.",
        "categoria": "playeras",
        "precio": 329.00,
        "imagen": "../assets/images/shirt5.jpg"
    },
    {
        "id": 16,
        "nombre": "Playera Running Elite",
        "descripcion": "Playera de alta gama de Trainware para corredores profesionales.",
        "categoria": "playeras",
        "precio": 399.00,
        "imagen": "../assets/images/shirt6.jpg"
    },
    {
        "id": 17,
        "nombre": "Playera Trail Running",
        "descripcion": "Playera para trail running de Trainware, diseñada para terrenos difíciles.",
        "categoria": "playeras",
        "precio": 359.75,
        "imagen": "../assets/images/shirt7.jpg"
    },
    {
        "id": 18,
        "nombre": "Playera Basketball",
        "descripcion": "Playera de entrenamiento de baloncesto de Trainware, cómoda y duradera.",
        "categoria": "playeras",
        "precio": 289.00,
        "imagen": "../assets/images/shirt8.jpg"
    },
    {
        "id": 19,
        "nombre": "Playera Yoga",
        "descripcion": "Playera de yoga de Trainware, hecha con materiales suaves y elásticos.",
        "categoria": "playeras",
        "precio": 269.50,
        "imagen": "../assets/images/shirt9.jpg"
    },
    {
        "id": 20,
        "nombre": "Playera Sportswear",
        "descripcion": "Playera versátil de Trainware para diversas actividades deportivas.",
        "categoria": "playeras",
        "precio": 310.00,
        "imagen": "../assets/images/shirt10.jpg"
    },
    {
        "id": 21,
        "nombre": "Pantaloneta Running",
        "descripcion": "Pantaloneta deportiva de Trainware para correr, con diseño ligero y cómodo.",
        "categoria": "pantalonetas",
        "precio": 399.00,
        "imagen": "../assets/images/short1.jpg"
    },
    {
        "id": 22,
        "nombre": "Pantaloneta Gym",
        "descripcion": "Pantaloneta para entrenamiento de Trainware, ideal para el gimnasio.",
        "categoria": "pantalonetas",
        "precio": 359.75,
        "imagen": "../assets/images/short2.jpg"
    },
    {
        "id": 23,
        "nombre": "Pantaloneta Soccer",
        "descripcion": "Pantaloneta de fútbol de Trainware, diseñada para máximo rendimiento en el campo.",
        "categoria": "pantalonetas",
        "precio": 379.90,
        "imagen": "../assets/images/short3.jpg"
    },
    {
        "id": 24,
        "nombre": "Pantaloneta CrossFit",
        "descripcion": "Pantaloneta resistente de Trainware para entrenamientos intensos de CrossFit.",
        "categoria": "pantalonetas",
        "precio": 389.00,
        "imagen": "../assets/images/short4.jpg"
    },
    {
        "id": 25,
        "nombre": "Pantaloneta Casual",
        "descripcion": "Pantaloneta casual de Trainware, adecuada para actividades deportivas y recreativas.",
        "categoria": "pantalonetas",
        "precio": 349.00,
        "imagen": "../assets/images/short5.jpg"
    },
    {
        "id": 26,
        "nombre": "Pants Running",
        "descripcion": "Pants deportivos de Trainware para correr, con tecnología de absorción de sudor.",
        "categoria": "pants",
        "precio": 699.00,
        "imagen": "../assets/images/pants1.jpg"
    },
    {
        "id": 27,
        "nombre": "Pants Gym",
        "descripcion": "Pants cómodos de Trainware para el gimnasio y entrenamientos generales.",
        "categoria": "pants",
        "precio": 649.75,
        "imagen": "../assets/images/pants2.jpg"
    },
    {
        "id": 28,
        "nombre": "Pants CrossFit",
        "descripcion": "Pants de entrenamiento de Trainware para CrossFit, diseñados para máxima movilidad.",
        "categoria": "pants",
        "precio": 679.00,
        "imagen": "../assets/images/pants3.jpg"
    },
    {
        "id": 29,
        "nombre": "Pants Trail",
        "descripcion": "Pants de Trail Running de Trainware, ideales para correr en terrenos difíciles.",
        "categoria": "pants",
        "precio": 699.00,
        "imagen": "../assets/images/pants4.jpg"
    },
    {
        "id": 30,
        "nombre": "Pants Casual",
        "descripcion": "Pants deportivos casuales de Trainware para uso diario y actividades ligeras.",
        "categoria": "pants",
        "precio": 629.00,
        "imagen": "../assets/images/pants5.jpg"
    }
]



function initializeStorage(){
    if(!localStorage.getItem('products')){
        setItem('products', products);
    }
    if(!localStorage.getItem('cart')){
        setItem('cart', []);
    }
    if(!localStorage.getItem('orders')){
        setItem('orders', []);
    }
    if(!localStorage.getItem('orderDetail')){
        setItem('orderDetail', []);
    }
}

function getItem(item){
    return JSON.parse(localStorage.getItem(item));
}
function setItem(item, data){
    localStorage.setItem(item, JSON.stringify(data));
}

export {initializeStorage, getItem, setItem }