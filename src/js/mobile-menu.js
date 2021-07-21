(() => {
    const openMenuBtn = document.querySelector('.open-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.menu');
    const mobileContainer = document.querySelector('.header-container');

    // Кнопки закрытия пунктами меню
    const closeMenuBtnHero = document.querySelector('.site-list__link--hero');
    const closeMenuBtnAbout = document.querySelector('.site-list__link--about');
    const closeMenuBtnAbout1 = document.querySelector('.site-list__link--about-1');
    const closeMenuBtnProducts = document.querySelector('.site-list__link--products');
    const closeMenuBtnContacts = document.querySelector('.site-list__link--contacts');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-hidden');
        mobileContainer.classList.toggle('is-hidden');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };
    
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    // события клик по кнопках меню
    closeMenuBtnHero.addEventListener('click', toggleMenu);
    closeMenuBtnAbout.addEventListener('click', toggleMenu);
    closeMenuBtnAbout1.addEventListener('click', toggleMenu);
    closeMenuBtnProducts.addEventListener('click', toggleMenu);
    closeMenuBtnContacts.addEventListener('click', toggleMenu);

    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
        mobileMenu.classList.remove('is-hidden');

    });
})();