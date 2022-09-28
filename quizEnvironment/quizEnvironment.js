const themesWordsAnswers = {"Environnement" : {
    "écologique, lié à l'environnement" : "environmental",
    "une politique qui respecte l'environnement" : "an eco-friendly policy",
    "protéger l'environnement" : "to protect the environnement",
    "la protection de l'environnement" : "the preservation of the environment",
    "la nature" : "nature",
    "la protection de la nature" : "nature conservation",
    "la faune et la flore" : "wildlife",
    "un défenseur de l'environnement" : "a conservationist",
    "un écologiste" : "an ecologist",
    "un militant écologiste" : "a green activist",
    "un écolo" : "a tree-hugger",
    "un militan écologiste (mais l'autre version stylée)" : "an eco-warrior",
    "sensibiliser les gens à un problème" : "to make people aware of a problem",
    "une campagne de sensibilisation" : "an awareness campaign",
    "un parc naturel" : "a natural reserve",
    "le tourisme écologique" : "eco-tourism",
    "détruire la biosphère" : "to destroy the biosphere",
    "être / représenter une menace pour qch" : "to be / pose a threat to something",
    "mettre en danger qch" : "to jeopardize something",
    "mettre qch en danger" : "to put something at risk",
    "être en danger" : "to be in danger",
    "nuire à l'environnement" : "to harm the environnement",
    "nocif" : "harmful",
    "inoffensif" : "harmless",
    "dégâts" : "damage",
    "endommager qch" : "to damage something",
    "causer des dégâts" : "to cause damage",
    "se détériorer" : "to deteriorate",
    "les ressources naturelles" : "natural resources",
    "l'épuisement des ressources" : "the depletion of resources",
    "la rareté" : "scarcity",
    "les matières premières" : "raw materials",
    "la biodiversité" : "biodiversity",
    "l'habitat" : "habitat",
    "une niche" : "a niche",
    "une zone protégée" : "a conservation area",
    "un écosystème" : "an ecosystem",
    "une espèce" : "a species",
    "une espèce animale" : "an animal species",
    "une espèce végétale" : "a plant species",
    "un mammifère" : "a mammal",
    "le trafic d'animaux" : "animal trafficking",
    "une espèce en voie de disparition" : "an endangered species",
    "être menacé d'extinction" : "to be threatened with extinction",
    "disparaître" : "to become extinct",
    "la surpêche" : "overfishing",
    "le thon rouge" : "bluefin tuna",
    "un dauphin / une baleine" : "a dolphin / a whale",
    "la pêche à la baleine" : "whaling",
    "la couche d'ozone" : "the ozone layer",
    "les rayons ultra-violets" : "ultra-violet rays",
    "le trou dans la couche d'ozone" : "the hole the ozone layer",
    "la diminution de la couche d'ozone" : "ozone depletion",
    "les CFC" : "CFCs",
    "respectueux de la couche d'ozone" : "ozone-friendly",
    "une forêt tropicale" : "a tropical forest",
    "le dévoloppement durable" : "sustainable development",
    "abattre des arbres" : "to cut down trees",
    "la déforestation" : "deforestation",
    "l'exploitation du bois" : "logging",
    "l'industrie du bois" : "the logging industry",
    "la forêt tropicale se réduit" : "the rainforest is shrinking",
    "reboiser" : "to reforest",
    "le reboisement" : "reforestation",
    }
}
const themes = ["Environnement"]; //à remplacer par un getElementById
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
wordDisplayed.innerText = wordsAndAnswers[wordRank][0] + " :";
const rankDisplayed = document.getElementsByClassName("rank")[0];
rankDisplayed.innerText = "1/" + wordsAndAnswers.length;

const resultsPanel = document.getElementsByClassName("results")[0];
const scorePanel = document.getElementsByClassName("score")[0];
const gameContainer = document.getElementsByClassName("game-container")[0];
const skipButton = document.getElementsByClassName("skip")[0];
const skipButtonItself = document.getElementsByClassName("skipButton")[0];

const correctSFX = new Audio("../sfx/correct.wav");
const wrongSFX = new Audio("../sfx/wrong.wav");

const inputs = document.querySelectorAll(".game-container input");

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", checkAnswer);
});

async function checkAnswer(e) {
    if (e.key === "Enter") {
        const input = e.target;
        const userAnswer = input.value;
        if (wordsAndAnswers[wordRank][1] === userAnswer.toLowerCase()) {
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
                rankDisplayed.innerHTML = wordRank + 1 + "/" + wordsAndAnswers.length;
                document.getElementById("word").innerText = wordsAndAnswers[wordRank][0] + " :";
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
            input.classList.remove("wrong");
            input.disabled = false;
            input.focus();
        }
    }
}

async function skipWord() {
    skipButtonItself.disabled = true;
    const input = document.getElementsByClassName("answer")[0];
    const answer = wordsAndAnswers[wordRank][1];
    input.value = "";
    for (let i = 0; i < answer.length; i++) {
        await new Promise(r => setTimeout(r, 100));
        input.value += answer[i];
    }
    await new Promise(r => setTimeout(r, 1000));
    input.disabled = true;
    wrongSFX.play();
    if (skipButton.style.visibility !== "hidden") {
        skipButton.classList.remove("hideSkipButton");
        skipButton.classList.add("hideSkipButton");
    }
    input.classList.add("wrong");
    input.value = "";
    await new Promise(r => setTimeout(r, 1000));
    if (skipButton.style.visibility !== "hidden") {
        skipButton.style.visibility = "hidden";
    }
    if (wordsAndAnswers.length > wordRank + 1) {
        wordRank++;
        rankDisplayed.innerHTML = wordRank + 1 + "/" + wordsAndAnswers.length;
        document.getElementById("word").innerText = wordsAndAnswers[wordRank][0] + " :";
        input.classList.remove("wrong");
        input.disabled = false;
        input.focus();
    } else {
        gameContainer.style.display = "none";
        gameScore();
    }
    skipButtonItself.disabled = false;
}

function gameScore() {
    let point = 0;
    for (let i = 0; i < Object.keys(score).length; i++) {
        if (score[Object.keys(score)[i]] !== false) {
            point++;
        }
    }
    let note = document.createElement("h1");
    note.innerHTML = point + "/" + (Object.keys(score).length);
    let noteToMoveTo = resultsPanel;
    noteToMoveTo.insertBefore(note, noteToMoveTo.children[0]);
    for (let i = 0; i < Object.keys(score).length; i++) {
        if (score[Object.keys(score)[i]] !== false) {
            let wordAndAnswer = document.createElement("p");
            wordAndAnswer.classList.add("correctAnswer");
            wordAndAnswer.innerHTML = Object.keys(score)[i] + " : " + score[Object.keys(score)[i]][0];
            let wordAndAnswerToMoveTo = resultsPanel;
            wordAndAnswerToMoveTo.insertBefore(wordAndAnswer, wordAndAnswerToMoveTo.children[i]);
        } else {
            let wordAndAnswer = document.createElement("p");
            wordAndAnswer.classList.add("wrongAnswer");
            wordAndAnswer.innerHTML = Object.keys(score)[i] + " : " + wordsAndAnswers[i][1];
            let wordAndAnswerToMoveTo = resultsPanel;
            wordAndAnswerToMoveTo.insertBefore(wordAndAnswer, wordAndAnswerToMoveTo.children[i]);
        }
    }
    scorePanel.style.position = "block";
}
