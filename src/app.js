import "bootstrap";
import "./style.css";
const inconsCard =  ["♦", "♥", "♠", "♣"]
const numbersCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


let body = document.body
body.style.background = "green"
body.style.height = "100vh"
body.style.display = "flex"
body.style.alignItems = "center"
body.style.justifyContent = "center"

let root = document.getElementById("root");
root.classList.add("my-card")

let divTop = document.createElement("div")
let iconCard = inconsCard[Math.floor(Math.random()*inconsCard.length)]
root.appendChild(divTop)
divTop.innerHTML = iconCard
divTop.style.fontSize = "50px"


let divMiddle = document.createElement("div")
root.appendChild(divMiddle)
divMiddle.innerHTML =  numbersCard[Math.floor(Math.random()*numbersCard.length)]


let divBottom = document.createElement("div")
root.appendChild(divBottom)
divBottom.innerHTML = iconCard

