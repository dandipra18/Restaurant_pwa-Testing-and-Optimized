import RestSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/Resto List/resto-list';

const Explore = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },
  async afterRender() {
    const rest = await RestSource.getResto();
    const restContainer = document.querySelector('#resto-list');
    rest.forEach((restaurant) => {
      restContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Explore;
