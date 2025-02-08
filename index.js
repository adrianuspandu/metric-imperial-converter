/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthParagraph = document.getElementById("length-paragraph")
const volumeParagraph = document.getElementById("volume-paragraph")
const massParagraph = document.getElementById("mass-paragraph")

let input = 0

convertBtn.addEventListener("click", function() {
    console.log("convert button clicked")
    input = inputEl.value
    renderLength(input)
    renderVolume(input)
    renderMass(input)
})

function renderLength(inputValue) {
    let metersToFeet = inputValue * 3.28084
    let feetToMeters = inputValue / 3.28084
    lengthParagraph.textContent = `${inputValue} meters = ${metersToFeet.toFixed(3)} feet  |  ${inputValue} feet = ${feetToMeters.toFixed(3)} meters`
}

function renderVolume(inputValue) {
    let litersToGallons = inputValue * 0.264172
    let gallonsToLiters = inputValue / 0.264172
    volumeParagraph.textContent = `${inputValue} liters = ${litersToGallons.toFixed(3)} gallons  |  ${inputValue} gallons = ${gallonsToLiters.toFixed(3)} liters`
}

function renderMass(inputValue) {
    let kilosToPounds = inputValue * 2.20462
    let poundsToKilos = inputValue / 2.20462
    massParagraph.textContent = `${inputValue} kilos = ${kilosToPounds.toFixed(3)} pounds  |  ${inputValue} pounds = ${poundsToKilos.toFixed(3)} kilos`
}