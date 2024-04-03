class Trivia {
    constructor() {
        this.questions = [];
        this.correctAnswers = [];
        this.incorrectAnswers = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.brideScore = 0;
        this.bridesmaidsScore = 0;
        this.popup = document.getElementById('popup');
        this.nextBtn = document.getElementById('nextBtn');
    }

    addQuestion(question, correctAnswer, incorrectAnswer) {
        this.questions.push(question);
        this.correctAnswers.push(correctAnswer);
        this.incorrectAnswers.push(incorrectAnswer);
    }

    startTrivia() {
        this.nextBtn.addEventListener('click', () => this.displayNextQuestion());
        this.displayNextQuestion();
    }

    displayNextQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const questionElement = document.getElementById("question");
            const answersElement = document.getElementById("answers");
            const current = this.questions[this.currentQuestionIndex];

            questionElement.textContent = current;
            answersElement.innerHTML = '';

            const answerA = document.createElement('button');
            answerA.textContent = this.correctAnswers[this.currentQuestionIndex];
            answerA.classList.add('answer');
            answerA.addEventListener('click', () => this.handleAnswer(true));

            const answerB = document.createElement('button');
            answerB.textContent = this.incorrectAnswers[this.currentQuestionIndex];
            answerB.classList.add('answer');
            answerB.addEventListener('click', () => this.handleAnswer(false));

            answersElement.appendChild(answerA);
            answersElement.appendChild(answerB);
        } else {
            this.showResults();
        }
    }

    handleAnswer(correct) {
        if (correct) {
            this.score += 10;
            this.brideScore += 10;
            this.popup.textContent = "Você acertou, quem te fez a pergunta bebe";
            this.popup.style.backgroundColor = "#4caf50";
        } else {
            this.score -= 10;
            this.bridesmaidsScore += 10;
            this.popup.textContent = "Pode beber noiva";
            this.popup.style.backgroundColor = "#f44336";
        }
        this.popup.style.display = "block";
        setTimeout(() => {
            this.popup.style.display = "none";
            this.currentQuestionIndex++;
            this.displayNextQuestion();
        }, 2000);
    }

    showResults() {
        document.getElementById('triviaContainer').classList.add('hidden');
        document.getElementById('resultContainer').classList.remove('hidden');

        const brideScoreElement = document.getElementById('brideScore');
        brideScoreElement.textContent = `Pontuação da noiva: ${this.brideScore}`;

        const bridesmaidsScoreElement = document.getElementById('bridesmaidsScore');
        bridesmaidsScoreElement.textContent = `Pontuação das madrinhas: ${this.bridesmaidsScore}`;
    }
}

const trivia = new Trivia();

// Adicionando as perguntas e respostas
trivia.addQuestion("Quem deu o primeiro beijo?", "Matheus", "Karla");
trivia.addQuestion("Quem disse 'eu te amo' primeiro?", "Matheus", "Karla");
trivia.addQuestion("Qual é a data do aniversário de namoro?", "11/06/2017/8", "15/06/2017");
trivia.addQuestion("Quem ofereceu o primeiro presente?", "Matheus", "Karla");
trivia.addQuestion("Quem é mais romântico?", "Matheus", "Karla");
trivia.addQuestion("Quem é mais teimoso?", "Karla", "Matheus");
trivia.addQuestion("Qual é o nome da vossa música?", "Não temos, mas possível ela falar my girl (gosto musical diferentes kkk)", "I Will Always Love You - Whitney Houston");
trivia.addQuestion("Qual é o nome da vossa série/filme favorito?", "Série: Dois homens e meio / Filme: As Branquelas", "Série: Friends / Filme: Titanic");
trivia.addQuestion("Como é um 'date' ideal para os dois?", "Acho que japa, vinho, filme (impossível ela falar isso) ela vai lançar um praia", "Jantar romântico em um restaurante chique");
trivia.addQuestion("Quem pediu em casamento?", "Matheus", "Karla");
trivia.addQuestion("Praia ou cidade?", "Praia", "Cidade");
trivia.addQuestion("Saltos ou rasos?", "Saltos (se ela falar rasos eu jogo os 500 saltos dela fora)", "Rasos");
trivia.addQuestion("Filme ou série?", "Série (mas se colocar qualquer filme ela vai assistir até o final)", "Filme");
trivia.addQuestion("Dia ou noite?", "Noite", "Dia");
trivia.addQuestion("A cor preferida?", "Verde/rosa", "Azul");
trivia.addQuestion("A comida preferida?", "Japonês", "Italiano");
trivia.addQuestion("A qualidade que ela mais gosta em si?", "Sincera", "Divertido");
trivia.addQuestion("A qualidade do noivo que ela mais gosta?", "Engraçado", "Atencioso");
trivia.addQuestion("A parte física do noivo que ela mais gosta?", "Cabelo (nenhuma)", "Olhos");
trivia.addQuestion("Quantos filhos ela quer ter?", "0/1", "2");
trivia.addQuestion("Praia ou cidade?", "Cidade", "Praia");
trivia.addQuestion("Carro ou mota?", "Carro", "Mota");
trivia.addQuestion("Filme ou série?", "Série", "Filme");
trivia.addQuestion("Dia ou noite?", "Noite", "Dia");
trivia.addQuestion("A cor preferida?", "Preto", "Branco");
trivia.addQuestion("A comida preferida?", "Arroz com frango", "Pizza");
trivia.addQuestion("A qualidade que ele mais gosta em si?", "Engraçado", "Inteligente");
trivia.addQuestion("A qualidade da noiva que ele mais gosta?", "Sincera", "Carinhosa");
trivia.addQuestion("A parte física da noiva que ele mais gosta?", "Cabelo / Nariz", "Boca / Olhos");
trivia.addQuestion("Quantos filhos ele quer ter?", "1 ou 2", "3 ou mais");

const startBtn = document.getElementById('startBtn');
const triviaContainer = document.getElementById('triviaContainer');

startBtn.addEventListener('click', () => {
    document.querySelector('.container').classList.add('hidden');
    triviaContainer.classList.remove('hidden');
    trivia.startTrivia();
});
