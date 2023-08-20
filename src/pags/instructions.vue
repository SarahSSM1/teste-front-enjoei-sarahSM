<template>
  <div class="l-container">
    <span class="l-emoji -hand-wave">👋</span>

    <h1 class="l-title">instruções</h1>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>1.</strong> escolha um desafio com sabedoria
      </h2>

      <p>
        desenhamos uma página para você nos mostrar o que sabe, mas queremos que
        você defina o tamanho do seu desafio.
      </p>

      <p>
        a página em sua forma mais simples é uma listagem de produtos, mas ela
        pode ser incrementada com duas funcionalidades extras: uma paginação dos
        resultados e um campo para filtrar resultados por texto.
      </p>

      <p>
        esperamos que desenvolvedores mais experientes entreguem mais do que o
        básico, mas quem está apenas começando pode se sair bem só com o básico
        feito com muito carinho. não esqueça do prazo combinado e não tente
        abraçar o mundo.
      </p>

      <p>
        você pode encontrar o desenho da página no diretório <em>screens</em>,
        já nomeado por complexidade: (1) carregamento e ]listagem dos produtos,
        (2) paginação dos resultados e (3) um campo de busca para filtrar por
        texto. você também pode
        <a
          href="https://www.figma.com/file/9PC03YiIAtag7VzBPSQG9w/search?type=design&node-id=0%3A1&mode=design&t=cROV5EmwkxHZrcmJ-1"
          target="_blank"
          >abrir as telas no figma</a
        >
        para inspecionar detalhes como cores e espaçamentos. a senha para abrir
        o arquivo no figma é <em>vision-status-signature-card</em>.
      </p>

      <p>
        um detalhe: se você não possui a fonte <em>proxima nova</em> instalada,
        o figma pode sumir com os textos do arquivo—mas eles estão lá, viu! em
        caso de dúvida, use as imagens exportadas que estão na pasta
        <em>screens</em> como a fonte da verdade.
      </p>
    </div>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>2.</strong> analise o código do projeto com olhos de águia
      </h2>

      <p>
        você já deve ter notado que o projeto do teste vem com um pouco de
        código na bagagem. antes de sair batendo teclas, queremos que você dê
        aquela espiada no que já está aí.
      </p>

      <p>
        existem alguns padrões que você pode assimilar e reproduzir no código
        que irá escrever para manter consistência. mas, se encontrar algo que
        não está legal, não se acanhe. você tem toda liberdade para refatorar o
        que quiser e melhorar o resultado final.
      </p>

      <p>
        a API que você vai usar é pública e utilizada na lista de produtos
        favoritos do site e dos apps do enjoei. deixamos uma requisição axios
        simples para você construir em cima. brinque com ela para entender seu
        funcionamento e refatore o que achar necessário. a API vai paginar
        corretamente com o parâmetro "page", mas ela não tem uma funcionalidade
        de busca implementada. para esse exercício, siga como se o parâmetro
        "query" realmente filtrasse os produtos na API.
      </p>
    </div>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>3.</strong> execução nível Space X pousando foguetes
      </h2>

      <p>
        definido o escopo da sua entrega considerando o prazo combinado e
        percebendo bem os padrões do código que entregamos a você, é hora de
        colocar a mão na massa. você irá encontrar no <em>README</em> alguns
        comandos para rodar o projeto enquanto desenvolve.
      </p>

      <p>
        faça com carinho, dê atenção aos detalhes: pra gente um layout bem feito
        é tão importante quanto um código organizado. imagine que o que você
        está fazendo vai ser usado por milhões de pessoas. nesse caso, pra
        deixar claro, não vai: o código do seu teste só será usado para a sua
        avaliação. mas, se você se juntar a gente, esse vai ser o seu dia a dia.
      </p>

      <p>
        como já comentamos, fique livre para mudar o que você acha que pode ser
        melhor. você também pode instalar os packages que achar necessário, sem
        restrições.
      </p>
    </div>

    <div class="l-block">
      <h2 class="l-subtitle">
        <strong>4.</strong> empacote tudo e manda um <del>zap</del> zip
      </h2>

      <p>
        com a página brilhando e tudo finalizado, faça um zip do projeto (sem as
        pastas <em>node_modules</em> e <em>screens</em>, pra ficar levinho) e
        manda pra gente.
      </p>

      <p>
        fique à vontade para escrever uma mensagem no <em>README</em> se quiser
        comentar algum ponto da execução, do próprio teste ou só para dar um alô
        mesmo.
      </p>

      <p>ficamos gratos pelo seu esforço e desejamos muita sorte.</p>

      <p>
        <router-link to="/busca">abrir página do teste e começar.</router-link>
      </p>
    </div>

    <div class="l-block -text-right">
      <span class="l-emoji -clover">🍀</span>
    </div>
  </div>
</template>

<script>
export default {
  pageTitle() {
    return "Instruções";
  },
};
</script>

<style scoped lang="scss">
@keyframes hand-wave {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}

.l-container {
  margin: 60px auto;
  max-width: 720px;
}

.l-emoji {
  display: inline-block;
  font-size: 64px;

  &.-hand-wave {
    animation: hand-wave 1.2s infinite linear;
  }

  &.-clover {
    animation: float 2s infinite linear;
  }
}

.l-title {
  margin: 40px 0;
}

.l-block {
  margin: 40px 0 0;
  line-height: 1.4;
  font-size: 18px;

  &.-text-right {
    text-align: right;
  }
}

.l-subtitle {
  margin: 0 0 20px;
  font-weight: var(--font-weight-regular);
}
</style>
