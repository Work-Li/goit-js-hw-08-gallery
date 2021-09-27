const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const imageEl = document.querySelector('.lightbox__image');
const modalCloseBtnEl = document.querySelector('[data-action="close-lightbox"]');
const overlayEl = document.querySelector('.lightbox__overlay');



const gallery = galleryItems.reduce((acc, image) => {
  return acc + `<li class="gallery__item">
  <a class="gallery__link" href=${image.original}>
    <img class="gallery__image" src=${image.preview} data-source=${image.original}
      alt=${image.description}/>
  </a>
</li>`
}, ""); 

galleryEl.innerHTML = gallery;

galleryEl.addEventListener('click', onClickImage);

function onClickImage (event) {
  event.preventDefault();
  openModal ();
  changeAttributeValue (event.target.dataset.source, event.target.alt);
}

function openModal () {
  modalEl.classList.add('is-open');
  modalCloseBtnEl.addEventListener('click', closeModal);
  overlayEl.addEventListener('click', closeModal);
  window.addEventListener('keydown', closeModalByEsc);
}
function closeModal () {
  modalEl.classList.remove('is-open');
  imageEl.src = " ";
  imageEl.alt = " ";
  removeModalListener();
}

function closeModalByEsc (event) {
  if (event.code === 'Escape') {
  closeModal ();
}
};


function removeModalListener () {
  modalCloseBtnEl.removeEventListener('click', closeModal);
  overlayEl.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', closeModalByEsc);

};


function changeAttributeValue (src, alt) {
  imageEl.src = src;
  imageEl.alt = alt;
};
