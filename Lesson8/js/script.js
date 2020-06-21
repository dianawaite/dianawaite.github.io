const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


{
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = 
["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = days[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById("date").innerHTML = date;}



//notice
let d = new Date();
let dayOfWeek = d.getDay();

if (dayOfWeek == 5) {
  document.getElementById('notice').style.display = 'block';
} else {
  document.getElementById('notice').style.display = 'none';
}