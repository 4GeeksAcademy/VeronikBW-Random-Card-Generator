import "bootstrap";
import "./style.css";
const inconsCard = ["♦", "♥", "♠", "♣"]
const numbersCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]



let body = document.body
body.style.background = "green"
body.style.height = "100vh"
body.style.display = "flex"
body.style.alignItems = "center"
body.style.justifyContent = "center"
body.style.display = "flex"
body.style.flexDirection = "column"


let root = document.getElementById("root");
root.classList.add("my-card")


let divTop = document.createElement("div")
let iconCard = inconsCard[Math.floor(Math.random() * inconsCard.length)]
root.appendChild(divTop)
divTop.innerHTML = iconCard
divTop.style.fontSize = "140px"
divTop.style.paddingLeft = "20px"


let divMiddle = document.createElement("div")
root.appendChild(divMiddle)
divMiddle.innerHTML = numbersCard[Math.floor(Math.random() * numbersCard.length)]
divMiddle.style.fontSize = "200px"
divMiddle.style.textAlign = "center"


let divBottom = document.createElement("div")
root.appendChild(divBottom)
divBottom.innerHTML = iconCard
divBottom.style.fontSize = "140px"
divBottom.style.textAlign = "start"
divBottom.style.paddingLeft = "20px"
divBottom.style.transform = "rotate(180deg)"


if (iconCard == "♦" || iconCard == "♥") {
    divTop.style.color = "red"
    divBottom.style.color = "red"
}

let botoncito = document.getElementById("refresh-button");
botoncito.style.marginBottom = "50px"
botoncito.addEventListener("click", () => {
    let iconCard = inconsCard[Math.floor(Math.random() * inconsCard.length)]
    divTop.innerHTML = iconCard
    divMiddle.innerHTML = numbersCard[Math.floor(Math.random() * numbersCard.length)];
    divBottom.innerHTML = iconCard;
    if (iconCard == "♦" || iconCard == "♥") {
        divTop.style.color = "red"
        divBottom.style.color = "red"
    }
})