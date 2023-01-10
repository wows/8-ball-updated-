// JavaScript 
let answerE1 = document.getElementById("ans-out");
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
    let randNum = Math.random();
    let question = document.getElementById("imp").value.toLowerCase();

if (question === "does a magic 8 ball actually work?") {
    answerE1.innerHTML = "Do not doubt me."
    console.log("Do not doubt me");
} else if (question === "Is java script awesome?") {
    answerE1.innerHTML = "Of course!"
} else if (question === "") {
    answerE1.innerHTML = "Please ask a question."
} else if (question === "Do you use magic?") {
    answerE1.innerHTML =  "Maybe."
} else if (randNum < 0.2) {
    answerE1.innerHTML = "Without a doubt."
} else if (randNum < 0.4) {
    answerE1.innerHTML = "As I see it yes."
} else if (randNum < 0.6) {
    answerE1.innerHTML = "Concentrate and ask again."
} else if (randNum < 0.8) {
    answerE1.innerHTML = "Don't count on it"
} else {
    answerE1.innerHTML = "Outlook not so good."
}
}
