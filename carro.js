//Código do carro

let yCarros = [40, 96, 150];
let xCarros = [600, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}
  
function movimentaCarro(){
    for(i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro(){
    for(i = 0; i < xCarros.length; i++){
        if(xCarros[i] < -40){
            xCarros[i] = 600;
        }
    }
}