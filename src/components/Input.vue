<template>
  <div class="c-input">
    <input
      v-model="item"
      class="c-input__input"
      type="text"
      name="search"
      placeholder="Busque"
    />
    <button class="c-input__button" type="submit" @click="() => $emit('click')">
      <img class="c-input__img" :src="searchIcon" />
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
.c-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-gray-2);
  width: 240px;
  height: 42px;
  border-radius: 4px;
  top: 94px;
  margin-top: 24px;
}

.c-input__input::placeholder {
  font-family: "Proxima Nova";
  font-weight: var(--font-weight-extra-bold);
  color: var(--color-gray-3);
}

.c-input__input {
  background-color: var(--color-white);
  border: 0px;
  outline: 0;
  margin-left: 12px;
}

.c-input__button {
  border-color: var(--color-white);
  background-color: var(--color-white);
  border: 0px;
}

.c-input__button :active {
  opacity: 0.4;
}

.c-input__img {
  width: 25px;
  height: 25px;
  display: flex;
}

@media (max-width: 699px) {
  .c-input {
    width: 335px;
  }
}
</style>
