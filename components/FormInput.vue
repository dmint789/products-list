<template>
  <div class="input-container">
    <span class="label-container">
      <label :for="name">{{ label }}</label>
      <font-awesome-icon
        v-if="required"
        icon="fa-solid fa-circle"
        class="icon"
      />
    </span>
    <input
      type="text"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="(e) => onInput(e.target.value)"
      @focusout="getError"
      :class="error && required ? 'error-border' : ''"
    />
    <Transition name="text-fade" appear>
      <p class="error" v-if="error && required">{{ error }}</p>
    </Transition>
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
      required: Boolean,
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
        this.getError();
      },
      getError() {
        if (this.required) this.error = this.getInputError(this.name);
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

    transition: border-width 0.4s ease;
    width: 100%;
  }

  .input-container {
    width: 100%;
  }
  .label-container {
    display: flex;
    align-items: flex-start;
  }
  .label-container > label {
    margin-right: 0.2em;
  }
  .icon {
    font-size: 0.3rem;
    color: $error-color;
  }
  .error-border {
    border-width: $border-width;
  }
  .error {
    margin-bottom: 1.2rem;
    font: $default-font;
    font-weight: bold;
    color: $error-color;
  }
</style>
