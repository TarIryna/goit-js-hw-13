import axios from "axios";
import createResults from "./create-results";
import refs from './refs';
// import data from './data.json';

async function getPhotoes(query) {
  const params = {
    key: '22723314-dcec60eea06497913e1a2cdb4',
    q: refs.query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 20,
  };

  const URL = 'https://pixabay.com/api/';
  params.q = refs.query;
  const responce = await axios.get(URL, { params }).then(responce => responce.data);
  
  createResults(responce);
}


// async function getPhotoes(query) {
//   try {
//     const response = await axios.get(URL).then(responce => console.log(response));
//   } catch (error) {
//     console.error(error);
//   }
// } 

export default getPhotoes;

// const async function ()
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });