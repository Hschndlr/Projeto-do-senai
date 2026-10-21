function trocarPagina(paginaId) {
    const paginas = document.querySelectorAll('.page-view');
    paginas.forEach(function(pagina) {
        pagina.classList.add('hidden');
    });
    const pagina = document.getElementById(paginaId);
    if (pagina) {
        pagina.classList.remove('hidden');
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function abrirModal(categoria, titulo, descricao, imagemUrl) {
    const modal = document.getElementById('modalAcervo');
    const imgElement = document.getElementById('modalImagem');
    
    document.getElementById('modalCategoria').innerText = categoria;
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalDescricao').innerText = descricao;
    
    if (imagemUrl) {
        imgElement.src = imagemUrl;
        imgElement.alt = titulo;
        imgElement.classList.remove('hidden');
    } else {
        imgElement.src = '';
        imgElement.classList.add('hidden');
    }
    
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function fecharModal(event) {
    if (event && event.target !== event.currentTarget) {
        return;
    }

    const modal = document.getElementById('modalAcervo');
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

function filtrarAcervo() {
    const busca = document
        .getElementById('searchInput')
        .value
        .toLowerCase()
        .trim();

    const tipo = document.getElementById('tipoFilter').value;
    const seculo = document.getElementById('seculoFilter').value;

    const itens = document.querySelectorAll('.item-acervo');

    itens.forEach(item => {
        const texto = item.textContent.toLowerCase();
        const tipoItem = item.dataset.tipo;
        const seculoItem = item.dataset.seculo;

        const correspondeBusca = busca === '' || texto.includes(busca);
        const correspondeTipo = tipo === 'todos' || tipoItem === tipo;
        const correspondeSeculo = seculo === 'todos' || seculoItem === seculo;

        if (correspondeBusca && correspondeTipo && correspondeSeculo) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}