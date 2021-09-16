const navbarToggler = document.querySelector('.navbar__toggler');
const navbarNavigationContainer = document.querySelector('.navbar__navigation-container');
const navbarLinks = document.querySelectorAll('.navbar__link');
let navbarOpen = false;

function toggleNavbar() {
  if (navbarOpen) {
    navbarNavigationContainer.classList.remove('show');
  } else {
    navbarNavigationContainer.classList.add('show');
  }
  navbarOpen = !navbarOpen;
  if(sidebarOpen) closeSidebar();
}

function closeNavbar(){
  navbarNavigationContainer.classList.remove('show');
  navbarOpen = false;
}

navbarToggler.addEventListener('click', toggleNavbar);
navbarLinks.forEach(navbarLink => navbarLink.addEventListener('click', closeNavbar));

