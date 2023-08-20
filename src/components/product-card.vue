<template>
  <a class="product-card" :href="href">
    <img class="product-card__image" :src="imageUrl" />

    <div v-if="comDesconto" class="product-card__desconto">
      <span>{{ showDesconto }}% off</span>
    </div>

    <div class="product-card__preco">
      <span v-if="!comDesconto">R$ {{ showPreco }}</span>
      <span v-if="comDesconto" class="product-card__preco-desconto">R$ {{ valueShowDesconto }}</span>
      <span v-if="comDesconto" class="product-card__old-preco">
        <s>R$ {{ showPreco }} </s>
      </span>
    </div>
  </a>
</template>

<script>
import { getImageUrl, IMAGE_PRESETS } from "@/tools/img-url";

export default {
  props: {
    imageId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    preco: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: getImageUrl(this.imageId, IMAGE_PRESETS.product.card),
    };
  },
  computed: {
    href() {
      return `https://www.enjoei.com.br/p/${this.path}`;
    },
    showPreco() {
      return this.preco.listed;
    },
    comDesconto() {
      return this.preco.sale && true;
    },
    showDesconto() {
      const totalDesconto = (this.preco.sale * 100) / this.preco.listed / 100;
      return (totalDesconto.toFixed(2) * 100).toFixed(0);
    },
    valueShowDesconto() {
      return this.preco.sale;
    },
  },
};
</script>

<style scoped lang="scss">
.product-card__preco-desconto {
  color: var(--color-pink);
}
.product-card {
  display: block;
  position: relative;
}

.product-card__image {
  max-width: 218px;
  max-height: 216px;
  border-radius: 3px;
}

.product-card__old-preco {
  margin: 4px;
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-regular);
  font-size: 12px;
  color: var(--color-gray-4);
}

.product-card__preco {
  height: 22px;
  top: 192px;
  left: 2px;
  display: flex;
  position: absolute;
  border-radius: 3px;
  padding: 4px;
  font-family: "Proxima Nova";
  color: var(--color-text-3);
  font-weight: var(--font-weight-bold);
  font-size: 12px;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
}

.product-card__desconto {
  height: 22px;
  top: 2px;
  right: 2px;
  display: flex;
  position: absolute;
  border-radius: 3px;
  padding: 4px;
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  font-size: 12px;
  justify-content: center;
  align-items: center;
  background-color: var(--color-pink);
}
</style>
