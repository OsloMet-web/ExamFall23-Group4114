// JS kun brukt til menyen
// laget med tidligere js kunnskap og
// https://stackoverflow.com/a/72823459
// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

// putter navbar-buttons fra html i en variabel (første elementet i arrayen)
const navbarbuttons = document.getElementsByClassName("navbar-buttons")[0]

// putter navbar-burgericon i en variabel (første elementet i arrayen)
const burgericon = document.getElementsByClassName("navbar-burgericon")[0]

// legger til event listener på burger ikonet
// når man trykker på burgeren toggler den navbar-buttons med å kjøre koden i css'en markert med .active
burgericon.addEventListener('click', () => {
    navbarbuttons.classList.toggle('active')
})