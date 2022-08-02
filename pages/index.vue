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
  export default {
    name: 'IndexPage',
    data() {
      return {
        items: [
          {
            id: 1,
            name: 'Сумка',
            description: 'Красивая сумка',
            price: '10000',
            url: 'https://www.bragmybag.com/wp-content/uploads/2015/02/Loewe-Puzzle-Bag-blue.jpg',
          },
          {
            id: 2,
            name: 'Кошка',
            description: 'Милая кошка',
            price: '100',
            url: 'https://3.bp.blogspot.com/--3DlxklEVeQ/UDB3EBzbhpI/AAAAAAAAPfg/VGdEr7cTiPg/s1600/Cute+Kitten+6.jpg',
          },
          { id: 3, name: '', description: '', price: '', url: '' },
          { id: 4, name: '', description: '', price: '', url: '' },
          { id: 5, name: '', description: '', price: '', url: '' },
          { id: 6, name: '', description: '', price: '', url: '' },
          { id: 7, name: '', description: '', price: '', url: '' },
          { id: 8, name: '', description: '', price: '', url: '' },
          { id: 9, name: '', description: '', price: '', url: '' },
        ],
      };
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
