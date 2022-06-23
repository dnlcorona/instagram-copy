const darkMode = document.querySelector('#dark-mode'),
      lightMode = document.querySelector('#light-mode'),
      toogleMode = document.querySelector('.dark-light'),
      body = document.querySelector('body'),
      logo = document.querySelector('.instagram-logo')

toogleMode.addEventListener('click', () => {
  body.classList.toggle('active');
  let active = body.classList.contains('active');
  if (active) {
    darkMode.style.display= 'none';
    lightMode.style.display= 'block';
    logo.src = './images/instagram-logo-white.png';
  } else {
    darkMode.style.display= 'block';
    lightMode.style.display= 'none';
    logo.src = './images/instagram-logo.png';
  }
})


