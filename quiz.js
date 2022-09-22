const themesWordsAnswers = {"Immigration" : {
    "un étranger" : "a foreigner",
    "un inconnu" : "a stranger",
    "la nationalité" : "nationality",
    "un ressortissant étranger" : "a foreign national",
    "les personnes de nationalité française" : "French citizens",
    "émigrer en Nouvelle-Zélande" : "to emigrate in New Zeland",
    "immigrer en France" : "to immigrate to France",
    "une vague d'immigration" : "a wave of immigration",
    "immigration à grande échelle / de masse" : "large-scale / mass immigration",
    "un exode" : "an exodus",
    "un nouvel arrivant" : "a newcomer",
    "pays natal, pays d'origine" : "native country, home country",
    "la patrie" : "homeland",
    "un pays d'accueil" : "a host country",
    "un pays d'adoption" : "an adoptive country",
    "accueillir" : "to welcome",
    "accueillant" : "welcoming",
    "la politique migratoire" : "immigration policy",
    "immigration choisie" : "selective immigration",
    "les flux migratoires" : "migration flows",
    "un passager clandestion" : "a stowaway",
    "l'immigration clandestine" : "illegal immigration",
    "l'immigration sauvage" : "uncontrolled immigration",
    "un immigrant clandestin" : "an illegal immigrant",
    "un sans-papier" : "an undocumented alien",
    "il est en situation irrégulière" : "his paper are not in order",
    "un frontière" : "a border",
    "fermer ses frontières" : "to close one's borders",
    "les contrôles aux frontières" : "border controls",
    "les contrôles d'idendité" : "identity checks",
    "un centre de rétention (administrative)" : "a holding centre",
    "un passeport" : "a passport",
    "un carte d'identité" : "an identity card",
    "un visa" : "a visa",
    "un réfugié" : "a refugee",
    "une personne déplacée" : "a displaced person",
    "un apatride" : "a stateless person",
    "se réfugier" : "to take refuge",
    "demander l'asile politique" : "to seek political asylum",
    "un demandeur d'asile" : "an asylum-seeker",
    "fuir la persécution / la misère" : "to flee persecution / destitution",
    "échapper à la pauvreté" : "to escape poverty",
    "chercher de meilleurs conditions de vie" : "to be in search of better living-conditions",
    "un trafic des êtres humains" : "human trafficking",
    "un passeur" : "a smuggler",
    "les passeurs d'immigrants clandestins" : "people-smugglers",
    "un réseau de passeurs" : "a smuggling ring",
    "un faux passeport" : "a fake passport",
    "reconduire qn à la frontière" : "to escort somebody back to the border",
    "renvoyer un immigrant" : "to send an immigrant back to his native country",
    "expluser qn" : "to deport somebody",
    "être refoulé à la frontière" : "to be turned away at the border",
    "être explusé" : "to be ordered out of the country",
    "s'éxiler" : "to go into exile",
    "un exilé" : "an exile",
    "exiler, bannir qn" : "to exile, banish somebody",
    "s'expatrier" : "to expatriate oneself",
    "un expatrié" : "an expatriate",
    "passer à l'Ouest / à l'ennemi" : "to defect to the West / to the enemy",
    "fuite des cerveaux / afflux des cerveaux" : "brain drain / brain gain",
    "partir de rien" : "to start from scratch",
    "le travail au noir" : "moonlighting",
    "un atelier clandestin" : "a sweatshop",
    "exploiter les travailleurs immigrés" : "to exploit migrant workers",
    "un permis de travail" : "a work permit",
    "un permis de séjour" : "a residence permit",
    "un travailleur migrant" : "a migrant worker",
    "un travailleur invité" : "a guest worker",
    "s'intégrer" : "to become integrated",
    "bien s'intégrer dans une société" : "to integrate well into a society",
    "l'insertion sociale" : "social integration",
    "régulariser la situation des clandestins" : "to regularise the status of illegal immigrants",
    "la régularisation" : "regularisation",
    "se faire naturaliser britannique" : "to be granted British citizenship",
    "être naturalisé britannique" : "to become a British citizen",
    "un quota" : "a quota",
    "le regroupement familial" : "family reunion",
    "qn qui absuse du systèmes des prestations sociales" : "a benefit cheat",
    "la fraude des prestations sociales" : "benefit fraud",
    "un parasite" : "a freeloader",
    "un mariage blanc" : "a sham marriage",
    "inonder" : "to flood",
    "être envahi par les étrangers" : "to be swamped with foreigners",
    "l'afflux de travailleurs" : "the influx of workers",
    "endiguer l'afflux des immigrés" : "to stem the flow of immigrants",
    "limiter / freiner l'immigration" : "to restrict / curb immigration",
    "un parti d'extrême-droite" : "a far-right party",
    "faire fuir les immigrants" : "to scare immigrants away",
    "empêcher les indésirables d'entrer" : "to keep out undesirables",
    "la xenophobie" : "xenophobia",
    "xénophobe" : "xenophobic",
    "des immigrés de deuxième génération" : "second-generation immigrants",
    "avoir un grand-père né à l'étranger" : "to have a foreign-born grandfather",
    "young men of Asian / Portuguese descent" : "des jeunes gens d'origine asiatique / portugaise",
    "un Français de naissance" : "a native of France",
    "un New Yorkais de souche" : "a born and bred New Yorker",
    "il est français de souche" : "he's of French origin",
    "le Maghreb" : "North Africa", 
    "les Maghrébins" : "North Africans",
    "pakistanais / du Bangladesh" : "Pakistani / Balngladeshi",
    "hispanophone / parlant le Hindi diaspora" : "Spanish-speaking / Hindi-speaking diaspora"
    }
}
const themes = ["Immigration"]; //à remplacer par un getElementById
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
rankDisplayed.innerText = "1/" + wordsAndAnswers.length

const resultsPanel = document.getElementsByClassName("results")[0];
const scorePanel = document.getElementsByClassName("score")[0];
const gameContainer = document.getElementsByClassName("game-container")[0];
const skipButton = document.getElementsByClassName("skip")[0];
const skipButtonItself = document.getElementsByClassName("skipButton")[0];

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
