export default class LigthboxService {
  constructor() { }
  onImageListClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
      return;
    }
    const currentImage = e.target.dataset.source;
    const currentAlt = e.target.alt;
    refs.lightboxImage.src = currentImage;
    refs.lightboxImage.alt = currentAlt;
    refs.lightbox.classList.add('is-open');
    refs.overlay.addEventListener('click', closeLightbox);
    closeButton.addEventListener('click', closeLightbox);
    window.addEventListener('keydown', onEscape);
  }


  closeLightbox(e) {
    if (!lightbox.classList.contains('is-open')) {
      return;
    }
    if (!overlay) {
      return;
    }
    lightbox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }

  onEscape(e) {
    if (e.code === "Escape") {
      closeLightbox();
    }


  }
}