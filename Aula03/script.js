const containerVideos = document.querySelector('.videos__container');


async function buscarEMostrarVideos() {
    // Tenta executar o código a seguir
    try{
        // fetch é uma função de busca do JS
        // Será uilizado o link do terminal(Resources) para buscar os dados da API
        // await fará com que a busca seja feita para depois o nosso código da função assincrona sej executado, não sendo mais necessário o .then
        const busca = await fetch("http://localhost:3000/videos"); // Irá retornar uma Promise(Uma função assíncrona)
        const videos = await busca.json();
        //.then(res => res.json()) // .then espera a api ser carregada para executar o que tem dentro dela, que no caso é transformar a resposta da     mesma em  um arquivo json
        //.then((videos) =>
        videos.forEach((video) => {
            if(video.categoria == "") {
                throw new Error("Vídeo sem categoria");
            }
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
        // Serve para pegar possiveis erros
        // .catch((error) => {
        //     containerVideos.innerHTML = `<p>Houver um erro ao carregar os vídeos: ${error}</p>`;
        // })
    // Captura o erro e é executado quando há um erro
    } catch(error) {
        containerVideos.innerHTML = `<p>Houver um erro ao carregar os vídeos: ${error}</p>`;
    // Executa independente do código ter um erro ou não
    } // finally {
        // alert('Isso sempre acoentece');
    // }

}

buscarEMostrarVideos();

