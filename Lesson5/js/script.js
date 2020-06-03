const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

n = new Date();
y = n.getFullYear();
m = n.getMonth();
d = n.getDate();
a = n.getDay();
document.getElementById("date").innerHTML = a + ", " + d +" " + m + " " + y;