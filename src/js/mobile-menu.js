function MobileMenu() {
  const menuOpenBtnRef = document.querySelector('[data-menu-button-open]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  const openMenu = () => {
    mobileMenuRef.classList.add('is-open');
    body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    mobileMenuRef.classList.remove('is-open');
    body.classList.remove('no-scroll');
  };

  menuOpenBtnRef.addEventListener('click', openMenu);
  mobileMenuRef.addEventListener('click', closeMenu);
}

MobileMenu();
