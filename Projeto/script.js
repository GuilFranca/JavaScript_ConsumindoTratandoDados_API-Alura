const containerVideos = document.querySelector('.videos__container');

// fetch é uma função de busca do JS
// Será uilizado o link do terminal(Resources) para buscar os dados da API
const api = fetch("http://localhost:3000/videos") // Irá retornar uma Promise(Uma função assíncrona)
.then(res => res.json()) // .then espera a api ser carregada para executar o que tem dentro dela, que no caso é transformar a resposta da mesma em um arquivo json
.then((videos) =>
    videos.forEach((video) => {
        containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
            </div>
        </li>
        `;
    })
)
// Serve para pegar possiveis erros
.catch((error) => {
    containerVideos.innerHTML = `<p>Houver um erro ao carregar os vídeos: ${error}</p>`;
})
