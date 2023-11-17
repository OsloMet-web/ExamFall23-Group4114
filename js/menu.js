// JS kun brukt til menyen
// laget med tidligere js kunnskap og
// https://stackoverflow.com/a/72823459

// putter navbar-buttons fra html i en variabel (første elementet i arrayen)
const navbarbuttons = document.getElementsByClassName("navbar-buttons")[0]

// putter navbar-burgericon i en variabel fra IDen den har
const burgericon = document.getElementById("navbar-burgericon")

// legger til event listener på burger ikonet
// når man trykker på burgeren toggler den navbar-buttons med å kjøre koden i css'en markert med .active
burgericon.addEventListener('click', () => {
    navbarbuttons.classList.toggle('active')
})