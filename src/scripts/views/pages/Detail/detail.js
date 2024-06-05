import '../../../component/Resto Detail/resto-detail';
import '../../../component/Resto Review/resto-review';
import UrlParser from '../../../routes/url-parser';
import RestaurantSource from '../../../data/restaurant-source';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../../templates/template-creator';
import FavBtnInitiator from '../../../utils/favorite-btn-initiator';
import FavRestaurantDB from '../../../data/fav-rest-db';

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);
    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;
    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });
    FavBtnInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavRestaurantDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
