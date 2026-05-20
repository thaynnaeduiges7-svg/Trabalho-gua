const acoes = [
    { icone: '🚰', texto: 'Feche bem a torneira quando não estiver usando'},
    { icone: '🔔', texto: 'Avise logo se perceber um vazamento' },
    { icone: '♻️', texto: 'Reutilize água de limpeza quando possível' },
    { icone: '🥤', texto: 'Use copos ou garrafa reutilizável' },
    { icone: '💬', texto: 'Conte para seus colegas sobre essas dicas' },
    { icone: '🌍', texto: 'Multiplique - cada pessoa influencia outra 5' }
];

const container = document.getElementById('container-acoes');

if (container) {
    for (let i = 0; i < acoes.length; i++) {
        const item = acoes[i];

        const div = document.createElement('div');
        div.className = 'acao-item';

        div.innerHTML = `
            <div class="acao-icone">${item.icone}</div>
            <p class="acao-texto">${item.texto}</p>
        `;

        container.appendChild(div);
    }
}

const form = document.getElementById('formulario-adesao');
const msg = document.getElementById('mensagem-retorno');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.checkValidity()) {
            const nome = document.getElementById('nome').value;
            msg.textContent = `✅ Sucesso, ${nome}! Adesão registrada.`;
            msg.className = 'mensagem-retorno sucesso';
            msg.style.display = 'block';
            form.reset();

        } else {
            msg.textContent = '❌ Preencha os campos corretamente.';
            msg.className = 'mensagem-retorno erro';
            msg.style.display = 'block';
        }
    });
}

 