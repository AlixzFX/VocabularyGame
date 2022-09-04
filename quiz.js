const themesWordsAnswers = {"set1" : {
    "chat" : "cat",
    "chien" : "dog",
    "tasse" : "cup",
},
"set2" : {
    "maison" : "house",
    "je" : "I",
    "parler" : "to speak"
}}
const themes = ["set1", "set2"]; //à remplacer par un getElementById
const score = {}
const wordsAndAnswers = [];
for (let theme of themes) {
    for (let i = 0; i < Object.keys(themesWordsAnswers[theme]).length; i++) {
        wordsAndAnswers.push([Object.keys(themesWordsAnswers[theme])[i], Object.values(themesWordsAnswers[theme])[i]]);
    }
}
wordsAndAnswers.sort(()=> Math.random() - 0.5);

const wordDisplayed = document.getElementById("word");
let wordRank = 0
wordDisplayed.innerText = wordsAndAnswers[wordRank][0];

const scorePanel = document.getElementsByClassName("score")[0];
const gameContainer = document.getElementsByClassName("game-container")[0];
const skipButton = document.getElementsByClassName("skip")[0];
skipButton.addEventListener("click", function() {
    skipWord();
});

const correctSFX = new Audio("correct.wav")
const wrongSFX = new Audio("wrong.wav")

const inputs = document.querySelectorAll(".game-container input");

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", checkAnswer);
});

async function checkAnswer(e) {
    if (e.key === "Enter") {
        const input = e.target;
        const userAnswer = input.value;
        if (wordsAndAnswers[wordRank][1] === userAnswer) {
            input.value = "";
            input.disabled = true;
            correctSFX.play();
            if (skipButton.style.visibility !== "hidden") {
                skipButton.classList.remove("hideSkipButton");
                skipButton.classList.add("hideSkipButton");
            }
            input.classList.add("correct");
            await new Promise(r => setTimeout(r, 1000));
            if (skipButton.style.visibility !== "hidden") {
                skipButton.style.visibility = "hidden";
            }
            score[wordsAndAnswers[wordRank][0]] = [wordsAndAnswers[wordRank][1], userAnswer];
            if (wordsAndAnswers.length > wordRank + 1) {
                wordRank++;
                document.getElementById("word").innerText = wordsAndAnswers[wordRank][0];
                input.classList.remove("correct");
                input.disabled = false;
                input.focus();
            } else {
                gameContainer.style.display = "none";
                gameScore();
            }
        } else if (!score[wordsAndAnswers[wordRank][0]]) {
            input.value = "";
            input.disabled = true;
            input.classList.add("wrong");
            skipButton.classList.add("showSkipButton");
            if (skipButton.style.visibility == "hidden") {
                skipButton.classList.remove("hideSkipButton");
                skipButton.style.visibility = "visible";
                skipButton.classList.add("showSkipButton");
            }
            wrongSFX.play();
            await new Promise(r => setTimeout(r, 1000));
            score[wordsAndAnswers[wordRank][0]] = false
            input.classList.remove("wrong");
            skipButton.classList.remove("showSkipButton");
            input.disabled = false;
            input.focus();
        } else {
            input.value = "";
            input.disabled = true;
            input.classList.add("wrong");
            wrongSFX.play();
            await new Promise(r => setTimeout(r, 1000));
            score[wordsAndAnswers[wordRank][0]] = false;
            input.classList.remove("wrong");
            input.disabled = false;
            input.focus();
        }
    }
}

async function skipWord() {
    const input = document.getElementsByClassName("answer")[0];
    const userAnswer = input.value;
    input.value = "";
    input.disabled = true;
    wrongSFX.play();
    if (skipButton.style.visibility !== "hidden") {
        skipButton.classList.remove("hideSkipButton");
        skipButton.classList.add("hideSkipButton");
    }
    input.classList.add("wrong");
    await new Promise(r => setTimeout(r, 1000));
    if (skipButton.style.visibility !== "hidden") {
        skipButton.style.visibility = "hidden";
    }
    score[wordsAndAnswers[wordRank][0]] = false;
    if (wordsAndAnswers.length > wordRank + 1) {
        score[wordsAndAnswers[wordRank][0]] = false;
        wordRank++;
        document.getElementById("word").innerText = wordsAndAnswers[wordRank][0];
        input.classList.remove("wrong");
        input.disabled = false;
        input.focus();
    } else {
        gameContainer.style.display = "none";
    }
}

function gameScore() {
    let point = 0;
    for (let i = 0; i < Object.keys(score).length; i++) {
        if (score[Object.keys(score)[i]] !== false) {
            point++;
        }
    }
    let note = document.createElement("h1");
    note.innerHTML = point.toString() + "/" + (Object.keys(score).length).toString();
    let noteToMoveTo = scorePanel;
    noteToMoveTo.insertBefore(note, noteToMoveTo.children[0]);
    for (let i = 0; i < Object.keys(score).length; i++) {
        if (score[Object.keys(score)[i]] !== false) {
            let wordAndAnswer = document.createElement("p");
            wordAndAnswer.classList.add("correctAnswer");
            wordAndAnswer.innerHTML = Object.keys(score)[i] + " : " + score[Object.keys(score)[i]][0];
            let wordAndAnswerToMoveTo = scorePanel;
            wordAndAnswerToMoveTo.insertBefore(wordAndAnswer, wordAndAnswerToMoveTo.children[i]);
        } else {
            let wordAndAnswer = document.createElement("p");
            wordAndAnswer.classList.add("wrongAnswer");
            wordAndAnswer.innerHTML = Object.keys(score)[i] + " : " + wordsAndAnswers[i][1];
            let wordAndAnswerToMoveTo = scorePanel;
            wordAndAnswerToMoveTo.insertBefore(wordAndAnswer, wordAndAnswerToMoveTo.children[i]);
        }
    }
    scorePanel.style.display = "flex";
}
