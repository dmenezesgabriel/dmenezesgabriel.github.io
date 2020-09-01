var store = [{
        "title": "Você conhece a origem do \"Hello World!\"?",
        "excerpt":"Tradicionalmente, programas Olá, Mundo! são utilizados para demonstrações no desenvolvimento de programas, assim como para assegurar que tanto uma linguagem como o sistema operacional estão funcionando corretamente.   Geralmente estes programas são os primeiros desenvolvidos por novos programadores, porque mesmo com pouca ou nenhuma experiência são fáceis para se executar, e por sua simplicidade são utilizados para garantir que os componentes de uma linguagem (seu compilador, ambiente de desenvolvimento e tempo de execução) foram instalados corretamente.   Estes programas também são utilizados pelos hackers como prova de conceito de que um código arbitrário pode ser executado por meio de um exploit onde os designers do sistema não pretendiam que o código pudesse ser executado.   Outro uso popular do Olá, Mundo! é como base de comparação de tamanho do executável que a linguagem gera e quanta infraestrutura de suporte deve existir por trás do programa para que este seja executado.   Mas de onde, ou melhor, quando tudo isso começou?   Brian Kernighan, autor de um dos livros de programação mais lidos, “C Programming Language”, também criou Hello, World. Ele fez referência pela primeira vez a Hello World no predecessor do livro C Programming Language: A Tutorial Introduction to the Programming Language B publicado em 1973.   main( ) { extrn a, b, c; putchar(a); putchar(b); putchar(c); putchar(’!*n’); } 1 ’hell’; b ’o, w’; c ’orld’;   Infelizmente, Kernighan não consegue identificar com certeza quando ou por que escolheu as palavras “Olá, Mundo!”. Quando questionado sobre o que gerou a ideia do nome “Olá, Mundo” em uma entrevista para a Forbes Índia, ele disse que sua memória está turva.      “O que me lembro é que vi um cartoon que mostrava um ovo e um pintinho e o pintinho dizia:“ Olá, mundo ”.    E você, já escreveu seu Olá, Mundo! ou melhor, seu Hello, World! hoje?   def hello():     print('Hello World!') ","categories": ["Programação"],
        "tags": ["Python","Programação","Curiosidades"],
        "url": "https://dmenezesgabriel.github.io/programa%C3%A7%C3%A3o/origens-do-hello-world/",
        "teaser": "https://dmenezesgabriel.github.io/assets/images/fallback-teaser.jpeg"
      },{
        "title": "Git: Manual de sobrevivência do iniciante",
        "excerpt":"  O que é o Git?  O Git é um sistema de controle de versão distribuído, criado por Linus Torvalds, nada mais nada menos que o criador do linux. Um software que tem por objetivo gerenciar diferentes versões no desenvolvimento de um documento qualquer, comumente utilizado no desenvolvimento de software para controlar diferentes versões dos códigos fonte e de sua documentação.   Diferente das outras opções de sistemas similares como o CSV e SVN, a arquitetura do git é descentralizada, ou seja, não existe um repositório oficial, apesar de existir esta possibilidade, então em cada repositório incluindo o da maquina do contribuidor, existira uma cópia completa e funcional, permitindo a utilização das operações do Git sem a necessidade de estar online.   Quando se trata de trabalho em equipe, e a maior parte do tempo as equipes estarão trabalhando em paralelo, um sistema como o Git se torna mais do que essêncial, para que não hajam conflitos entre as alterações realizadas por cada colaborador.   Também é comum que no constante desenvolvimento dos projetos hajam alterações que comprometam o seu funcionamento, neste caso o Git permite que essas alterações sejam revertidas de maneira rápida e simples.   Como isso funciona?  O Git trabalha em uma estrutura de ramificações, onde cada alteração de código cria um novo ponto na ramificação atual, essas ramificações, mais conhecidas como branchs são criadas no desenvolvimento de novas funcionalidades, e baseadas em branchs já existentes.   Cada contribuidor faz uma cópia local do repositório remoto original e cria as modificações necessárias, essa cópia será enviada novamente para o repositório remoto.   Passos no fluxo de contribuição de um projeto utilizando Git:      Clonar o repositório para que uma cópia contendo todos os arquivos originais esteja disponível localmente.     git clone &lt;HTTPS ou SSH&gt;           Criar uma branch, onde podemos alterar os arquivos do projeto sem interferir nos arquivos originais     git branch &lt;nome da ramificação (branch)&gt; # Alterar para a ramificação criada git checkout &lt;nome da ramificação (branch)&gt;           Conforme vamos criando e modificando os arquivos, adicionamos essas modificações     git add -p           E as dividimos em commits, é importante que a descrição do commit seja objetiva e clara quanto ao motivo das alterações, remoções ou inclusões, porque ela ficará salva no histórico das alterações.     git commit          Caso seja necessário realizar alguma alteração posterior ao primeiro commit já realizado, é possível adicionar as novas alterações e utilizar o comando:      git commit --amend           Uma vez que todas alterações forem finalizadas, vamos enviar a nossa branch contendo todas as alterações de volta para o repositório remoto, para que ela fique disponível para os demais contribuidores do projeto poderem ver e alterar.     git push --set-upstream origin &lt;nome da ramificação (branch)&gt;          Caso você tenha adicionado alterações posteriores, basta utilizar o seguinte comando:      git push --force with lease                Então é aberto um Pull Request, onde você pede ao dono do repositório que suas contribuições sejam incluídas nele.       Geralmente após a revisão das modificações ser realizada por algum dos outros contribuidores, você pode dar o merge que atualizara o repositório original com as suas modificações.   Comandos mais utilizados   Iniciando um repositório  git init   Buscar e aplicar modificações do repositório remoto no repositório local  git pull --prune   A flag --prune deleta branchs locais cujas modificações já foram aplicadas na branch original. Algumas vezes essas modificações podem gerar conflitos que necessitam de interação humana para serem corrigidos.   Resetando um commit   git reset --soft HEAD~1   A flag --soft garante que as alterações desfeitas sejam preservadas. Após executar o comando, você encontrará as mudanças como modificações locais não confirmadas em sua cópia local.   Se você não quiser manter essas alterações, simplesmente use a flag --hard. Faça isso apenas quando tiver certeza de que não precisa mais dessas alterações.   git reset --hard HEAD~1   Removendo um arquivo da área de staging ou desfazendo um git add  git reset &lt;nome do arquivo&gt;   Rebase  As modificações que você está fazendo em sua branch local podem ficar defasadas em relação ao repositório remoto, então é possível alterar a base de sua ramificação local para a mais atual com o comando rebase.   git rebase origin/master   Histórico de commits:   git log --graph --all --decorate --oneline      log: Mostra o histórico de commits.   --all: Apresenta todas referências.   --graph: Cria uma representação gráfica do histórico de commits.   --decorate: Traz o nome da referência para cada commit mostrado.   --oneline: Esta é uma abreviação para --pretty=oneline --abbrev-commi.   Deletar branchs locais cujas modificações já foram aplicadas ao repositório remoto “master”   git branch --merged | egrep -v \"(^\\*|master|dev)\" | xargs git branch -d      branch: Listar, criar ou deletar ramificações.   --merged: Ramificações as quais suas modificações já foram aplicadas ao repositório original.    | : Sequência de um ou mais comandos.   egrep: Mostrar linhas que correspondem a um padrão.   -d, --delete: Deletar ramificação.   Arquivar modificações  git stash   Mostrar diferenças entre as modificações armazenadas e a ramificação atual  git stash show -p      stash: Arquivar as alterações.   show: Mostrar as alterações arquivadas e suas diferenças em relação a ramificação original.   -p, --patch: Seleciona as diferenças entre o ponteiro HEAD e a branch atual.   O que é GitHub  Enquanto o Git é um sistema de versionamento, o GitHub é uma plataforma para criação de repositórios remotos Git, possibilitando que outras pessoas possam clonar esse repositório localmente, realizar alterações e enviar essas alterações de volta ao repositório remoto.   Alternativas     GitLab   BitBucket   Referências     Explain Shell  ","categories": ["Git"],
        "tags": ["Git","Github","Iniciante","Comandos"],
        "url": "https://dmenezesgabriel.github.io/git/git-manual-de-sobrevivencia-do-iniciante/",
        "teaser": "https://dmenezesgabriel.github.io/assets/images/git-log.jpeg"
      },{
        "title": "Como monitorar fluxos de negócios digitais",
        "excerpt":"Já faz algum tempo que venho trabalhado no desenvolvimento de monitoramentos, e quando digo monitoramentos a primeira imagem que costuma-se visualizar é a de diversos monitores com indicadores em tempo real, mensurando evoluções e declínios históricos, e o observador em sua busca de encontrar uma movimentação de uma linha tão acentuada que lhe chame a atenção. Já a segunda imagem é o monitoramento de métricas de infraestrutura, por exemplo, acompanhamento de logs de aplicação em ferramentas como LogEntries e Datadog ou a stack ELK.   O que eu realmente tenho feito não é nada disso, quero dizer, tem um pouco disso. O que monitoro são regras de negócio, em um provedor de serviços de pagamento, claro assim como em outros meios, precisamos garantir a integridade das informações e do comportamento de nossas ferramentas, afinal erros humanos são possíveis e prováveis, e dívidas técnicas de produto, inevitáveis.   Também não é necessário acompanhar a alteração das curvaturas em um monitor, temos uma aplicação interna construída em python, algo próximo de um agendador/orquestrador que irá disparar um alerta apenas quando for necessária a tomada de ação.   Hoje existem monitoramentos que verificam queda de conversão, comportamentos inesperados em outros players do fluxo de pagamentos, integridade de diversos serviços internos e fluxos financeiros. Mas a quais características devemos nos atentar para sermos eficientes?   Um monitoramento deve possuir um dono  Quando é encontrado algum problema, é necessário que haja uma pessoa, um time, ou times de pessoas responsáveis para soluciona-lo, se não é algo crítico que necessite de resolução ou que seja possível de resolver, não há motivo de tirar a atenção das pessoas de outras tarefas mais relevantes.   O problema monitorado precisa de um fluxo de resolução definido  Quando nos depararmos com um alerta, eu vou olhar para você, você vai olhar para mim e o que vamos fazer? Está não é a situação na qual queremos nos encontrar uma vez que sabemos o que estamos procurando, é bem provável que se existe um alerta já tenhamos presenciado o cenário do problema anteriormente.   Um monitoramento deve se atentar apenas a um único problema  Quanto mais problemas tentamos cercar em um único monitoramento, ou módulo responsável pela busca de problemas, maior a complexidade, dificuldade de manutenção, revisão e entendimento, não precisamos procurar pelo problema dentro do alerta quando no olho do furacão, não é mesmo? Quanto mais claro e explicito melhor!   Foco na performance  A ferramenta que você utiliza é performática o suficiente para conseguir buscar pelo problema que você está buscando? Ela consegue percorrer o volume de dados necessário, e também no tempo necessário para que as pessoas certas sejam mobilizadas para atacar o prolema antes que ele se torne crítico, ou não seja mais passível de solução?   Assertividade  Você conhece a história do menino e lobo? Havia um menino que morava com sua familia nas entranhas bosque, onde habitavam alguns animais selvagens. Certo dia esse menino resolveu pregar uma peça em seu irmão mais velho, adentrou em meio as arvores e gritou:   \"Socorro, socorro, há um lobo tentando me devorar!\"   Seu irmão empunhou um machado e correu em sua direção, mas para a sua surpresa não havia lobo algum. O menino então caiu na gargalhada e essa cena se repetiu mais algumas vezes, até que seu irmão não mais apareceu, mas o lobo faminto sim.   Em algum momento a alta incidência de falsos positivos fará com que os alertas percam a credibilidade e não recebam a devida atenção.   Por onde começar?     Entenda o real problema por qual você está buscando, uma vez que tenha isso claro fica fácil de encontra-lo uma vez que aparecer.   Garanta que o problema tenha um dono, responsável pela resolução.   Faça uma análise histórica para definir que de fato, os gatilhos que irão disparar o alerta serão assertivos. Muitas vezes estática básica pode ser uma solução simples e eficiente.   Teste, faça mocks e se assegure que tudo está funcionando corretamente antes de ir para produção, uma revisão também é sempre bem vinda, e também necessária.   Garanta que as pessoas certas, estão recebendo os alertas no momento certo.   Atente-se a edge cases, muitas vezes eles vão intervir na incidência tanto de falsos positivos como falsos negativos.   Faça um acompanhamento da efetividade dos alertas, extraia métricas, verifique se os resultados foram os esperados, assim como os problemas detectados com uma baixa incidência de falsos positivos.   Pense em escala, em algum momento poderá haver diversos problemas mapeados e a sua ferramenta pode não suportar buscar por todos eles.   Peça feedbacks dos consumidores dos monitoramentos, algum fluxo pode ter sido alterado e seu monitoramento precisará de uma atualização.   Não se esqueça que as visualizações de indicadores são complementares aos alertas, e também são ferramentas muito úteis para auxiliar o usuário final na investigação.  ","categories": ["Telemetria"],
        "tags": ["Monitoramento","Python"],
        "url": "https://dmenezesgabriel.github.io/telemetria/como-monitorar-fluxos-digitais/",
        "teaser": "https://dmenezesgabriel.github.io/assets/images/alert.jpeg"
      }]
