<template>
  <div class="background">
    <div class="container">
      <h1 class="title">Добавление Товара</h1>
      <div class="grid">
        <Form />
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
    max-width: 1400px;
    margin: 30px auto;
  }
  .title {
    margin: $column-gap;
  }
  .grid {
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 1vh 0;
  }
  .items-list {
    padding: 0 $column-gap;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: $column-gap;
    row-gap: $row-gap;
  }
</style>
