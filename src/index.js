import './sass/main.scss';
import PhotoApiService from './js/api-service';
import refs from './js/refs';

const PAS = new PhotoApiService();



refs.searchBtn.addEventListener('click', onSearchBtn);
refs.moreBtn.addEventListener('click', onMoreBtn);
// refs.gallery.addEventListener('click', LigthboxService.onImageListClick);

    function onSearchBtn(e) {
    e.preventDefault()
        if (refs.input.value.trim()) {
            if (PAS.query !== refs.input.value.trim()) {
                PAS.page = 1;
                PAS.per_page = 40;
                PAS.query = refs.input.value.trim();
                PAS.getPhotoes(PAS.query);
            }
    }
    return;
}
   

function onMoreBtn(e) {
   PAS.getPhotoes();
}