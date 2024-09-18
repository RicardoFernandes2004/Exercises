// Função para adicionar um produto ao carrinho
function adicionarProduto(id, nome, valor, quantidade) {
    // Obter os produtos do localStorage ou criar um novo array vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adicionar o novo produto ao array
    carrinho.push({ id, nome, valor, quantidade });

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
// Função para remover um produto do carrinho
function removerProduto(id) {
    // Obter os produtos do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));

    // Filtrar os produtos, removendo o produto com o id especificado
    carrinho = carrinho.filter(produto => produto.id !== id);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
// Função para exibir os produtos do carrinho
function exibirCarrinho() {
    // Obter os produtos do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));

    // Verificar se o carrinho está vazio
    if (carrinho && carrinho.length > 0) {
        // Exibir os produtos em um elemento HTML (ajuste conforme sua estrutura HTML)
        const listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = '';

        carrinho.forEach(produto => {
            const li = document.createElement('li');
            li.textContent = `${produto.nome} - Quantidade: ${produto.quantidade} - Valor: R$ ${produto.valor.toFixed(2)}`;
            listaProdutos.appendChild(li);
        });
    } else {
        // Exibir a mensagem de carrinho vazio
        const listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = 'O carrinho está vazio!';
    }
}
// Inicialização da aplicação: verificar se há produtos no carrinho e exibi-los
exibirCarrinho();