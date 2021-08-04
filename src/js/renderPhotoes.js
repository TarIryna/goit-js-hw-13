import imageCard from '../templates/photo-card.hbs';
import Notiflix from "notiflix";
import refs from './refs';

function renderPhotoes(photoes) {
    console.log('renderPhotoes');
    if (photoes.length > 0) {
        const html = imageCard(photoes);
        console.log(refs.gallery);
        refs.gallery.innerHTML = html;
        refs.moreBtn.classList.add('visible');
    }
    else { Notiflix.Notify.failure("No results. Sorry..."); }
}
export default renderPhotoes;