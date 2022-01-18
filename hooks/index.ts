import { useLayoutEffect } from 'react';
export const useFixedNavbar = () => {
  useLayoutEffect(() => {
    window.onscroll = function () {
      scrollNav();
    };

    // Get the navbar
    const navbar = document.getElementById('navbar');

    let sticky = 0;
    if (navbar) {
      sticky = navbar.offsetTop;
    }

    const scrollNav = () => {
      if (!navbar) return;
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };
  }, []);
};
