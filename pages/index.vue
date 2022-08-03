<template>
  <div class="background">
    <div class="container">
      <h1 class="title">Добавление Товара</h1>
      <div class="sub-container">
        <Form class="form" />
        <div class="items-list">
          <Item v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'IndexPage',
    computed: {
      ...mapState(['items']),
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    overflow: hidden;
    max-width: $container-width;
    margin: 3vh auto;
  }
  .title {
    margin: 1rem;
  }
  .sub-container {
    display: flex;
    align-items: flex-start;
    margin: 0 1vw;
    padding: 1vh 0;
  }
  .form {
    flex: 1;
    margin: 0 1vw 0 0;
  }
  .items-list {
    flex: 3;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($container-width / 5, 1fr));
    grid-auto-rows: minmax(max-content, max-content);
    column-gap: $column-gap;
    row-gap: $row-gap;
  }

  @media (max-width: 550px) {
    .container {
      margin: 0;
    }
    .sub-container {
      flex-direction: column;
      align-items: stretch;
      margin: 0 1vw;
      padding: 0;
    }
    .form {
      margin: 0 0 1vh 0;
    }
  }
</style>
