document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menu = document.getElementById('menu');
  const header = document.getElementById('header');

  hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const playButton = document.getElementById('playButton'); // oynatma butonu
  const modal = document.getElementById('modal'); // videoyu çevreleyen şey yani bütün sayfa (browserdan incele kısmından bak)
  const closeButton = document.getElementById('closeButton'); // kapatmak için olan "x"
  const video = document.getElementById('video'); // video iframe

  playButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    video.src = "https://www.youtube.com/embed/8sXRyHI3bLw?autoplay=1";
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    video.src = "";
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
      video.src = "";
    }
  });
});
