
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '39342201-f813eddd1adb93dcbf05db88a';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhotos() {
    console.log(this.searchQuery);
    const url = `${BASE_URL}/?key=${API_KEY}&
    q=${this.searchQuery}&image_type=photo&orientation=horizontal&
    safesearch=true&per_page=3&page=${this.page}`;

    return fetch(url)
      .then(response => 
        response.json())
      .then(({hits})=> {         
        this.incrementPage();
          console.log(hits);
        return hits;
      });

    // .then(response => {
    //   // if (!response.ok) {
    //   //   throw new Error(response.status);
    //   // }
    //   console.log(response);
    //   response.json();
    // })
    // .then(data => {
    //   console.log(data);
    //   this.incrementPage();
    // });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}