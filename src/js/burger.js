const burgerMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');


const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    burgerMenu.classList.toggle('is-open');

    const scrollLockMethod =
        !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
};

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);


    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    burgerMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    });

// current page

const menuLinks = document.querySelectorAll('.mobile-menu__link')

for (const link of menuLinks) {
    if (link.href === window.location.href) {
        link.parentNode.classList.add('current')
        for (const child of link.children) {
            child.classList.add('current')
        }
    }
}