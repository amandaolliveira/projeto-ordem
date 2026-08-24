O objetivo é praticar a criação de repositórios, organização de diretórios, uso de branches, commits, Pull Requests, merge e resolução de conflitos.

Projeto
Cada equipe deverá criar o projeto .
A aplicação deverá permitir:
Adicionar tarefas.
Exibir uma lista de tarefas.
Marcar tarefas como concluídas.
Exibir uma mensagem quando não houver tarefas cadastradas.
O projeto pode ser desenvolvido utilizando HTML, CSS e JavaScript. Não é necessário utilizar banco de dados.
Formação das equipes
Formem grupos de .
Um integrante deverá criar o repositório no GitHub e adicionar os demais membros como colaboradores.
Todos os integrantes devem participar do desenvolvimento e possuir registros próprios de commits e Pull Requests.
Estrutura mínima do projeto
O repositório deverá conter a seguinte estrutura:



taskflow-equipe-X/

├── README.md

├── .gitignore

├── docs/

│ └── requisitos.md

├── src/

│ ├── index.html

│ ├── css/

│ │ └── style.css

│ └── js/

│       └── app.js

└── assets/

    └── img/

Organização da equipe
Cada integrante deverá assumir inicialmente uma das responsabilidades abaixo:
Integrante 1: criar o repositório, organizar os diretórios, criar o arquivo README.md e o .gitignore.
Integrante 2: desenvolver a interface da aplicação utilizando HTML e CSS.
Integrante 3: desenvolver a lógica da aplicação em JavaScript e criar o documento de requisitos em docs/requisitos.md.
Regras de desenvolvimento
Cada integrante deve trabalhar em uma branch própria.
Cada integrante deve realizar, no mínimo, .
Os commits devem possuir mensagens claras e descritivas.
Após o commit inicial, não será permitido realizar alterações diretamente na branch main.
Todas as alterações devem ser integradas à main por meio de Pull Requests.
Cada Pull Request deverá ser revisado por pelo menos um integrante da equipe antes do merge.
Cada integrante deverá participar da revisão de pelo menos um Pull Request de outro colega.
Exemplos de mensagens de commit:



chore: cria estrutura inicial do projeto 
feat: cria formulário de cadastro de tarefas 
style: adiciona estilos da tela inicial 
feat: implementa adição de tarefas
docs: adiciona requisitos do sistema 
fix: resolve conflito no README

Desafio obrigatório: conflito de merge
A equipe deverá criar e resolver pelo menos um conflito de merge.
Para isso, dois integrantes devem alterar a mesma linha do arquivo README.md, preferencialmente na seção de tecnologias utilizadas. Cada alteração deve ser realizada em uma branch diferente.
Após o merge de um dos Pull Requests, o segundo Pull Request deverá apresentar conflito. A equipe deverá resolver o conflito, realizar um novo commit e concluir o merge.

Entrega
A entrega deverá conter:
Link do repositório no GitHub.
Nome completo dos integrantes da equipe.
Breve descrição da participação de cada integrante.
Evidência dos Pull Requests realizados.
Evidência da resolução do conflito de merge.
Projeto funcionando no navegador.
Arquivo README.md completo e atualizado.
Critérios de avaliação
Organização do repositório e estrutura de diretórios: 2,0 pontos.
Uso de branches e commits individuais: 2,0 pontos.
Desenvolvimento da interface e funcionalidades: 2,0 pontos.
Uso de Pull Requests, revisão e merge: 2,0 pontos.
Resolução de conflito de merge: 1,0 ponto.
Qualidade do README e da documentação: 1,0 ponto.
Total: 10,0 pontos.

Perguntas de reflexão
Respondam no arquivo README.md ou criem o arquivo docs/reflexao.md:Qual foi a principal vantagem de utilizar branches?Por que os Pull Requests são importantes em projetos colaborativos?Como acontece um conflito de merge?Como a equipe resolveu o conflito encontrado?Qual prática de GitHub a equipe considera mais importante em projetos maiores?

será avaliada a participação individual de cada integrante por meio do histórico de commits, branches, Pull Requests e revisões no GitHub.