<template>
  <div class="item">
    <img :src="item.url" alt="Item image" />
    <div class="text-container">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <h4>{{ item.price }} руб.</h4>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      item: Object,
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/Variables.scss';
  @import '../assets/styles/GlobalStyles.scss';

  img {
    width: 100%;
    max-height: 28vh;
    object-fit: contain;
  }

  .item {
    border-radius: $radius;
    -moz-border-radius: $radius;
    -webkit-border-radius: $radius;
    overflow: hidden;
    background-color: $foreground-color;
    box-shadow: $shadow;
  }
  .text-container {
    padding: 0.6rem;
  }
</style>
