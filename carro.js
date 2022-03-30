//Código do carro

let yCarros = [40, 96, 150];
let xCarros = [600, 600, 600];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro(){
    image(imagemCarro, xCarros[0], yCarros[0], 50, 40);
    image(imagemCarro2, xCarros[1], yCarros[1], 50, 40);
    image(imagemCarro3, xCarros[2], yCarros[2], 50, 40);
}
  
function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
}

function voltaPosicaoInicialDoCarro(){
    if(xCarros[0] < -40){
        xCarros[0] = 600;
    }else if(xCarros[1] < -40){
        xCarros[1] = 600;
    }else if(xCarros[2] < -40){
        xCarros[2] = 600;
    }
}