import refs from './refs';
import getPhotoes from './getphotoes';
import createResults from './create-results';



function onSearchBtn(e) {
    e.preventDefault()
    if (refs.input.value.trim()) {
        refs.query = refs.input.value.trim();
        getPhotoes(refs.query);
    }
    return;
}
export default onSearchBtn;