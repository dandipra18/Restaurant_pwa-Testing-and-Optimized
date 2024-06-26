import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../../src/scripts/data/fav-rest-db';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantDB,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenterWithRestaurant };
