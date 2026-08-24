# Reflexão sobre o uso de Git e GitHub no projeto

### 1. Qual foi a principal vantagem de utilizar branches?
A principal vantagem foi a isolação do ambiente de trabalho, cada integrante pode desenvolver sua funcionalidade sem interferir no código do outro.

### 2. Por que os Pull Requests são importantes em projetos colaborativos?
Os Pull Requests funcionam como uma etapa de garantia de qualidade e revisão, eles garantem que nenhuma alteração seja inserida na `main` sem que pelo menos outro membro da equipe revise o código, valide a funcionalidade e evite a introdução de bugs no projeto principal.

### 3. Como acontece um conflito de merge?
Um conflito ocorre quando o Git não consegue unir alterações de branches diferentes de forma automática, isso acontece tipicamente quando dois ou mais desenvolvedores alteram as mesmas linhas de um mesmo arquivo.

### 4. Como a equipe resolveu o conflito encontrado?
O conflito foi gerado intencionalmente na linha 1 do `README.md` entre as branches individuais, ele foi resolvido localmente via terminal ao executar o `git merge origin/main`, identificando as marcações de conflito, unificando o texto final de forma limpa, realizando um novo commit de correção (`fix: resolve conflito no README`) e atualizando o Pull Request.

### 5. Qual prática de GitHub a equipe considera mais importante em projetos maiores?
A proteção da branch principal (`main`) . Essa prática evita commits diretos indesejados e mantém o histórico de produção sempre funcional e auditável.