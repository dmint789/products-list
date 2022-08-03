<template>
  <form @submit.prevent="addNewItem">
    <FormInput
      name="title"
      label="Наименование товара"
      placeholder="Введите наименование товара"
      required
    />
    <label for="description">Описание товара</label>
    <textarea
      id="description"
      name="description"
      rows="5"
      placeholder="Введите описание товара"
      :value="description"
      @input="
        (e) => changeField({ field: 'description', value: e.target.value })
      "
    ></textarea>
    <FormInput
      name="url"
      label="Ссылка на изображение товара"
      placeholder="Введите ссылку"
      required
    />
    <FormInput
      name="price"
      label="Цена товара"
      placeholder="Введите цену"
      required
    />
    <input
      type="submit"
      value="Добавить товар"
      :disabled="!isValidItem()"
      :style="{ '--submit-scale': isValidItem() ? 'scale(0.95)' : '' }"
    />
  </form>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'Form',
    computed: {
      ...mapState(['description']),
      ...mapGetters(['isValidItem']),
    },
    methods: {
      ...mapMutations(['changeField']),
      ...mapActions(['addNewItem']),
    },
  };
</script>

<style lang="scss" scoped>
  form {
    @include round-border;

    padding: 1rem;
    box-shadow: $shadow;
    background-color: $foreground-color;

    display: flex;
    flex-direction: column;
  }
  label {
    @include input-label;
  }
  textarea {
    @include text-input;
    resize: none;
  }
  input[type='submit'] {
    @include round-border(1rem);

    padding: 1em;
    border-width: 0;
    background-color: $enabled-color;
    color: $enabled-text-color;
    font: $default-font;
    font-weight: bold;

    &:focus {
      outline: none;
      background-color: $focused-green-color;
    }
    &:active {
      transform: var(--submit-scale);
    }
    &:hover {
      background-color: $focused-green-color;
    }
    &:disabled {
      background-color: $disabled-color;
      color: $disabled-text-color;
    }
  }
</style>
