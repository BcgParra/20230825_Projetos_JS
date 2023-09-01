
const images = [
    { 'id': '1', 'url': './img/chrono.jpg' },
    { 'id': '2', 'url': './img/inuyasha.jpg' },
    { 'id': '3', 'url': './img/ippo.jpg' },
    { 'id': '4', 'url': './img/tenchi.jpg' },
    { 'id': '5', 'url': './img/tenjihotenge.jpg' },
    { 'id': '6', 'url': './img/yuyuhakusho.jpg' }
];

const containerItems = document.querySelector('#container-slide');

const loadImages = (images, container) => {

    images.forEach(image => {
        container.innerHtml +=
            `<div class='item'>
        <img src='${image.url}'>
        <\div>`
    });
};

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const anterior = () =>{
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
};

const proximo = () =>{
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
  
};

document.querySelector('#previous').addEventListener('click', anterior);
document.querySelector('#next').addEventListener('click', proximo);



