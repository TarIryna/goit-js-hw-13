import refs from './refs';
import './search';
import renderPhotoes from './renderPhotoes';

function createResults(query) {
    console.log(query);
    refs.totalHits = query.totalHits;
    refs.photoes = query.hits;
    console.log(refs.photoes);
    renderPhotoes(refs.photoes);
}


export default createResults;