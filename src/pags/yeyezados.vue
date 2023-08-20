<template>
  <div class="p-catalog">
    <Header />
    <div class="p-bar">
      <div class="p-bar__search">
        <div class="p-bar__search-result">
          <p v-if="quantityProducts != ''">
            {{ quantityProducts }} produtos encontrados
          </p>
        </div>
        <Input v-model="item" @click="fetchItem" />
      </div>
    </div>

    <Main>
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :imageId="product.image_public_id"
        :title="product.title"
        :path="product.context"
        :price="product.price"
      />
    </Main>
    <div class="p-catalog__navigation">
      <nav class="p-catalog__navigation-nav">
        <button
          class="p-catalog__navigation-nav-left"
          type="submit"
          v-on:click="previous"
        >
          <img class="p-catalog__navigation-nav-left-arrow" :src="left" />
          <p>anterior</p>
        </button>
        <button
          class="p-catalog__navigation-nav-right"
          type="submit"
          v-on:click="next"
        >
          <p>próximo</p>
          <img class="p-catalog__navigation-nav-right-arrow" :src="rigth" />
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
import ProductCard from "../components/ProductCard.vue";
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
    next(e) {
      this.page = this.pagination.next_page;
    },
    previous(e) {
      this.page = this.pagination.prev_page;
    },
    async fetchItem(e) {
      if (this.item !== "") {
        await this.getData(this.page, this.item);
        this.quantityProducts = this.pagination.total_entries;
      }
    },
    async created(page, item) {
      const response = await axios.get(
        `/api/v5/users/enjoei-pro/products/liked?page=${page}&query=${item}`
      );
      return response.data;
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
.p-catalog {
  width: 100%;
  height: 100vh;
}

.p-bar {
  width: 100%;
}

.p-bar__search {
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}

.p-bar__search-result {
  padding-top: 36;
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-extra-bold);
  color: var(--color-gray-5);
}

.notification {
  background-color: white;
}

.p-catalog__navigation {
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.p-catalog__navigation-nav {
  margin: 40px;
  display: flex;
}

.p-catalog__navigation-nav button {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 132px;
  height: 48px;
  padding: 0;
  background-color: var(--color-white);
  border: 1.5px solid var(--color-gray-2);
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-bold);
  border-radius: 4px;
  font-size: 16px;
}

.p-catalog__navigation-nav-left {
  color: var(--color-gray-3);
  margin-right: 12px;
}

.p-catalog__navigation-nav-right {
  color: var(--color-pink);
  margin-left: 12px;
}

.p-catalog__navigation-nav-left p {
  margin-left: 51px;
  position: absolute;
}

.p-catalog__navigation-nav-right p {
  margin-left: 24px;
  position: absolute;
}

.p-catalog__navigation-nav-left-arrow {
  width: 19px;
  height: 13px;
  margin-left: 26px;
  position: absolute;
}

.p-catalog__navigation-nav-right-arrow {
  width: 19px;
  height: 13px;
  margin-left: 90px;
  position: absolute;
}

.p-catalog__navigation-nav button:active {
  background-color: var(--color-gray-2);
  border-color: var(--color-gray-3);
}

@media (max-width: 699px) {
  .p-bar__search {
    flex-direction: column-reverse;
    align-items: center;
  }
  .p-catalog__search-button {
    left: 296px;
  }
  .p-catalog__navigation-nav-left {
    margin-right: 36px;
  }

  .p-catalog__navigation-nav-right {
    margin-left: 36px;
  }
}
</style>
