//Código do ator

let yAtor = 366;
let xAtor = 90;
let colidiu = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
  }

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15);
    if(colidiu){
      voltaPosicaoInicialDoAtor();
    }
  }
}

function voltaPosicaoInicialDoAtor(){
  yAtor = 366;
}

function exibePontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaPosicaoInicialDoAtor();
  }
}