## Instalação

```sh
sudo apt install vim
```

## Criar arquivo

```sh
vim file.txt
```

## Modo de edição

### Edição no ponto atual do cursor

Tecle `i`

### Edição um carácter após o cursor

Tecle `a`

### Edição no final de uma linha

Tecle `A`

### Edição na linha posterior

Tecle `o`

### Posicionar cursor no inicio da linha

Tecle `^`

### Copiar linha

> Yank

Tecle `yy`

### Copiar uma única palavra da linha

Tecle `yw`

### Copiar da posição do cursor ao final da linha

Tecle `y$`

### Copiar da posição do cursor ao inicio da linha

Tecle `y^`

### Colar linha

> Paste

Tecle `p`

### Apagar linha

> Delete

Tecle `d`

### Apagar uma única palavra da linha

Tecle `dw`

### Apagar da posição do cursor ao final da linha

Tecle `d$`

### Apagar da posição do cursor ao inicio da linha

Tecle `d^`

### Desfazer última alteração

> Undo

Tecle `u`

## Modo de comandos

- Pressione `ESC`, caso esteja no modo de edição

### salvar

- Pressione `:`
- Digite `w`
- Tecle `ENTER`

_para salvar e sair, digite wq_

### sair do editor

- Pressione `:`
- Digite `q`
- Tecle `ENTER`

_para sair sem salvar, digite q!_

### Habilitar número de linhas

- Pressione `:`
- Digite `set nu`
- Tecle `ENTER`

### Ir a determinada linha

- Pressione `:`
- Digite `<numero_linha>`
- Tecle `ENTER`

### Copiar número específico de linhas

- Pressione `:`
- Digite `<numero_linhas>yy`
- Tecle `ENTER`

### Apagar número específico de linhas

- Pressione `:`
- Digite `<numero_linhas>dd`
- Tecle `ENTER`

### Buscar palavra

- Pressione `/`
- Digite `<palavra>`
- Tecle `ENTER`

_n para ir a próxima ocorrência e N para voltar a anterior_

### Substituir

- Pressione `:`
- Digite `%s<texto_atual>/<novo_texto>/gc`
- Tecle `ENTER`

- g: global, ou seja, para todas ocorrências e não apenas a primeira.
- c: pede confirmação.
