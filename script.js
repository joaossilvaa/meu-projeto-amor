document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const videoPlayer = document.getElementById("video-player");
    const videoSource = document.getElementById("video-source");
    const imagemModal = document.getElementById("imagem-modal");
    const fechar = document.querySelector(".fechar");

    // Impede qualquer vídeo de ser reproduzido ao carregar a página
    document.querySelectorAll("video").forEach(video => {
        video.pause();
    });

    // Adiciona evento a todos os botões "Assistir"
    document.querySelectorAll(".assistir").forEach(botao => {
        botao.addEventListener("click", function () {
            const carrosselItem = this.closest(".carrossel-item"); // Pega o item do carrossel mais próximo
            const video = carrosselItem.querySelector("video");
            const imagem = carrosselItem.querySelector("img");

            if (video) {
                videoSource.src = video.src; // Atualiza o vídeo com a URL correta
                videoPlayer.load(); // Recarrega o vídeo para garantir que ele funcione
                videoPlayer.style.display = "block";
                videoPlayer.play(); // Inicia o vídeo automaticamente ao abrir
                imagemModal.style.display = "none";
            } else if (imagem) {
                imagemModal.src = imagem.src; // Atualiza a imagem com a URL correta
                imagemModal.style.display = "block";
                videoPlayer.style.display = "none";
            }

            modal.style.display = "flex";
        });
    });

    // Fecha o modal ao clicar no botão "X"
    fechar.addEventListener("click", function () {
        modal.style.display = "none";
        videoPlayer.pause(); // Pausa o vídeo ao fechar
    });

    // Fecha o modal ao clicar fora do conteúdo
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            videoPlayer.pause();
        }
    });
});