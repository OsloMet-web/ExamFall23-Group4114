// JS only used for the burger menu
// https://www.w3schools.com/js/

// gets navbar-buttons (first element in returned array)
const navbarbuttons = document.getElementsByClassName("navbar-buttons")[0]

// gets navbar-burgericon by its id
const burgericon = document.getElementById("navbar-burgericon")

// adds event listener to the burger icon
// when pressed it will toggle the navbar-buttons by running code in the css labeled with .active
burgericon.addEventListener('click', () => {
    navbarbuttons.classList.toggle('active')
})