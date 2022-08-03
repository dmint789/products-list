<template>
  <div class="input-container">
    <span class="required">
      <label :for="name">{{ label }}</label>
      <font-awesome-icon icon="fa-solid fa-circle" class="icon" />
    </span>
    <input
      type="text"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="(e) => onInput(e.target.value)"
      @focusout="() => (error = getInputError(name))"
      :class="error ? 'error-border' : ''"
    />
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'FormInput',
    props: {
      name: String,
      label: String,
      placeholder: String,
    },
    data() {
      return {
        error: '',
      };
    },
    computed: {
      value() {
        return this.$store.state[this.name];
      },
      ...mapGetters(['getInputError']),
    },
    methods: {
      onInput(newInput) {
        this.changeField({ field: this.name, value: newInput });
        this.error = this.getInputError(this.name);
      },
      ...mapMutations(['changeField']),
    },
  };
</script>

<style lang="scss" scoped>
  label {
    @include input-label;
  }
  input {
    @include text-input;

    width: 100%;
  }

  .input-container {
    width: 100%;
  }
  .required {
    display: flex;
    align-items: flex-start;
  }
  .required > label {
    margin-right: 0.2em;
  }
  .icon {
    font-size: 0.3rem;
    color: $error-color;
  }
  .error-border {
    border-width: 2px;
    border-style: solid;
    border-color: $error-color;
  }
  .error {
    margin-bottom: 1.2rem;
    font-size: 1rem;
    color: $error-color;
  }
</style>
