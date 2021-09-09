const sidebar = document.querySelector('.sidebar');
const sidebarToggler = document.querySelector('.sidebar__toggler');
const sidebarLinks = document.querySelectorAll('.sidebar__link');
let sidebarOpen = false;

function togglerSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('show');
  } else {
    sidebar.classList.add('show');
  }
  sidebarOpen = !sidebarOpen;
  if(navbarOpen) closeNavbar();
}

function closeSidebar(){
  sidebar.classList.remove('show');
  sidebarOpen = false;
}

sidebarToggler.addEventListener('click', togglerSidebar);
sidebarLinks.forEach(link => link.addEventListener('click', closeSidebar));