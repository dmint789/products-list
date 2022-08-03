<template>
  <div class="item-container">
    <div @mouseover="hover = true" @mouseleave="hover = false" class="item">
      <ImageLoader alt="Item photo" :url="item.url" />
      <div class="text-container">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <h2>{{ price }} руб.</h2>
      </div>
      <button
        type="button"
        id="delete"
        v-if="hover"
        @click="() => deleteItem(item.id)"
      >
        <font-awesome-icon
          icon="fa-solid fa-trash-can"
          style="color: white; width: 60%; height: 60%"
        />
      </button>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'Item',
    props: {
      item: Object,
    },
    data() {
      return {
        hover: false,
      };
    },
    computed: {
      price() {
        const price = this.item.price.toString();
        let prettyPrice = '';

        for (let i = price.length - 1; i >= 0; i--) {
          if ((price.length - i - 1) % 3 === 0 && prettyPrice.length > 0)
            prettyPrice = ' ' + prettyPrice;
          prettyPrice = price[i] + prettyPrice;
        }

        return prettyPrice;
      },
    },
    methods: {
      ...mapMutations(['deleteItem']),
    },
  };
</script>

<style lang="scss" scoped>
  h2,
  h3 {
    word-break: break-all;
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    margin: 1rem 0 2rem 0;
    font: $default-font;
    line-height: 1.4rem;
  }

  #delete {
    @include center-child;
    @include round-border;

    border-width: 0;
    background-color: darksalmon;
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;

    &:hover {
      background-color: #f99;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .item-container {
    position: relative;
    padding: 0;
    margin: 0;
  }
  .item {
    @include round-border;

    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: $foreground-color;
    box-shadow: $shadow;
  }
  .text-container {
    padding: 1rem;
  }
</style>
