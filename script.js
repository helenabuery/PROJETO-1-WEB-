





// =========================
// SCROLL SUAVE
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




// =========================
// DARK MODE
// =========================
const themeToggle = document.getElementById("themeToggle");




// Carregar preferência
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}




// Alternar tema
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");




    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});




// =========================
// CONTROLE DE FONTE
// =========================
const increaseBtn = document.getElementById("fontIncrease");
const decreaseBtn = document.getElementById("fontDecrease");




let fontSize = localStorage.getItem("fontSize") || 16;
document.documentElement.style.fontSize = fontSize + "px";




// Limites
const minFont = 12;
const maxFont = 22;




// Aumentar fonte
increaseBtn.addEventListener("click", () => {
    if (fontSize < maxFont) {
        fontSize++;
        document.documentElement.style.fontSize = fontSize + "px";
        localStorage.setItem("fontSize", fontSize);
    }
});




// Diminuir fonte
decreaseBtn.addEventListener("click", () => {
    if (fontSize > minFont) {
        fontSize--;
        document.documentElement.style.fontSize = fontSize + "px";
        localStorage.setItem("fontSize", fontSize);
    }
});




const questions = [
    {
        q: "Você recebe um e-mail do 'Suporte Netflix' dizendo que sua conta será suspensa e pede para clicar num link. O que você olha primeiro?",
        options: [
            { text: "A logomarca da Netflix", correct: false },
            { text: "O endereço real do remetente (ex: @gmail.com vs @netflix.com)", correct: true },
            { text: "As cores do e-mail", correct: false }
        ]
    },
    {
        q: "Um amigo te envia um link no WhatsApp dizendo: 'Olha essa promoção do Boticário!'. Qual o passo mais seguro?",
        options: [
            { text: "Clicar e ver se é verdade", correct: false },
            { text: "Ignorar e avisar o amigo que ele pode ter sido hackeado", correct: true },
            { text: "Cadastrar meu CPF para ganhar o brinde", correct: false }
        ]
    },
    {
        q: "O que caracteriza uma senha forte?",
        options: [
            { text: "Nome do meu pet + ano de nascimento", correct: false },
            { text: "Sequências numéricas (123456)", correct: false },
            { text: "Mistura de letras (MAI/min), números e símbolos", correct: true }
        ]
    },
    {
        q: "Qual atitude ajuda a evitar golpes?",
        options: [
            { text: "Clicar rápido", correct: false },
            { text: "Compartilhar dados pessoais", correct: false },
            { text: "Desconfiar de urgência e ofertas boas demais", correct: true }
        ]
    },
    {
        q: "Um “amigo” te manda mensagem pedindo dinheiro urgente pelo WhatsApp. Qual a atitude correta?",
        options: [
            { text: "Ignorar", correct: false },
            { text: "Transferir para ajudar rápido", correct: false },
            { text: "Ligar para o amigo ou confirmar por outro meio", correct: true }
        ]
    }
];




let currentQuestionIndex = 0;
let score = 0;




function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById('question-number').innerText = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
    document.getElementById('question-text').innerText = q.q;
   
    const container = document.getElementById('options-container');
    container.innerHTML = '';
   
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.className = 'btn quiz-btn';
        btn.onclick = () => handleAnswer(opt.correct);
        container.appendChild(btn);
    });




    // Atualiza barra de progresso
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
}




function handleAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        document.getElementById('quiz-card').classList.add('correct-flash');
        setTimeout(() => document.getElementById('quiz-card').classList.remove('correct-flash'), 500);
    }




    currentQuestionIndex++;




    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}




function showResult() {
    document.getElementById('question-container').classList.add('d-none');
    document.getElementById('result-container').classList.remove('d-none');
    document.getElementById('quiz-progress').style.width = `100%`;




    const resultText = `Você acertou ${score} de ${questions.length} questões.`;
    document.getElementById('result-text').innerText = resultText;




    if (score === questions.length) {
        document.getElementById('result-title').innerText = "Mestre da Segurança! 🛡️";
        // Disparar confetes!
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8F797E', '#FFC2B5', '#646C8F'] // Usando as cores da sua paleta!
        });
    } else {
        document.getElementById('result-title').innerText = "Continue Praticando! 📚";
    }
}




function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question-container').classList.remove('d-none');
    document.getElementById('result-container').classList.add('d-none');
    loadQuestion();
}




// Iniciar o quiz ao carregar
window.onload = loadQuestion;


const ultimasNoticias = [
    {
        titulo: "Golpe da Mão Fantasma",
        resumo: "Software de acesso remoto é usado para limpar contas bancárias.",
        tag: "Perigo",
        cor: "bg-danger"
    },
    {
        titulo: "Promoção Falsa de Páscoa",
        resumo: "Links no WhatsApp prometem brindes de marcas famosas.",
        tag: "Viral",
        cor: "bg-warning text-dark"
    }
];


// Você poderia usar um loop para renderizar isso na tela!
