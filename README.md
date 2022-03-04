# Corebiz

<img src="https://img.shields.io/github/last-commit/NataneO/Corebiz?color=%23D9EBDF&label=Last%20commit&logo=github&logoColor=%23D9EBDF"/>

Esse projeto foi desenvolvido como teste para vaga na empresa Corebiz.
Para esse teste foi solicitado o desenvolvimento de SPA enviada pela empresa utilizando ReactJS.
Abaixo, estão listadas as instruções para execução.

# Seja bem-vindo(a) #
### Esse projeto pode ser acessado de duas formas : você pode acessá-lo <a target="_blank" href="https://optimistic-yonath-81cc14.netlify.app">clicando aqui</a> ou rodá-lo na sua máquina executando os passos listados abaixo. ###

### 1. Como compilar e executar?  ###
#### Caso escolha rodar localmente será necessário, primeiramente, clonar o projeto para sua máquina. Para isso, no terminal acesse a pasta onde deseja clonar o projeto. Após acessar, utilize o seguinte comando : ####

```sh
git clone https://github.com/NataneO/Corebiz.git
```

#### *Oba!* O projeto já está na sua máquina. Agora é necessário acessar a pasta correspondente. Você pode acessá-la com o seguinte comando ####

```sh
cd Corebiz
```

#### Agora é necessário instalar as dependências do projeto. Para isso, utilize o comando

```sh
npm install
```

## Pronto! ##
#### O projeto está instalado na sua máquina. Agora, sempre que quiser rodá-lo, você utilizará o comando 

```sh
npm run dev
```

### 2. Beleza. Rodei o projeto, e agora? ###

#### Como é um projeto desenvolvido para fins de teste, não conta com uma gama muito grande de funcionalidades. Contudo, há pontos a se atentar: ####
1. Ao clicar no botão *Comprar* no caroussel de produtos, um novo produto é adicionado ao carrinho. Esse valor é armazenado no LocalStorage, então, mesmo que a página seja atualizada o valor se mantém.
2. Todos os dados de produtoes são consumidos da API (aqui, com o Axios).
3. Ao clicar em *Eu quero!* no scroll de newsletter, os dados são passados para outra API (aqui, com o Fetch).

No desenvolvimento foram utilizadas as seguintes tecnologias: ReactJs, Reack Hooks, ContextAPI, StyledComponents, ReactSlick, Vite, Axios, etc. O projeto também está hospedado no Netlify.


### 2. Tá ok. E os testes? ###
#### Esses ainda estão em desenvolvimento. Volte em breve! ####

## O projeto ainda está em fase de melhorias. Sinta-se a vontade para contribuir! ##

