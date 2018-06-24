# repos

Fiz este micro serviço para exibir no meu [site](https://alexandrejunqueira.com) estático a lista dos meus repositórios públicos no Github, para usá-lo basta clonar este repositório, alterar as configurações no arquivo ```package.json``` e implantá-lo em uma plataforma como o [ZEIT](https://zeit.co/) por exemplo.

Implementei um sistema de cache para otimizar o tempo de resposta do serviço, a duração do cache pode ser configurada.

As configurações estão na seção ```repo``` do arquivo ```package.json```:

```json
"repo": {
	"username": "alexandrejunqueira",
	"duration": "10"
}
```

* username: nome de usuário Github
* duration: duração do cache em minutos


MIT © [Alexandre Junqueira](https://alexandrejunqueira.com)

