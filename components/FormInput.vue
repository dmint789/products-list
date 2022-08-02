<template>
  <div style="width: 100%">
    <span class="required">
      <label :for="name">{{ label }}</label>
      <font-awesome-icon
        icon="fa-solid fa-circle"
        style="color: darksalmon; font-size: 0.3rem"
      />
    </span>
    <input
      type="text"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      style="width: 100%"
    />
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      name: String,
      label: String,
      placeholder: String,
    },
  };
</script>

<style lang="scss" scoped>
  label {
    @include input-label;
  }
  input {
    @include text-input;
  }

  .required {
    display: flex;
    align-items: flex-start;
  }
  .required > label {
    margin-right: 0.2rem;
  }
</style>
