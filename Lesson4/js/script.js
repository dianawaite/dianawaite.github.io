const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}