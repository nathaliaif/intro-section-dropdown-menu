const menuToggle = document.querySelector('.menu-toggle');
const iconToggle = document.querySelector('.toggle__image');
const navHamburger = document.querySelector('.primary-container');
const menuToggleBackground = document.querySelector('.menu-toggle__background');

// ---- Hamburger menu Mobile ----
menuToggle.addEventListener('click', () => {
    const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
    isOpened ? closeMenu() : openMenu();
})

function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    iconToggle.setAttribute('src', 'images/icon-close-menu.svg');
    navHamburger.setAttribute('data-state', 'opened');
    menuToggleBackground.setAttribute('style', 'display: block');
    
    // Open animation
    gsap.fromTo(navHamburger, {duration: 0.2, x: '100%', ease: 'power3.out'}, {x: 0});
    gsap.from('.primary-item', {duration: 0.5, y: '-2rem', opacity: 0, stagger: 0.15, ease: 'power2.out'});
}

function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    iconToggle.setAttribute('src', 'images/icon-menu.svg');
    
    // Close animation
    gsap.to(navHamburger, {duration: 0.3, x: '100%', ease: 'power2.out'});
    gsap.to(menuToggleBackground, {duration: 0.3, opacity: 0});
    
    setTimeout(() => {
        menuToggleBackground.setAttribute('style', 'display: none');
        navHamburger.setAttribute('data-state', 'closed');
    }, 300)
}

// Close the menu when clicked outside it
menuToggleBackground.addEventListener('click', (event) => {
    closeMenu();
});

// ---- Dropdown Menu ----
const dropdownLink = document.querySelectorAll('.dropdown-link');

dropdownLink.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Getting the dropdown link that's been clicked
        const dropdownList = document.querySelector(`#dropdown__${item.id}`);
        // Getting dropdown state 
        const isOpened = dropdownList.getAttribute('data-state') === 'open';

        if(isOpened) {
            gsap.to(dropdownList, {duration: 0.3, y: 0, opacity: 0, stagger: 0.15, ease: 'power2.out'});
            
            setTimeout(() => {
                dropdownList.setAttribute('data-state', 'closed')
                item.setAttribute('style', 'opacity: 1');
            }, 300)
        } else { 
            gsap.fromTo(dropdownList, {duration: 0.4, y: '-2rem', opacity: 0, stagger: 0.15, ease: 'power2.out'}, {y: 0, opacity: 1});
            dropdownList.setAttribute('data-state', 'open');
        }
    })
})