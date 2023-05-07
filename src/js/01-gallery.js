// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('ul');

gallery.style.listStyle = 'none';

const addItems = galleryItems
  .map(
    item =>
      `<li class="gallery__item"> 
      <a class="gallery__link"
      href="${item.original}"> 
      <img class="gallery__image"
      src="${item.preview}" 
      alt="${item.description}" /> 
      </a>
      </li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', addItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  scrollZoom: false,
});