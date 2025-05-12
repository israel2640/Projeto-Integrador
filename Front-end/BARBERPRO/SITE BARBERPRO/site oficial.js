document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('sidebarOverlay').style.display = 'block';
});
