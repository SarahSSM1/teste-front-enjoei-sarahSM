<template>
  <a class="c-product-card" :href="href">
    <img class="c-product-card__image" :src="imageUrl" />

    <div v-if="haveDiscount" class="c-product-card__discount">
      <span>{{ showDiscount }}% off</span>
    </div>

    <div class="c-product-card__price">
      <span v-if="!haveDiscount">R$ {{ showPrice }}</span>
      <span v-if="haveDiscount" class="c-product-card__price-discount"
        >R$ {{ valueShowDiscount }}</span
      >
      <span v-if="haveDiscount" class="c-product-card__old-price">
        <s>R$ {{ showPrice }} </s></span
      >
    </div>
  </a>
</template>

<script>
import { getImageUrl, IMAGE_PRESETS } from "@/tools/get-image-url";

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
    price: {
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
    haveDiscount() {
      return this.price.sale && true;
    },
    showDiscount() {
      const totalDiscount = (this.price.sale * 100) / this.price.listed / 100;
      return (totalDiscount.toFixed(2) * 100).toFixed(0);
    },
    showPrice() {
      return this.price.listed;
    },
    valueShowDiscount() {
      return this.price.sale;
    },
  },
};
</script>

<style scoped lang="scss">
.c-product-card {
  display: block;
  position: relative;
}

.c-product-card__image {
  max-width: 216px;
  max-height: 216px;
  border-radius: 3px;
}

.c-product-card__discount,
.c-product-card__price {
  position: absolute;
}

.c-product-card__discount {
  height: 22px;
  top: 2px;
  right: 2px;
  background-color: var(--color-pink);
  border-radius: 3px;
  padding: 4px;
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-product-card__price {
  height: 22px;
  background-color: var(--color-white);
  top: 192px;
  left: 2px;
  border-radius: 3px;
  padding: 4px;
  font-family: "Proxima Nova";
  color: var(--color-text-3);
  font-weight: var(--font-weight-bold);
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-product-card__old-price {
  color: var(--color-gray-4);
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-regular);
  font-size: 12px;
  margin: 4px;
}
.c-product-card__price-discount {
  color: var(--color-pink);
}
</style>
