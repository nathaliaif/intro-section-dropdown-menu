const menuToggle = document.querySelector('.menu-toggle');
const iconToggle = document.querySelector('.toggle__image');
const navHamburgerContainer = document.querySelector('.primary-container');
const menuToggleBackground = document.querySelector('.menu-toggle__background');
const htmlBody = document.querySelector('body');

const learnMore = document.querySelector('.button-learn');

learnMore.addEventListener('click', () => {
    console.log(window.innerWidth);
})

// ---- Hamburger menu Mobile ----
menuToggle.addEventListener('click', () => {
    const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
    isOpened ? closeMenu() : openMenu();
})

// Open Hamburger menu
function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    iconToggle.setAttribute('src', 'images/icon-close-menu.svg');
    navHamburgerContainer.setAttribute('data-state', 'opened');
    menuToggleBackground.setAttribute('style', 'display: block');
    htmlBody.classList.add('stop-scrolling');
    
    // Open animation
    gsap.fromTo(navHamburgerContainer, {duration: 0.2, x: '100%', ease: 'power3.out'}, {x: 0});
    gsap.from('.primary__item', {duration: 0.5, y: '-2rem', opacity: 0, stagger: 0.15, ease: 'power2.out'});
}

//  Hamburger menu
function closeMenu() {
    closeAllDropdown()
    menuToggle.setAttribute('aria-expanded', 'false');
    iconToggle.setAttribute('src', 'images/icon-menu.svg');
    htmlBody.classList.remove('stop-scrolling');
    
    // Close animation
    gsap.to(navHamburgerContainer, {duration: 0.3, x: '100%', ease: 'power2.out'});
    gsap.to(menuToggleBackground, {duration: 0.3, opacity: 0});
    
    setTimeout(() => {
        menuToggleBackground.setAttribute('style', 'display: none');
        navHamburgerContainer.setAttribute('data-state', 'closed');
    }, 300)
}

// Close the menu when clicked outside of it
menuToggleBackground.addEventListener('click', (event) => {
    closeMenu();
    closeAllDropdown();
});


// ---- Dropdown Menu ----
const dropdownToggleMobile = document.querySelectorAll('.dropdown-toggle');
const dropdownContainerMobile = document.querySelectorAll('.dropdown-nav');
const dropdownArrowIconAll = document.querySelectorAll('.icon-arrow');

dropdownToggleMobile.forEach((item) => {
    item.addEventListener('click', (event) => {
        const dropdownList = document.querySelector(`#dropdown__${item.id}`);
        const dropdownArrowIcon = document.querySelector(`#${item.id} a .icon-arrow`);

        const isOpened = dropdownList.getAttribute('data-state') === 'open';

        if(isOpened) { 
            //Closing dropdown
            gsap.to(dropdownList, {duration: 0.3, y: 0, opacity: 0, ease: 'power2.out'});
            dropdownArrowIcon.setAttribute('src', 'images/icon-arrow-down.svg')

            setTimeout(() => {
                dropdownList.setAttribute('data-state', 'closed');
                item.setAttribute('style', 'opacity: 1');
            }, 300)
        } else { 
            // Opening dropdown
            gsap.fromTo(dropdownList, {duration: 0.4, y: '-2rem', opacity: 0, stagger: 0.15, ease: 'power2.out'}, {y: 0, opacity: 1});
            
            dropdownList.setAttribute('data-state', 'open');
            dropdownArrowIcon.setAttribute('src', 'images/icon-arrow-up.svg')
        }
    })
})

function closeAllDropdown() {
    dropdownContainerMobile.forEach(item => {
        item.setAttribute('data-state', 'closed');
    })

    dropdownArrowIconAll.forEach(item => {
        item.setAttribute('src', 'images/icon-arrow-down.svg');
    })
}

