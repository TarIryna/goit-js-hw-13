import axios from "axios";
import renderPhotoes from './renderPhotoes';


export default class PhotoApiService {
    constructor() {
        this.query = '';
        this.per_page = 40;
             }
    
   async getPhotoes() {
        const params = {
            key: '22723314-dcec60eea06497913e1a2cdb4',
            q: this.query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: this.per_page,
        };
    
       const URL = 'https://pixabay.com/api/';
       const responce = await axios.get(URL, { params }).then(responce => responce.data);
       renderPhotoes(responce.hits, responce.totalHits, this.per_page);
       this.per_page += 20;
       
         }
    
    }

