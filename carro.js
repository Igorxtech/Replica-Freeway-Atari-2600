//Código do carro

let yCarros = [40, 96, 150];
let xCarros = [600, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}
  
function movimentaCarro(){
    for(let i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < xCarros.length; i++){
        if(passouTodaATela(i)){
            xCarros[i] = 600;
        }
    }
}

function passouTodaATela(i){
    return xCarros[i] < -50;
}