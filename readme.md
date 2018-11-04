# repos

Uso este micro serviço para listar meus projetos no Github, pode ser configurado e executado em uma plataforma como o [ZEIT](https://zeit.co/) por exemplo. O sistema de cache para melhorar o tempo de resposta do serviço pode ser configurado na seção ```repo``` do arquivo ```package.json```:

```json
"repo": {
	"username": "alexandrejunqueira",
	"duration": "10"
}
```

**Configurações:**

* username: usuário Github
* duration: duração do cache em minutos


MIT © [Alexandre Junqueira](https://alexandrejunqueira.com)

