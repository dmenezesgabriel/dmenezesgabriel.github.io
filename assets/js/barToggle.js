function toggleNav() {
  const sidebar = document.querySelector('#sidebar');
  const main = document.querySelector('#main');
  const sidebarCollapse = document.querySelector('#sidebarCollapse');


  sidebar.classList.toggle('active');
  main.classList.toggle('full-screen');
  sidebarCollapse.classList.toggle('active');
}

function closeNav() {
  const sidebar = document.querySelector('#sidebar');
  const main = document.querySelector('#main');
  const sidebarCollapse = document.querySelector('#sidebarCollapse');

  sidebar.classList.toggle('active');
  main.classList.toggle('full-screen');
  sidebarCollapse.classList.toggle('active');
}

