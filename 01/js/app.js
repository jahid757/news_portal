// set top date

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

document.getElementById('topDate').innerHTML = `${month} ${day}, ${year}`
