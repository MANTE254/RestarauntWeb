document.addEventListener('DOMContentLoaded', function() {
    console.log('Restaurant index page loaded.');
    //get element
    const yearSpan = document.getElementById('year');
    //set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});