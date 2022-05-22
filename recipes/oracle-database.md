```sh
docker pull store/oracle/database-enterprise:12.2.0.1-slim
```

```sh
docker run -d -p 1521:1521 --name oracle-db store/oracle/database-enterprise:12.2.0.1-slim
```
