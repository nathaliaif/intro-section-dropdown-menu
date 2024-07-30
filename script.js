const menuToggle = document.querySelector('.menu-toggle');
const iconToggle = document.querySelector('.toggle__image');
const navHamburger = document.querySelector('.primary-container');
const menuToggleBackground = document.querySelector('.menu-toggle__background');

menuToggle.addEventListener('click', () => {
    const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
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
    
    gsap.fromTo(navHamburger, {duration: 0.2, x: '100%', ease: 'power3.out'}, {x: 0});
    gsap.from('.primary-item', {duration: 0.5, y: '-2rem', opacity: 0, stagger: 0.15, ease: 'power2.out'});
}

function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    iconToggle.setAttribute('src', 'images/icon-menu.svg');
    
    gsap.to(navHamburger, {duration: 0.3, x: '100%', ease: 'power2.out'});
    gsap.to(menuToggleBackground, {duration: 0.3, opacity: 0});
    
    setTimeout(() => {
        menuToggleBackground.setAttribute('style', 'display: none');
        navHamburger.setAttribute('data-state', 'closed');
    }, 300)
}

// ---- Dropdown Menu ----
const dropdownContainer = document.querySelector('.dropdown-nav');
