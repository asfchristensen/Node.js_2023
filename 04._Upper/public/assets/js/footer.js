// task display the year and a copyright symbol in the footer

const footerData = document.getElementById('copyright-year');
const year = new Date().getFullYear();
footerData.innerText = `© ${year}`