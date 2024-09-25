document.addEventListener('DOMContentLoaded', function() {
    const carrinhoItens = document.getElementById('carrinho-itens');
    const fazerPedidoBtn = document.getElementById('fazer-pedido');
    let carrinho = [];

    // Função para adicionar itens ao carrinho
    document.querySelectorAll('.add-carrinho').forEach(button => {
        button.addEventListener('click', function() {
            const item = this.getAttribute('data-item');
            const preco = this.getAttribute('data-preco');

            // Adiciona o item ao carrinho
            carrinho.push({ item, preco });
            atualizarCarrinho();
        });
    });

    // Função para atualizar a lista de itens no carrinho
    function atualizarCarrinho() {
        carrinhoItens.innerHTML = ''; // Limpa a lista antes de atualizar

        carrinho.forEach((produto, index) => {
            const li = document.createElement('li');
            li.textContent = `${produto.item} - R$ ${produto.preco}`;
            carrinhoItens.appendChild(li);
        });
    }

    // Função para efetuar o pedido
    fazerPedidoBtn.addEventListener('click', function() {
        const mesa = document.getElementById('mesa').value;
        if (carrinho.length === 0) {
            alert('Adicione itens ao carrinho antes de fazer o pedido!');
            return;
        }

        // Exibir um resumo do pedido
        alert(`Seu pedido foi enviado para a mesa ${mesa}. Por favor, pague no caixa.`);
    });
});
