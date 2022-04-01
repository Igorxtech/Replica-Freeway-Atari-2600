//Código do ator

let yAtor = 366;
let xAtor = 100;
let colidiu = false;

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
  for(i = 0; i < imagemCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i], yCarros[i], 50, 40, xAtor, yAtor, 15);
    if(colidiu){
      colisao();
    }
  }
}

function colisao(){
  yAtor = 366;
}