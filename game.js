const questionText = document.getElementById("question-text");
const options = document.getElementsByClassName("option");
const scoreValue = document.getElementById("score-value");
const totalScore = document.getElementById("total-score");
const restartBtn = document.getElementById("restart-btn");

let score = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        question: "What is a common method used in phishing attacks?",
        options: [
            "Spear-phishing",
            "Smishing",
            "Vishing",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of a firewall?",
        options: [
            "To protect against malware",
            "To monitor network traffic",
            "To create a secure connection",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of encryption in cybersecurity?",
        options: [
            "To protect data from unauthorized access",
            "To prevent denial-of-service attacks",
            "To detect and mitigate malware",
            "To secure physical access to a network"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the primary goal of social engineering attacks?",
        options: [
            "To exploit vulnerabilities in software",
            "To gain unauthorized access to a system",
            "To manipulate individuals and trick them into revealing sensitive information",
            "To launch DDoS attacks"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the acronym 'DDoS' stand for?",
        options: [
            "Distributed Denial of Service",
            "Data Disclosure on Servers",
            "Digital Defense of Systems",
            "Domain Detection of Security"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of multi-factor authentication (MFA)?",
        options: [
            "To use multiple firewalls for enhanced security",
            "To prevent malware infections",
            "To require users to provide multiple forms of identification for access",
            "To encrypt data during transmission"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the role of a penetration tester in cybersecurity?",
        options: [
            "To develop secure coding practices",
            "To analyze network traffic for potential threats",
            "To simulate attacks on systems to identify vulnerabilities",
            "To investigate security incidents and breaches"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a Virtual Private Network (VPN)?",
        options: [
            "To protect against phishing attacks",
            "To securely connect remote users to a private network",
            "To scan for vulnerabilities in web applications",
            "To encrypt data stored on servers"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the difference between a virus and a worm?",
        options: [
            "A virus requires user interaction to spread, while a worm can spread automatically",
            "A virus infects software, while a worm infects hardware",
            "A virus can be detected and removed easily, while a worm is difficult to detect",
            "There is no difference between them"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of an Intrusion Detection System (IDS)?",
        options: [
            "To encrypt data during transmission",
            "To detect and prevent spam emails",
            "To monitor network traffic and identify potential security breaches",
            "To prevent malware infections"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the concept of 'least privilege' in cybersecurity?",
        options: [
            "Granting users the highest level of access privileges",
            "Granting users access to all network resources",
            "Granting users access privileges based on the principle of 'need-to-know'",
            "Granting users unrestricted access to install software"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a honeypot in cybersecurity?",
        options: [
            "To detect and mitigate DDoS attacks",
            "To lure and deceive attackers, gather information, and analyze their behavior",
            "To encrypt sensitive data",
            "To prevent phishing attacks"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the principle of 'defense in depth' in cybersecurity?",
        options: [
            "Using multiple layers of security controls to protect against multiple types of threats",
            "Using physical barriers to secure a network",
            "Using encryption to protect data at rest",
            "Using strong passwords for user authentication"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
        options: [
            "To detect and block unauthorized access attempts",
            "To encrypt data in transit",
            "To analyze and correlate security events from various sources",
            "To prevent social engineering attacks"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a Security Operations Center (SOC) in cybersecurity?",
        options: [
            "To develop secure coding practices",
            "To analyze network traffic for potential threats",
            "To investigate security incidents and breaches",
            "To simulate attacks on systems to identify vulnerabilities"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the role of a firewall in network security?",
        options: [
            "To monitor network traffic",
            "To create a secure connection",
            "To protect against malware",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of a VPN (Virtual Private Network)?",
        options: [
            "To protect against phishing attacks",
            "To securely connect remote users to a private network",
            "To scan for vulnerabilities in web applications",
            "To encrypt data stored on servers"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the difference between symmetric and asymmetric encryption?",
        options: [
            "Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses different keys",
            "Symmetric encryption is faster than asymmetric encryption",
            "Asymmetric encryption is more secure than symmetric encryption",
            "There is no difference between them"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of a password manager?",
        options: [
            "To generate and store strong, unique passwords for different accounts",
            "To encrypt sensitive data",
            "To detect and prevent malware infections",
            "To monitor network traffic"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the concept of 'defense in depth' in cybersecurity?",
        options: [
            "Using multiple layers of security controls to protect against multiple types of threats",
            "Using physical barriers to secure a network",
            "Using encryption to protect data at rest",
            "Using strong passwords for user authentication"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of a vulnerability assessment?",
        options: [
            "To analyze network traffic for potential threats",
            "To simulate attacks on systems to identify vulnerabilities",
            "To investigate security incidents and breaches",
            "To scan and identify security weaknesses in systems"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the role of a penetration tester in cybersecurity?",
        options: [
            "To develop secure coding practices",
            "To analyze network traffic for potential threats",
            "To simulate attacks on systems to identify vulnerabilities",
            "To investigate security incidents and breaches"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
        options: [
            "To detect and block unauthorized access attempts",
            "To encrypt data in transit",
            "To analyze and correlate security events from various sources",
            "To prevent social engineering attacks"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the principle of 'least privilege' in cybersecurity?",
        options: [
            "Granting users the highest level of access privileges",
            "Granting users access to all network resources",
            "Granting users access privileges based on the principle of 'need-to-know'",
            "Granting users unrestricted access to install software"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a honeypot in cybersecurity?",
        options: [
            "To detect and mitigate DDoS attacks",
            "To lure and deceive attackers, gather information, and analyze their behavior",
            "To encrypt sensitive data",
            "To prevent phishing attacks"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the concept of 'social engineering' in cybersecurity?",
        options: [
            "Using software vulnerabilities to gain unauthorized access",
            "Manipulating individuals to deceive them and gain unauthorized access",
            "Encrypting data during transmission",
            "Protecting against denial-of-service attacks"
        ],
        correctAnswer: 1
    }
];

// Shuffle function to randomize array order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Randomize the order of questions
shuffleArray(questions);

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    questionText.innerText = ` ${questionNumber}: ${question.question}`;
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = question.options[i];
    }
    updateScore();
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function updateScore() {
    scoreValue.innerText = score;
    totalScore.innerText = questions.length;
}

function endGame() {
    questionText.innerText = "Game Over!";
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
    restartBtn.style.display = "block";
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffleArray(questions); // Randomize the order of questions again
    showQuestion();
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "block";
    }
    restartBtn.style.display = "none";
}

// Start the game
showQuestion();