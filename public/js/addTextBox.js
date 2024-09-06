/* Helper functions */
function createTextBox(textBoxName) {
    /* Get parent div */
    let boxList = document.querySelector("[data-list="+ textBoxName);

    /* List number */
    let listNum = document.createElement("h3");
    listNum.textContent = (boxList.children.length - 1).toString() + ".";

    /* Make textbox */
    let textBox = document.createElement("input");
    textBox.setAttribute("placeHolder", textBoxName+"...");
    textBox.setAttribute("data-input", textBoxName);
    textBox.addEventListener("input", addTextBox);

    /* Make remove button */
    let removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("onClick", "removeTextBox(this)");
    removeButton.textContent = "x";

    /* Element Container */
    let elementContainer = document.createElement("div");
    elementContainer.setAttribute("class", "element");

    /* Combine */
    elementContainer.appendChild(listNum);
    elementContainer.appendChild(textBox);
    elementContainer.appendChild(removeButton);

    boxList.insertBefore(elementContainer, boxList.children[boxList.children.length - 1]);
}

function removeTextBox() {
    console.log(this);
}

/* Add text box */
function addTextBox(textBoxName) {
    /* Create new textbox */
    createTextBox(textBoxName);
}

/* On load */

