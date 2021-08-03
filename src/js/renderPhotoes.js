import imageCard from '../templates/photo-card.hbs';
import Notiflix from "notiflix";
import refs from './refs';

function renderPhotoes(photoes) {
    if (photoes.length > 0) {
        const html = imageCard(photoes);
        refs.gallery.innerHTML = html;
    }
    else { Notiflix.Notify.failure("No results. Sorry..."); }
}
export default renderPhotoes;