<template>
  <div class="item-container">
    <div @mouseover="hover = true" @mouseleave="hover = false" class="item">
      <img :src="item.url" alt="Item image" />
      <div class="text-container">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <h4>{{ item.price }} руб.</h4>
      </div>
      <button type="button" id="delete" v-if="hover" @click="onPress">
        <font-awesome-icon
          icon="fa-solid fa-trash-can"
          style="color: white; width: 60%; height: 60%"
        />
      </button>
    </div>
  </div>
</template>

<script>
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
    methods: {
      onPress() {
        console.log('test');
      },
    },
  };
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    max-height: 28vh;
    object-fit: contain;
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
    padding: 0.8rem;
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
</style>
