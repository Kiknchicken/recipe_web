/* Helper functions */

/* AddTextBox */
function addTextBox(e) {
    let textBoxName = e.target.getAttribute("data-input");
    let boxList = document.querySelector("[data-list="+ textBoxName);

    if (e.target.value != "") {
        if (textBoxFlag == 1) {
            const textBox = document.createElement("input");
            textBox.setAttribute("placeHolder", textBoxName+"...");
            textBox.setAttribute("data-input", textBoxName);
            textBox.setAttribute("id", textBoxId);
            textBox.addEventListener("input", addTextBox);

            boxList.appendChild(textBox);

            textBoxFlag = 0;
            textBoxId += 1;
        }
        
    } else {
        console.log("bye");
        /* Remove textBox */
        boxList.remove(document.getElementById(e.target.id));

        textBoxFlag = 1;
    }
}

/* Add event listeners to inputs */
const inputObjects = document.querySelectorAll("[data-input]");

for (let input of inputObjects) {
    input.addEventListener("input", addTextBox);
}

/* Init for text box */
let textBoxFlag = 1;
let textBoxId = 1;

