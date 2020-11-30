# CSS Flexbox

## O que vamos aprender?
Iremos aprender sobre CSS Flexbox.

Flexbox é uma maneira mais eficiente de organizar o layout do que as que você aprendeu até agora. Além disso, ele é capaz de conferir flexibilidade ao seu layout, permitindo que ele se adapte a diferentes tamanhos de telas facilmente. Através de suas propriedades, você será capaz de alterar a orientação, alinhamento, tamanho, organização e, até mesmo, o crescimento e encolhimento dos itens para que se adequem ao tamanho de tela disponível.
<br />
<br />

## Você será capaz de:
* Utilizar o Flexbox para alterar o comportamento de containers e items.
* Utilizar o Flexbox para criar layouts flexíveis.
<br />
<br />

## Porque isso é importante?
Como pessoa desenvolvedora para web você precisará desenvolver softwares que funcionem adequadamente em dispositivos que acessam a internet. Computadores, laptops, tablets e smartphones possuem telas de tamanhos muito variados, o que pode fazer com que um site não responsivo traga uma experiência ruim para a pessoa que o acessa.

Para resolver esses problemas, o flexbox é uma ferramenta poderosa, capaz de organizar e adaptar suas páginas a diferentes telas facilmente.
<br />
<br />

## Conteúdos
### **O que é o CSS Flexbox**
Antes de partir para as propriedades do flexbox, você deve saber que os alinhamentos que verá a seguir são baseados em eixos. Por padrão, o eixo principal (main axis) é o horizontal, e o eixo transversal (cross axis) é o vertical. É importante atentar que esses eixos não são imutáveis, podendo ser trocados, como você verá a seguir.

![Flexbox: axis](https://miro.medium.com/max/1183/1*ubDrM-3m22gLF_pZ4DCdMw.png)

Além disso, as propriedades do flexbox estão divididas entre as que pertencem aos flex-containers e as que pertencem aos flex-itens.

Um container é qualquer elemento HTML que possua elementos-filhos, como uma \<div>, e para torná-lo um flex container, basta adicionar a ele a propriedade do CSS **display: flex;**. Já um flex-item é o elemento-filho de um flex container.

Vamos começar a ver as propriedades dos flex-containers.
<br />
<br />

### **Flex-direction, flex-wrap e flex-flow**
A propriedade ***flex-direction*** tem o poder de trocar o eixo principal do flex-container pelo transversal. Para tal, possui quatro possíveis valores: **row** (em linha, é o valor padrão com eixo principal sendo horizontal), **column** (em coluna, torna o eixo vertical em principal), além de **row-reverse** e **column-reverse**. Estes dois últimos são o modo reverso de linha e de coluna, em que o preenchimento do container pelos flex-items começa do fim para o início.

O ***flex-wrap*** determina se o flex-container permitirá quebra de linha entre seus itens-filhos. Esta propriedade possui três possíveis valores: **nowrap** (valor padrão, não permite quebra), **wrap** e **wrap-reverse**. Os dois últimos permitem a quebra, sendo que o wrap-reverse a faz em modo reverso.

Já o ***flex-flow*** é uma propriedade que une as duas anteriores. Este funciona como um atalho, possuindo os mesmos valores atribuídos e funcionamento. Para utilizá-lo basta chamar a propriedade **flex-flow** seguida pelo valor desejado para o **flex-direction** e então o valor para o **flex-wrap**.
<br />
<br />
<br />
Copie o código abaixo e cole no seu VS Code para fazer os exercícios de fixação.

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Flexbox: Exercícios de fixação</title>
  <style>
    section {
      border: 1px solid green;
      width: 200px;
      display: flex;
      
    }
    h1 {
      background-color: lightgreen;
      line-height: 50px;
      margin: 5px;
      text-align: center;
      width: 50px;
    }
  </style>
</head>
<body>
  <section>
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>4</h1>
    <h1>5</h1>
  </section>

    <!-- Exercícios de fixação:
     1 - Inverta a ordem dos números
     2 - Organize os números em coluna
     3 - Experimente deixar os números em linha novamente e quebrar o conteúdo utilizando flex-flow
    -->
</body>
</html>
```
<br />
<br />

### **Justify-content, align-items e align-content**
A propriedade ***justify-content*** define como os flex-items ficarão posicionados no eixo principal do flex-container. Os possíveis valores são **flex-start** (que é o valor padrão), **flex-end**, **center**, **space-between** e **space-around**, como exemplificado na imagem a seguir:

<img src="https://user.oc-static.com/upload/2018/06/14/15289918266602_2.png" alt="Justify-content e align-items" width="70%">
<br />
<br />

Por outro lado, o ***align-items*** define o posicionamento dos flex-items no eixo transversal. Pode assumir os valores **stretch** (padrão, que estica os items para que tenham o mesmo tamanho entre si), **baseline** (que alinha os items de acordo com a base do seu texto) e os valores já vistos **flex-start**, **flex-end** e **center**.

Temos ainda o ***align-content***, que alinha flex-items no eixo transversal *quando há mais de uma linha*. Seus valores são **stretch** (padrão), **flex-start**, **flex-end**, **center**, **space-between** e **space-around**. Estes valores se comportam da mesma forma que os vistos anteriormente, mas no eixo transversal.
<br />
<br />
<br />
Copie o código abaixo e cole no seu VS Code para fazer os exercícios de fixação.
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Flexbox: Exercícios de fixação</title>
  <style>
    section {
      height: 150px;
      border: 1px solid blue;
      display: flex;
      
    }
    h1, h2, h3, h4, h5 {
      background-color: lightblue;
      margin: 5px;
      text-align: center;
      width: 50px;
    }
  </style>
</head>
<body>
  <section>
    <h1>1</h1>
    <h2>2</h2>
    <h3>3</h3>
    <h4>4</h4>
    <h5>5</h5>
  </section>

    <!-- Exercícios de fixação:
     1 - Experimente diferentes valores para a propriedade justify-content e veja como ela se comporta.
     2 - Agora, faça o mesmo com align-item.
     3 - Por fim, altere o width da section para 200px, adicione o flex-wrap: wrap e experimente diferentes valores para align-content.
    -->
</body>
</html>
```
<br />
<br />

### **Flex-items: propriedades**
Até agora, você viu como alterar o comportamento de flex-containers, agora verá como alterar as propriedades dos flex-items individualmente.

***Order*** determina a ordem em que os flex-items serão expostos. Pode ser utilizado para alterar a ordem de elementos previamente definida pelo código HTML, mas sem alterar o mesmo. Seu valor é numérico, tendo por padrão zero, e ordenando do menor para o maior, como visto a seguir:

![Order](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9f71n3qnyF0pkO6ImFGWTak8UmC0zcCBvYQ&usqp=CAU)

***Align-self*** utiliza os mesmos valores vistos (**flex-start**, **flex-end**, **center**, **stretch** e **baseline**) para alterar o comportamento do item especificado no eixo transversal. O item 

***Flex-basis*** define o tamanho inicial do elemento antes que ele sofra ajustes para se acomodar melhor ao espaço disponível. Seu valor pode ser dado em comprimento (px, %, rem, etc) ou como auto, que é o valor padrão.

***Flex-grow*** e ***flex-shrink*** determinam como o item vai crescer ou reduzir, se necessário, em relação aos outros itens do container. Seu valor é numérico e positivo, tendo como *valor padrão 0 no caso do flex-grow, e 1 para o flex-shrink*. Abaixo você verá dois gifs que ajudarão a compreender esses conceitos.

***Flex*** é o atalho para as três últimas propriedades. Para utilizá-lo, basta chamar a propriedade **flex** e adicionar os valores para **flex-grow** (que é obrigatório), seguido pelos valores opcionais para **flex-shrink** e **flex-basis**. O valor padrão deste atalho é 0 1 auto;

![Flex-grow - FreeCodeCamp](https://cdn-media-1.freecodecamp.org/images/duNzzISFc-oJJ4pFXr9OvCNwF46JawATpzrx)
![Flex-shrink - FreeCodeCamp](https://cdn-media-1.freecodecamp.org/images/RITwrqDlcobhm-nFslcJ4ItB3yXdJbXNcAjy)
<br />
<br />

## Exercícios

<br />
<br />

## Recursos Adicionais
* [Flexbox Froggy - Um jogo para aprender CSS Flexbox](http://flexboxfroggy.com/#pt-br)
* [CCS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Origamid - Flexbox Guia Completo](https://origamid.com/projetos/flexbox-guia-completo/)
* [CSS FlexBox: Um Guia Visual](https://www.alura.com.br/artigos/css-guia-do-flexbox)
* [Flexbox](https://desenvolvimentoparaweb.com/css/flexbox/)