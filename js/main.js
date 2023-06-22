function playSong(idButtonMusica) {

    document.querySelector(idButtonMusica).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//document.querySelector('.tecla_pom').onclick = playSong;

//Percorrendo a lista
let cont = 0;

while (cont < listaDeTeclas.length){

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1]
    //Template String
    const idAudio = `#som_${instrumento}`
    
    tecla.onclick = function () {
        playSong(idAudio);
    }

    cont = cont + 1;

}


