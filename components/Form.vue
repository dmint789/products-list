<template>
  <form>
    <label for="title">Наименование товара</label>
    <input
      type="text"
      id="title"
      name="title"
      placeholder="Введите наименование товара"
    />
    <label for="description">Описание товара</label>
    <textarea
      id="description"
      name="description"
      rows="5"
      placeholder="Введите описание товара"
    ></textarea>
    <label for="url">Ссылка на изображение товара</label>
    <input type="text" id="url" name="url" placeholder="Введите ссылку" />
    <label for="price">Цена товара</label>
    <input type="text" id="price" name="price" placeholder="Введите цену" />
    <input type="submit" value="Добавить товар" />
  </form>
</template>

<script>
  export default {
    name: 'Form',
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/Variables.scss';

  $font-size: 1.7vh;

  form {
    padding: 3vh;
    border-radius: $radius;
    -moz-border-radius: $radius;
    -webkit-border-radius: $radius;
    box-shadow: $shadow;
    background-color: $foreground-color;

    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    margin-bottom: 3vh;
    padding: 1.5vh;
    border-width: 0;
    box-shadow: $input-shadow;
    font-size: $font-size;
    font-family: $main-font;

    &:focus {
      outline: none;
    }
  }
  textarea {
    resize: none;
  }
  label {
    margin-bottom: 1vh;
    font-size: $font-size;
    font-family: $main-font;
  }
</style>
