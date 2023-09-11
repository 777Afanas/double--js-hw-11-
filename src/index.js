import photosTpl from "./templates/hits.hbs";
import NewsApiService from "./js/news-service";

const refs = {
  searchForm: document.querySelector('.search-form'),
  photosContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};
const newsApiService = new NewsApiService();

console.log(newsApiService); 

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

// searchForm.addEventListener('submit', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

function onSearch(e) {
    e.preventDefault();

    clearPhotosContainer();
    newsApiService.query = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchPhotos().then(appendHitsMarkup);
}

function onLoadMore() {
    newsApiService.fetchPhotos().then(appendHitsMarkup); 
}

function appendHitsMarkup(hits) {
  refs.photosContainer.insertAdjacentHTML('beforeend', photosTpl(hits));
}

function clearPhotosContainer() {
  refs.photosContainer.innerHTML = '';
}

// function fetchImages() {
//   return fetch(
//     'https://pixabay.com/api/?key=39342201-f813eddd1adb93dcbf05db88a&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//       }
//       console.log(response.json());
//     return response.json();
//   });
// }



// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
// //           </li>

// <div class="photo-card">
//   <img src="" alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//     </p>
//   </div>
// </div>;

//       `;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }