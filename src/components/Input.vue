<template>
  <div class="input">
    <input v-model="item" class="input__busca" type="text" name="search" placeholder="Buscar Produto"/>
    <button class="botao__input" type="submit" @click="() => $emit('click')">
      <img class="img__input" :src="searchIcon" />
    </button>
  </div>
</template>

<script>
 import searchIcon from "../assets/search-icon.svg";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      searchIcon,
    };
  },
  computed: {
    item: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>

<style scoped>
.input {
  width: 240px;
  height: 42px;
  display: flex;
  border-radius: 4px;
  top: 94px;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
  border: 1px solid var(--color-gray-2);
}

.input__busca {
  margin-left: 12px;
  outline: 0;
  border: 0px;
  background-color: var(--color-white)!important;
}

.input__busca::placeholder {
  font-family: "Proxima Nova";
  color: var(--color-gray-3);
  font-weight: var(--font-weight-extra-bold);
}
.img__input {
  width: 25px;
  height: 25px;
  display: flex;
}

.botao__input {
  border: 0px;
  border-color: var(--color-white);
  background-color: var(--color-white);
}

.botao__input :active {
  opacity: 0.8;
}

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

@media (max-width: 700px) {
  .input {
    width: 335px;
  }
}
</style>
