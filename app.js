let independence = new Date('14 aug 2024');
let now = new Date();
let daysLeft = independence - now;
document.write(`<h1>In 14 August there are ${Math.floor(daysLeft / 1000 / 3600 / 24)} days left.`)