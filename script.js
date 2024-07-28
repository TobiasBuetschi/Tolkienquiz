const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");
const startDiv = document.getElementById("start");

let shuffledQuestions, currentQuestionIndex, score;



const questions = [{
        question: "Wie heißt der Hobbit, der den Einen Ring findet? ",
        answers: [
            { text: "Frodo Beutlin ", correct: false },
            { text: "Bilbo Beutlin ", correct: true },
            { text: "Samweis Gamdschie", correct: false },
            { text: "Lobelia Sackheim-Beutlin", correct: false },
        ],
    },
    {
        question: "Wer ist der Hauptantagonist in Der Herr der Ringe ?",
        answers: [
            { text: "Morgoth ", correct: false },
            { text: "Saruman", correct: false },
            { text: "Lobelia Sackheim-Beutlin", correct: true },
            { text: "Sauron", correct: true },
        ],
    },
    {
        question: "Welche Rasse schuf die Ringe der Macht? ",
        answers: [
            { text: "Menschen", correct: false },
            { text: "Zwerge", correct: false },
            { text: "Elben", correct: true },
            { text: "Ainur", correct: false },
        ],
    },
    {
        question: "Nenne die drei Elbenringe der Macht. ",
        answers: [
            { text: "Narya, Nenya, Vilya ", correct: true },
            { text: "Narya, Nenya, Anduril", correct: false },
            { text: "Narya, Narsil, Vilya", correct: false },
            { text: "Nenya, Grond, Vilya", correct: false },
        ],
    },
    {
        question: "Wer ist der Vater von Aragorn? ",
        answers: [
            { text: "Elendil", correct: false },
            { text: "Denethor", correct: false },
            { text: "Isildur", correct: false },
            { text: "Arathorn", correct: true },
        ],
    },
    {
        question: "Welches Volk bewohnte ursprünglich Moria? ",
        answers: [
            { text: "Elben", correct: false },
            { text: "Menschen", correct: false },
            { text: "Zwerge", correct: true },
            { text: "Hobbits", correct: false },
        ],
    },
    {
        question: "Wie heißt das Schwert von Bilbo und später Frodo? ",
        answers: [
            { text: "Glamdring", correct: false },
            { text: "Anduril", correct: false },
            { text: "Stich", correct: true },
            { text: "Orcrist", correct: false },
        ],
    },
    {
        question: "Wer ist der Schöpfer von Arda in Tolkiens Mythologie? ",
        answers: [
            { text: "Manwe", correct: false },
            { text: "Eru Ilúvatar", correct: true },
            { text: "Melkor", correct: false },
            { text: "Aulë", correct: false },
        ],
    },
    {
        question: "Welcher Vala ist für die Schmiedekunst zuständig? ",
        answers: [
            { text: "Manwe", correct: false },
            { text: "Ulmo", correct: false },
            { text: "Aulë", correct: true },
            { text: "Tulkas", correct: false },
        ],
    },
    {
        question: "Nenne die beiden Bäume Valinors. ",
        answers: [
            { text: "Laurelin und Telperion", correct: true },
            { text: "Nimloth und Celeborn", correct: false },
            { text: "Hithlain und Mallorn", correct: false },
            { text: "Yavanna und Oromë", correct: false },
        ],
    },
    {
        question: "Wer ist der Vater von Feanor?",
        answers: [
            { text: "Fingolfin", correct: false },
            { text: "Finarfin", correct: false },
            { text: "Finwë", correct: true },
            { text: "Fëanor", correct: false },
        ],
    },
    {
        question: "Welches Material verwendete Feanor für die Silmaril? ",
        answers: [
            { text: "Mithril", correct: false },
            { text: "Adamant", correct: false },
            { text: "Valinorianisches Glas", correct: false },
            { text: "Unbekanntes Material", correct: true },
        ],
    },
    {
        question: "Wer ist der letzte Hochkönig der Noldor in Mittelerde? ",
        answers: [
            { text: "Fingolfin", correct: false },
            { text: "Turgon", correct: false },
            { text: "Gil-galad", correct: true },
            { text: "Finrod", correct: false },
        ],
    },
    {
        question: "Wie heißt die Hauptstadt von Gondolin? ",
        answers: [
            { text: "Tirion", correct: false },
            { text: "Nargothrond", correct: false },
            { text: "Minas Tirith", correct: false },
            { text: "Gondolin", correct: true },
        ],
    },
    {
        question: "Wer ist der Vater von Turin Turambar?",
        answers: [
            { text: "Húrin", correct: true },
            { text: "Huor", correct: false },
            { text: "Turgon", correct: false },
            { text: "Thingol", correct: false },
        ],
    },
    {
        question: "Welcher Drache zerstörte Nargothrond? ",
        answers: [
            { text: "Smaug", correct: false },
            { text: "Glaurung", correct: true },
            { text: "Ancalagon ", correct: false },
            { text: "Scatha", correct: false },
        ],
    },
    {
        question: "Wie heißt das Schiff, mit dem Earendil zu den Valar segelte? ",
        answers: [
            { text: "Vingilot", correct: true },
            { text: "Numenor", correct: false },
            { text: "Alqualondë", correct: false },
            { text: "Valinor", correct: false },
        ],
    },
    {
        question: "Wer war der letzte König von Númenor?",
        answers: [
            { text: "Elendil", correct: false },
            { text: "Isildur", correct: false },
            { text: "Ar-Pharazôn", correct: true },
            { text: "Tar-Míriel", correct: false },
        ],
    },
    {
        question: "Welcher Maia wurde von Melkor korrumpiert und zu seinem mächtigsten Diener? ",
        answers: [
            { text: "Aiwendil", correct: false },
            { text: "Olórin", correct: false },
            { text: "Mairon", correct: true },
            { text: "Morinehtar", correct: false },
        ],
    },
    {
        question: "Wie lautet der elbische Name für die alles entscheidende Schlacht am Ende der Zeit?",
        answers: [
            { text: "Dagor Bragolath", correct: false },
            { text: "Dagor-nuin-Giliath", correct: false },
            { text: "Dagor Dagorath", correct: true },
            { text: "Nirnaeth Arnoediad", correct: false },
        ],
    }
]

startScreen();

function startScreen() {
    questionContainer.style.display = "none";
    startButton.classList.remove("hide");
    nextButton.classList.add("hide");
    restartButton.classList.add("hide");
    resultDiv.classList.add("hide");
    startDiv.classList.remove("hide");
    startDiv.innerText = `Willkommen zum Tolkienquiz`;
}


function startQuiz() {
    score = 0;
    questionContainer.style.display = "flex";
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    startButton.classList.add("hide")
    nextButton.classList.remove("hide");
    startDiv.classList.add("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "answer" + index;
        radio.name = "answer";
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;

        inputGroup.appendChild(radio);
        inputGroup.appendChild(label);
        answerButtons.appendChild(inputGroup);
    })
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
nextButton.addEventListener("click", () => {
    const answerIndex = Array.from(
        answerButtons.querySelectorAll("input")
    ).findIndex((radio) => radio.checked);
    if (answerIndex !== -1) {
        if (shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (shuffledQuestions.length > currentQuestionIndex) {
            setNextQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert("Bitte wählen Sie eine Antwort.");
    }
});

restartButton.addEventListener("click", startQuiz);

function endQuiz() {
    questionContainer.style.display = "none";
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDiv.classList.remove("hide");
    resultDiv.innerText = `Your final score: ${score} / ${shuffledQuestions.length}`;
}

startButton.addEventListener("click", startQuiz);