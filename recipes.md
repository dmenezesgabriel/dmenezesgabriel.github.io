## Acesso remoto a outra maquina

```sh
ssh <nome_usuario>@<nome_host> -p <numero_porta>
```

## Transferências seguras de arquivo

**Host para remoto**:

```sh
scp <caminho_local_arquivo_ou_diretorio> <nome_usuario>@<nome_host>:<caminho_remoto_arquivo_ou_diretorio>
```

**Remoto para host**:

```sh
scp  <nome_usuario>@<nome_host>:<caminho_remoto_arquivo_ou_diretorio> <caminho_local_arquivo_ou_diretorio>
```

## Segurança

### Configurações

`/etc/ssh/sshd_config`

#### Permissões

- allowuser <nome_usuario>
- denyuser <nome_usuario>
- allowgroup <nome_grupo>
- denygroup <nome_grupo>

#### Portas

É possível trocar o número da porta de acesso para que não seja a padrão (22)

### IPS permitidos

```sh
iptables
```

### Port Knocking

A conexão só é liberada após o recebimento de pacotes em uma sequência especifica.
