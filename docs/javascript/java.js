

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the 'active' class
    hamburger.classList.toggle('active') ;
});



