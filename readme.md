<h1 align="center"> Projeto Snake Game </h1>


<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge" alt="Em Desenvolvimento"/>
</p>

# Índice 

- [Índice](#índice)
- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [Tecnologias e sites utilizados](#tecnologias-e-sites-utilizados)
- [Desenvolvimento](#desenvolvimento)
- [Conclusão](#conclusão)


# Descrição do Projeto

<p align="justify">Este projeto será um jogo feito principalmente em JavaScript, o qual será baseado em um jogo antigo presente em celulares Nokia, conhecido no Brasil como “Jogo da Cobrinha”. Ele será intitulado neste projeto como: Snake Game.</p>

# Funcionalidades e Demonstração da Aplicação

# <h3>Tecnologias e sites utilizados</h3>

<p align="left">Pesquisas e verificação do funcionamento do código:  Navegador de Internet Google Chrome</p>
<p align="left">Pesquisas e verificação do funcionamento do código: https://www.microsoft.com/pt-br/edge</p>
<p align="left">Edição/produção do código: Visual Studio Code - Code Editing. Redefined</p>
<p align="left">Escolha de cores e seus respectivos códigos HEX: HTML Color Codes 🎨 </p>
<p align="left">Consultas: JavaScript: The Definitive Guide</p> 
<p align="left">Consultas: Appendix B. Keyboard Key Code Values</p>
<p align="left">Atualização de propriedade: KeyboardEvent: keyCode property - Web APIs | MDN</p>
<p align="left">Atualização de propriedade: KeyboardEvent: code property - Web APIs | MDN</p>
<p align="left">Extensão utilizada no VS Code: Live Server (https://github.com/ritwickdey/live-server-web-extension)</p>


# <h3>Desenvolvimento</h3>

<p align="justify">Foram inseridos os documentos padrões (index.html, style.css, script.js, readme.md)  com a devida base inicial para funcionamento no navegador Google e Edge, nas versões mais atuais.
Além das instruções repassadas nas aulas, foram inseridos alguns complementos, como: estilização e reposicionamento simples com CSS e implementação da estrutura básica do HTML.</p>

1) Inicialização do Jogo:

<p align="justify">Quando a página carrega (window.onload), o código procura o elemento com o ID "canvas" no HTML e obtém seu contexto 2D (“ctx”).
O "canvas", presente no arquivo HTML, é como uma tela em branco onde o jogo será desenhado.</p>

2) Configuração das Variáveis:

<p align="justify">Algumas variáveis foram declaradas, como “snake” (a cobra), “positionX” e “positionY” (posição inicial da cobra), “foodX” e “foodY” (posição inicial da comida), “velX” e “velY” (velocidade da cobra), “grid” (tamanho do espaço onde a cobra se move), e “tam” (tamanho inicial da cobra). A função “jogo” será chamada a cada 100 milissegundos usando “setInterval”.</p>

3) Controles do Jogo:

<p align="justify">O jogo responde às teclas de seta (para cima, para baixo, esquerda e direita) para mover a cobra na tela. Isso é feito com um evento de teclado (“document.addEventListener("keydown", ...)”) que ajusta a direção da cobra quando uma tecla é pressionada.
Neste caso, como o VSCode acusou que a propriedade “keyCode” utilizada na aula P1.3 estaria “Deprecated”, foi realizada consulta na documentação e realizada a alteração para fins de atualização, próprio conhecimento e prática. </p>


4) Funcionamento do Jogo:

<p align="justify">A função “jogo” é chamada a cada intervalo de tempo. Com isso, a posição da snake/cobra é atualizada com base na velocidade (velX e velY). Se a snake/cobra atinge as bordas da tela, ela aparece do lado oposto (o jogo é cíclico). Ela é desenhada no canvas, e se colidir consigo mesma, o tamanho dela (“tam”) é resetado. Para manter seu rastro de movimento, a posição atual da snake/cobra é adicionada a um array (“snake”). A cauda dela é cortada para manter seu tamanho constante. A sua comida é desenhada em uma posição aleatória, utilizando “Math.floor(Math.random()*grid)”, e se a cobra a alcança, seu tamanho aumenta (tam++), e a comida muda de posição.</p>

# <h3>Conclusão</h3>

<p align="justify">O código cria um jogo simples de cobra onde o usuário controla a cobra com as setas, tenta comer a comida para crescer e precisa evitar colidir com as bordas da tela e com a própria cauda. As oportunidades deste projeto são: melhorar a responsividade do jogo em relação aos diversos tamanhos de tela; desenvolver a estrutura necessária para possibilitar que o usuário jogue em seu smartphone; implementar sistema de pontuação e de vidas; implementar botões de Play, Restart e Pause; e melhorar a interface (UX/UI).
O jogo está funcionando e foram feitos testes no Google Chrome e no Microsoft Edge.</p>


