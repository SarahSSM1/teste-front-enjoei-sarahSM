<template>
  <div class="yeyezados">
    <Header/>

    <div class="bar">
      <div class="bar__busca">
        <div class="bar__busca-result">
          <p v-if="quantityProducts != ''">
            {{ quantityProducts }} produtos encontrados
          </p>
        </div>
        <Input v-model="item" @click="fetchItem"/>
      </div>
    </div>

    <Main>
      <ProductCard v-for="(product, index) in products" :key="index" :imageId="product.image_public_id" :title="product.title" :path="product.context" :preco="product.price"/>
    </Main>

    <div class="yeyezados__navigation">
      <nav class="yeyezados__navigation-nav">
        <button class="yeyezados__navigation-nav-left" type="submit" v-on:click="anterior">
          <img class="yeyezados__navigation-nav-left-arrow" :src="left"/>
          <p>anterior</p>
        </button>

        <button class="yeyezados__navigation-nav-right" type="submit" v-on:click="proximo">
          <img class="yeyezados__navigation-nav-right-arrow" :src="rigth"/>
          <p>próximo</p>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
 import axios from "axios";
 import Header from "../components/cabecalho.vue";
 import Input from "../components/Input.vue";
 import Main from "../components/main.vue";
 import ProductCard from "../components/product-card.vue";
 import rigth from "../assets/arrow-right-icon.svg";
 import left from "../assets/arrow-left-icon.svg";

export default {
  components: {
    ProductCard,
    Header,
    Main,
    Input,
  },
  pageTitle() {
    return "Yeyezados 🤘";
  },
  data() {
    return {
      products: [],
      paginations: [],
      isLoading: false,
      quantityProducts: "",
      page: 1,
      item: "",
      rigth,
      left,
    };
  },
  watch: {
    page(value) {
      this.getData(value);
    },
  },
  methods: {
    anterior() {
      this.page = this.pagination.prev_page;
    },
    proximo() {
      this.page = this.pagination.next_page;
    },
    async created(page, item) {
     const response = await axios.get(
      `/api/v5/users/enjoei-pro/products/liked?page=${page}&query=${item}`
      );
      return response.data;
    },
    async fetchItem() {
      if (this.item !== "") {
        await this.getData(this.page, this.item);
        this.quantityProducts = this.pagination.total_entries;
      }
    },
    async getData(page, item) {
     const response = await this.created(page, item);
      this.products = response.products;
      this.pagination = response.pagination;
    },
  },
  mounted() {
    this.getData(this.page, this.item);
  },
};
</script>


<style scoped>
.bar {
  width: 100%;
}

.notificar {
  background-color: white;
}

.yeyezados__navigation-nav {
  margin: 40px;
  display: flex;
}

.yeyezados__navigation-nav-left {
  margin-right: 12px;
  color: var(--color-gray-3);
}

.yeyezados__navigation-nav-left p {
  margin-left: 51px;
  position: absolute;
}

.yeyezados__navigation-nav-left-arrow {
  width: 19px;
  height: 13px;
  margin-left: 26px;
  position: absolute;
}

.yeyezados__navigation-nav-right {
  margin-left: 12px;
  color: var(--color-pink);
}

.yeyezados__navigation-nav-right p {
  margin-left: 24px;
  position: absolute;
}

.yeyezados__navigation-nav-right-arrow {
  width: 19px;
  height: 13px;
  margin-left: 90px;
  position: absolute;
}

.yeyezados__navigation-nav button:active {
  border-color: var(--color-gray-3);
  background-color: var(--color-gray-2);
}

.yeyezados__navigation {
  margin: 0px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.bar__busca-result {
  padding-top: 36;
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-extra-bold);
  color: var(--color-gray-5);
}

.bar__busca {
  max-width: 1200px;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
}

.yeyezados__navigation-nav button {
  width: 132px;
  height: 48px;
  padding: 0;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  font-size: 16px;
  align-items: center;
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-bold);
  background-color: var(--color-white);
  border: 1.5px solid var(--color-gray-2);
}

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

@media (max-width: 700px) {
  .bar__busca {
    align-items: center;
    flex-direction: column-reverse;
  }
  .yeyezados__busca-button {
    left: 298px;
  }
  .yeyezados__navigation-nav-left {
    margin-right: 38px;
  }

  .yeyezados__navigation-nav-right {
    margin-left: 38px;
  }
}
</style>
