Um programa de computador é algo inerte, porém quando o executamos, ele se torna um processo.

## Listar processos

```sh
ps aux
```

- a: mostra processos de todos os usuários.
- u: exibe lista detalhada contendo o dono do processo.
- x: exibe processos que não estejam associados ao terminal.

## Monitor de processos

```sh
top
```

## Procurando por um processo específico

```sh
ps aux | grep <nome_processo>
```

## Destruir processo

```sh
kill <pid>
```

## Pausar processo

```sh
kill -SIGSTOP <pid>
```

## Continuar processo pausado

```sh
kill -SIGCONT <pid>
```

## Rodar processo em segundo plano

```sh
<nome_processo> &
```
