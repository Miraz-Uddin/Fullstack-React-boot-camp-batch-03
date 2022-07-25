// IIFE
(function() {

    const currentYear = document.querySelector('#currentYear');

    const date = new Date();
    currentYear.textContent = date.getFullYear();


})()