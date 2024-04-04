*classe Trivia* gerencia a trivia, armazenando perguntas, respostas corretas e incorretas, pontuações, e exibindo feedback ao usuário.

addQuestion adiciona perguntas com respostas corretas e incorretas.

startTrivia inicia a trivia, configurando um listener de evento para o botão "Próxima Pergunta" e exibindo a primeira pergunta.
*"ouvir" quando o botão "Iniciar" for clicado pelo usuário.*

*displayNextQuestion* mostra a próxima pergunta na tela, atualizando o texto e criando botões para as respostas.

 *handleAnswer* processa a escolha do usuário, atualizando as pontuações e exibindo feedback em um popup.

*showResults* exibe os resultados finais, ocultando a trivia e mostrando as pontuações da noiva e das madrinhas.

Na inicialização, uma instância da classe Trivia é criada, perguntas e respostas são adicionadas, e um ouvinte de evento é adicionado ao botão "Iniciar".
