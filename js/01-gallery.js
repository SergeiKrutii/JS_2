import { galleryItems } from './gallery-items.js';
// Change code below this line
const imgContainerRef = document.querySelector('.gallery');
const imagesMarkup = makeMarkup(galleryItems);

imgContainerRef.insertAdjacentHTML('beforeend', imagesMarkup);
imgContainerRef.addEventListener('click', onShowModal);


function makeMarkup(obj) {
    return obj.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>  
        `
    }).join('');
}


function onShowModal(e) {
    e.preventDefault();
    const dataValue = e.target.dataset.source;

    if (e.target.tagName === 'IMG') {
        const instance = basicLightbox.create(`
        <img src="${dataValue}" width="800" height="600">
    `)
    
        instance.show()
        
        if (basicLightbox.visible()) {
            imgContainerRef.addEventListener('keydown', (e) => {
                if (e.code === 'Escape') {
                    instance.close();
                    }
                })
            }   
    }
};



    

