// Function that runs when the "Bigger!" button is clicked
function makeTextBigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}


// Function to update text styles when radio buttons are toggled
function setFancyStyle() {
    let textArea = document.getElementById("userText");
    let fancy = document.getElementById("fancy").checked;

    if (fancy) {
        alert("Fancy Style Activated!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function that uppercases and "Mooifies" the last word of each sentence
function mooify() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}