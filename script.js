const buttonContainer = document.querySelector(".button-container");
console.log(buttonContainer);

function changeBGGreen(event) {
    if (event.target.tagName === "BUTTON") {
        event, target.classList.add("greenBG");
    };
};

buttonContainer.addEventListener("mouseover", changeBGGreen);


function changeTextColor(event) {
    if (event.target.tagName === "BUTTON") {
        let myColor = event.target.textContent;
        event.target.style.color = myColor;
        // event.target.classList.add(myColor);
    };
};

buttonContainer.addEventListener("click", changeTextColor);

let buttonRef = document.querySelector("#clickMe");

function addNewbuttonAndPara() {
    let newButton = document.createElement("button");
    let newPara = document.createElement("p");
    newButton.textContent = "purple";
    // document.body.appendChild(newPara);
    document.body.appendChild(newButton);
    // newButton.addEventListener("click", changeBGGreen);
    // newButton.addEventListener("click", changeTextColor);
    // buttonContainer.appendChild(newButton);

};

buttonRef.addEventListener("click", addNewbuttonAndPara);

