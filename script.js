let musicas = [
    // Músicas -> Array

    // Back in Black
    {titulo:'Back in Black', 
    artista:'AC-DC', 
    src:'musicas/Back in Black- ACDC.mp3', 
    img:'imagens/Back in Black.png'},

    // Jump
    {titulo:'Jump', 
    artista:'Van Halen', 
    src:'Musicas/Jump-Van Halen.mp3', 
    img:'imagens/Van Halen.png'},

    // Numb
    {titulo:'Numb', 
    artista:'Linkin Park', 
    src:'musicas/Numb- Linkin Park.mp3', 
    img:'imagens/Numb.png'},

    // What I'Ve Done
    {titulo:'What Ive Done', 
    artista:'Linkin Park', 
    src:'musicas/What IVe Done- Linkin Park.mp3', 
    img:'imagens/What ive done.png'}
];

// Esconde o botao de play!!!
document.querySelector('.botao-pause').style.display = 'none';

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.info-music h2');
let nomeArtist = document.querySelector('.info-music p');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});


// Funções!!!
function renderizarMusica (index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtist.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}