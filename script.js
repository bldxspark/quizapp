// Quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        choices: ["Java", "C", "Python", "JavaScript"],
        correct: "JavaScript"
    },
    {
        question: "Is the earth round?",
        choices: ["True", "False"],
        correct: "True"
    },
    {
        question: "Which is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Jupiter"
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
        correct: "Albert Einstein"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Gold", "Osmium", "Oganesson"],
        correct: "Oxygen"
    },
    {
        question: "What is the square root of 64?",
        choices: ["6", "8", "10", "12"],
        correct: "8"
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Seoul", "Beijing", "Bangkok", "Tokyo"],
        correct: "Tokyo"
    },
    {
        question: "Which programming language is mainly used for Android development?",
        choices: ["Swift", "Java", "Kotlin", "C#"],
        correct: "Kotlin"
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        choices: ["Asia", "South America", "Africa", "Australia"],
        correct: "Africa"
    }
];

// Elements
document.addEventListener("DOMContentLoaded", () => {
    const startbtn = document.getElementById("startbtn");
    const nextbtn = document.getElementById("nextbtn");
    const restartbtn = document.getElementById("restartbtn");
    const questioncontainer = document.getElementById("questioncontainer");
    const resultcontainer = document.getElementById("resultcontainer");
    const questiontext = document.getElementById("questiontext");
    const choiceslist = document.getElementById("choiceslist");
    const scoredisplay = document.getElementById("score");

    // Variables
    let currentQuestionIndex = 0;
    let score = 0;

    startbtn.addEventListener("click", startquiz);
    nextbtn.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showquestion();
        } else {
            showresult();
        }
    });
    restartbtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultcontainer.classList.add('hidden');

        startquiz();
    });

    function startquiz() {
        startbtn.classList.add('hidden');
        resultcontainer.classList.add('hidden');
        questioncontainer.classList.remove('hidden');
        showquestion();
    }

    function showquestion() {
        nextbtn.classList.add('hidden');
        questiontext.textContent = questions[currentQuestionIndex].question;
        choiceslist.innerHTML = "";

        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.classList.add("choice"); // Add choice class here
            li.addEventListener("click", () => {
                selectanswer(choice, li);
            });
            choiceslist.appendChild(li);
        });
    }

    function selectanswer(choice, selectedelement) {
        const correctanswer = questions[currentQuestionIndex].correct;

        // Disable all choices to prevent multiple selections
        document.querySelectorAll(".choice").forEach(li => {
            // Disable further clicks
            if (li.textContent === correctanswer) {
                li.classList.add("correct"); // Green for correct answer
            } else {
                li.classList.add("wrong"); // Red for wrong answers
            }
        });

        if (choice === correctanswer) {
            score++;
        }

        nextbtn.classList.remove('hidden');
    }

    function showresult() {
        questioncontainer.classList.add("hidden");
        resultcontainer.classList.remove("hidden");
        scoredisplay.textContent = `Score: ${score} / ${questions.length}`;
    }
});
