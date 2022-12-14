// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const containerGallery = document.querySelector('.gallery');

function addGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<a class = "gallery__item" href = "${original}">
    <img class = "gallery__image" src="${preview}" alt="${description}"/>
    </a>`
    )
    .join('');
}

containerGallery.insertAdjacentHTML('beforeend', addGallery(galleryItems));
console.log(galleryItems);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
