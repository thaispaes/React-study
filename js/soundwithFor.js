function playSong(idButtonMusica) {

    document.querySelector(idButtonMusica).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//document.querySelector('.tecla_pom').onclick = playSong;

//Percorrendo a lista
for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        playSong(idAudio);
    }
}


