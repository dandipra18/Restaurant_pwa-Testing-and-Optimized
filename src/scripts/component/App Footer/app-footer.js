import './app-footer.css';

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>
        &copy; Copyright 2024 &dash; <a href="/">Dand's Resto</a> | 
        <a href="" target="_blank" >View on Github</a>
      </p>
      `;
  }
}

customElements.define('app-footer', AppFooter);
