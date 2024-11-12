// Exemplo simples de como carregar novas notícias dinamicamente (simulação)
document.addEventListener('DOMContentLoaded', function() {
    const noticiasContainer = document.querySelector('.noticias');

    // Função para adicionar uma nova notícia
    function adicionarNoticia(titulo, conteudo) {
        const artigo = document.createElement('article');
        artigo.classList.add('noticia');
        artigo.innerHTML = `
            <h2>${titulo}</h2>
            <p>${conteudo}</p>
            <a href="#">Leia mais...</a>
        `;
        noticiasContainer.appendChild(artigo);
    }

    // Exemplo de como usar a função
    adicionarNoticia('Nova Notícia', 'Aqui está o conteúdo de uma nova notícia adicionada dinamicamente.');
});
