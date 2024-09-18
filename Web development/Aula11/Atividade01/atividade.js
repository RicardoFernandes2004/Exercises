// Atualiza a lista ao carregar a página
window.onload = function() {
    visualizarLista();
};

// Permite adicionar o item ao pressionar a tecla Enter
document.getElementById('item').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        salvarItem();
    }
});

function salvarItem() {
    const item = document.getElementById('item').value.trim();

    if (item !== '') {
        try {
            let lista = JSON.parse(localStorage.getItem('lista')) || [];
            lista.push(item);
            localStorage.setItem('lista', JSON.stringify(lista));
            document.getElementById('item').value = '';
            visualizarLista(); // Atualiza a lista automaticamente
        } catch (error) {
            console.error('Erro ao salvar o item:', error);
        }
    }
}

function visualizarLista() {
    const lista = JSON.parse(localStorage.getItem('lista')) || [];
    const listaHtml = document.getElementById('lista');
    listaHtml.innerHTML = '';

    lista.forEach((item, index) => {
        const li = document.createElement('li');

        // Elemento span para o texto do item
        const span = document.createElement('span');
        span.textContent = item;

        // Botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btn-remover');
        btnRemover.onclick = function() {
            removerItem(index);
        };

        li.appendChild(span);
        li.appendChild(btnRemover);
        listaHtml.appendChild(li);
    });
}

function removerItem(index) {
    try {
        let lista = JSON.parse(localStorage.getItem('lista')) || [];
        lista.splice(index, 1);
        localStorage.setItem('lista', JSON.stringify(lista));
        visualizarLista(); // Atualiza a lista após remoção
    } catch (error) {
        console.error('Erro ao remover o item:', error);
    }
}

function limparLista() {
    localStorage.removeItem('lista');
    document.getElementById('lista').innerHTML = '';
}
