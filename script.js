//Recuperar o tamanho da tela criada no arquivo html com id canvas
//Variável "canvas" - recuperar. Variável "ctx" - contexto do jogo, aspecto 2d.

window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    //Declarando as variáveis. O objeto "Cobra" é um array.
    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    //tamanho do espaço onde a cobra irá transitar
    grid = 20;
    //tamanho da cobra
    tam = 3;
    //chama a função jogo a cada 100 milisegundos
    setInterval(jogo, 100)

    //Controles do jogo
    document.addEventListener(
        "keydown",
        (event) => {
        
            switch (event.code) {
            //Deslocamento Direita
            case "ArrowRight":
                velX = 1;
                velY = 0;
                break;
            //Deslocamento Esquerda
            case "ArrowLeft":
                velX = -1;
                velY = 0;
                break;
            //Deslocamento para Cima
            case "ArrowUp":
                velY = -1;
                velX = 0;
                break;
            //Deslocamento para Baixo
            case "ArrowDown":
                velY = 1;
                velX = 0;
                break;
        }
    });
}

function jogo(){
    //Configuração da tela
    ctx.fillStyle = "#370091";

    //Distância (borda h), Distância (borda v); Largura, Altura
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //Deslocamento da cobra
    positionX += velX;
    positionY += velY;

    //Espelhamento (para não "perder" a posição da cobra)
    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if (positionY > grid){
        positionY = 0;
    }

    
    //Configuração da cobra
    ctx.fillStyle = "#e2d900";

    for(let i=0; i < snake.length; i++){
        ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
        if(snake[i].x == positionX && snake[i].y == positionY){
            tam = 3;
        }

    }

    //Posicionamento da cobra
    snake.push({x: positionX, y: positionY});


    //Apagando a cobra
    while(snake.length > tam){
        snake.shift();
    }

    //Configurando a comida
    ctx.fillStyle = "#d00000";
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

    //Comendo a comida
    if (positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }

};

