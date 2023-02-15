// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryItem = (preview, original, description) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const renderList = img =>
  img.reduce(
    (acc, { preview, original, description }) =>
      acc + createGalleryItem(preview, original, description),
    ''
  );

const gallery = document.querySelector('.gallery');

const insertGalleryItems = string => {
  gallery.insertAdjacentHTML('beforeend', string);
};

const result = renderList(galleryItems);
insertGalleryItems(result);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
