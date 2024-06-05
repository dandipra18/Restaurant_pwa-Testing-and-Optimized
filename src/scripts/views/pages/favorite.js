import FavoriteRestaurantDB from '../../data/fav-rest-db';
import FavRestSearchView from './favorited-restaurants/fav-rest-search-view';
import FavRestShowPresenter from './favorited-restaurants/fav-rest-show-presenter';
import FavRestSearchPresenter from './favorited-restaurants/fav-rest-search-presenter';

const view = new FavRestSearchView();
const Favorite = {
  async render() {
    return view.getTemplate();
  },
  async afterRender() {
    // eslint-disable-next-line no-new
    new FavRestShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    // eslint-disable-next-line no-new
    new FavRestSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
  },
};

export default Favorite;
