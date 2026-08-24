# Requisitos do Sistema - Painel de Investigação (Ordem Paranormal)

## 1. Requisitos Funcionais (RF)

* **RF01 - Adicionar Caso Paranormal**: O sistema deve permitir que o usuário digite o texto de um novo caso no campo `campo-caso` e o envie através do formulário `form-caso`.
* **RF02 - Exibir Lista de Casos**: O sistema deve renderizar e exibir visualmente todos os casos cadastrados em uma lista (`lista-casos`), limpando o campo de entrada após a inclusão.
* **RF03 - Alternar Status de Resolução**: Ao clicar em qualquer item da lista, o sistema deve alternar o status do caso para resolvido/concluído (aplicando a classe CSS `resolvido` com efeito riscado/esmaecido).
* **RF04 - Mensagem de Lista Vazia**: O sistema deve exibir a mensagem *"Nenhum caso paranormal pendente no momento. Olhos sempre abertos."* no elemento `mensagem-vazia` sempre que a lista estiver sem itens, ocultando-a quando houver casos cadastrados.

---

## 2. Requisitos Não Funcionais (RNF)

* **RNF01 - Interface e Estilização**: A interface deve possuir um tema escuro (*dark mode*) característico, com fundo escuro (`#121214`), destaques em vermelho (`#d92626`) e indicação visual verde (`#2e7d32`) para casos resolvidos.
* **RNF02 - Arquitetura do Código**: O sistema deve ser desenvolvido utilizando exclusivamente HTML, CSS e JavaScript, mantendo a separação clara de arquivos nas pastas `css/style.css` e `js/app.js`.