# Desafio Smartfit

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

# Desafio Frontend - Smart Fit

![Smart Fit](./src/assets/images/svg/logo.svg)

## 📖 Sobre o desafio

A Smart Fit, atuando no segmento de fitness, passou por várias mudanças durante a pandemia. Foi necessário desenvolver uma página para buscar unidades abertas ou fechadas para consulta e reserva. 

Neste desafio, foi implementado as seguintes funcionalidades de acordo com as regras de negócio definidas:

### Funcionalidades
[x] Carrega unidades através do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) utilizando o método `GET`.

[x] Busca por todas as unidades.

[x] Busca por unidades com filtros.

[x] Previsão do número de resultados encontrados.

[x] Listagem das unidades encontradas após a busca.

### Regras de negócio
- Filtra unidades abertas ou fechadas.
- Filtra unidades por período de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados.
- Valida e exibe os ícones corretos de acordo com o status da unidade.

## 🎨 Layout

O layout da aplicação foi baseado nos materiais disponibilizados, incluindo designs para dispositivos móveis e desktop, cores, imagens e fontes. A fidelidade ao layout proposto foi mantida, e a aplicação é responsiva para dispositivos móveis, tablets e desktops.

## ⚙️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
  git clone https://github.com/alexandrealvees/desafio-smartfit.git
  cd desafio-smartfit

```

2. Instale as dependências

```bash
  npm install
```

3. Inicie a aplicação

```bash
  npm start
```

## 🖼️ Imagens

### Tela Inicial
![Encontrar_Unidades](./src/assets/images/imagens_projeto/tela_inicial.png)


### Encontrar Unidades
![Encontrar_Unidades](./src/assets/images/imagens_projeto/encontrar_unidades.png)


## Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.
