import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Classic", "Fiction", "Horror", "Fantastic"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
