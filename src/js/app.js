document.addEventListener('DOMContentLoaded', () => {
  // Captura os elementos com os IDs exatos do HTML
  const formulario = document.getElementById('form-caso');
  const campoCaso = document.getElementById('campo-caso');
  const listaCasos = document.getElementById('lista-casos');
  const mensagemVazia = document.getElementById('mensagem-vazia');

  function atualizarMensagemVazia() {
    if (listaCasos.children.length === 0) {
      mensagemVazia.style.display = 'block';
    } else {
      mensagemVazia.style.display = 'none';
    }
  }

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const textoCaso = campoCaso.value.trim();

    if (textoCaso !== '') {
      const li = document.createElement('li');
      li.textContent = textoCaso;

      li.addEventListener('click', () => {
        li.classList.toggle('resolvido');
      });

      listaCasos.appendChild(li);
      campoCaso.value = '';
      atualizarMensagemVazia();
    }
  });

  atualizarMensagemVazia();
});