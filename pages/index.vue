<template>
  <div class="background">
    <div class="container">
      <div class="top-row">
        <h1>Добавление Товара</h1>
        <select
          name="sorting"
          id="sorting"
          :value="sorting"
          @change="(e) => changeItemSorting(e.target.value)"
        >
          <option value="name">По наименованию</option>
          <option value="pricemin">По цене от меньшего к большему</option>
          <option value="pricemax">По цене от большего к меньшему</option>
        </select>
      </div>
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
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'IndexPage',
    computed: {
      ...mapState(['items', 'sorting']),
    },
    methods: {
      ...mapActions(['changeItemSorting']),
    },
    beforeCreate() {
      //if (localStorage.getItem('store')) this.$store.commit('reloadState');
    },
  };
</script>

<style lang="scss" scoped>
  select {
    @include round-border;

    padding: 0 0.5rem;
    border-width: 0;
    box-shadow: $input-shadow;
    background-color: $foreground-color;
    color: $dim-text-color;
    font: $default-font;
  }

  .container {
    overflow: hidden;
    max-width: $container-width;
    margin: 3vh auto;
  }
  .top-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
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
