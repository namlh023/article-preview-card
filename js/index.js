const SOCIAL_LINKS_HEIGHT = '-6.25rem';
const SOCIAL_LINKS_DISPLAY = '0';
const DESKTOP = 1440;

const share_icon = document.querySelector('.js-share-icon');
const footer = document.querySelector('.js-footer');
const footer_mobile_active = document.querySelector('.js-footer-mobile-active');
const share_icon_mobile_active = document.querySelector('.js-share-icon-mobile-active');

share_icon.addEventListener('click', function() {
    if (window.innerWidth < DESKTOP) {
        footer_mobile_active.style.bottom = SOCIAL_LINKS_DISPLAY;
    }
})

share_icon_mobile_active.addEventListener('click', function() {
    if (window.innerWidth < DESKTOP) {
        footer_mobile_active.style.bottom = SOCIAL_LINKS_HEIGHT;
    }
})
