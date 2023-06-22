function playSong(selectorAudio) {

   const elemento = document.querySelector(selectorAudio);

   if (elemento === null) {
        console.log("Elemento não encontrado!");
   } else if (elemento && elemento.localName === 'audio') { //Não precisa do != null porque ele ja identifica se tem algo no elemento
        elemento.play()
   } else {
        console.log("Elemento não encontrado ou Seletor inválido!");
   }

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

    tecla.onkeydown = function (eventPressed) {

        if (eventPressed.code === 'Space' || eventPressed.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


