const menuToggle = document.querySelector('.menu-toggle');
const iconToggle = document.querySelector('.toggle__image');
const navHamburger = document.querySelector('.primary-container');
const menuToggleBackground = document.querySelector('.menu-toggle__background');

menuToggle.addEventListener('click', () => {
    const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
    console.log(isOpened);
    isOpened ? closeMenu() : openMenu();
})

menuToggleBackground.addEventListener('click', () => {
    closeMenu();
});

function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    iconToggle.setAttribute('src', 'images/icon-close-menu.svg');
    navHamburger.setAttribute('data-state', 'opened');
    menuToggleBackground.setAttribute('style', 'display: block');
}

function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    iconToggle.setAttribute('src', 'images/icon-menu.svg');
    navHamburger.setAttribute('data-state', 'closed');
    menuToggleBackground.setAttribute('style', 'display: none');
}