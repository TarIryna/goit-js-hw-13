import imageCard from '../templates/photo-card.hbs';
import Notiflix from "notiflix";
import refs from './refs';

function renderPhotoes(photoes, total, shown) {
    console.log(shown);
    if (shown >= total) {
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
    }
    else if (shown === 20) {
        Notiflix.Notify.success(`Hooray! We found ${total} images!`);
        const html = imageCard(photoes);
        console.log(refs.gallery);
        refs.gallery.innerHTML = html;
        refs.moreBtn.classList.add('visible');
     }
   else if (shown > 20 && shown < total) {
        const html = imageCard(photoes);
        console.log(refs.gallery);
        refs.gallery.innerHTML = html;
        refs.moreBtn.classList.add('visible');
    }
    else { Notiflix.Notify.failure("No results. Sorry..."); }
}
export default renderPhotoes;