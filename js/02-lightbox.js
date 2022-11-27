import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgContainerRef = document.querySelector('.gallery');
const imagesMarkup = makeMarkup(galleryItems);


imgContainerRef.insertAdjacentHTML('beforeend', imagesMarkup);

function makeMarkup(obj) {
    
    return obj.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
        </a>
        `
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
});


