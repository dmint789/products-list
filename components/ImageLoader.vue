<template>
  <div class="image-container">
    <img
      src="/placeholder.png"
      alt="Placeholder image"
      id="placeholder-image"
      v-if="position === 'absolute'"
    />
    <img
      src=""
      :alt="alt"
      id="main-image"
      :style="{ '--position': position }"
    />
  </div>
</template>

<script>
  export default {
    name: 'ImageLoader',
    props: {
      url: String,
      alt: String,
    },
    data() {
      return {
        // This will be equal to 'absolute' until the main image is loaded, at which point it will be changed to 'relative'
        position: 'absolute',
      };
    },
    mounted() {
      // The following code will make it so that images are only loaded when the element is in the viewport
      // and so that the placeholder is removed after the image is loaded
      const observer = new IntersectionObserver(([entry]) => {
        const img = this.$el.querySelector('#main-image');

        // Create an onload callback that will update the positioning of the main image when it is loaded
        img.onload = () => {
          delete img.onload;
          this.position = 'relative';
        };

        // Check if element is in viewport
        if (entry.isIntersecting) {
          // Change the src of the image tag in the template
          img.src = this.url;
          observer.disconnect();
        }
      });

      observer.observe(this.$el);

      this.$once('hook:beforeDestroy', () => {
        observer.disconnect();
      });
    },
  };
</script>

<style lang="scss" scoped>
  #main-image {
    // This is done so that the loading image is BEHIND the placeholder image until it's loaded
    position: var(--position);
    object-fit: contain;
    width: 100%;
    max-height: 28vh;
  }
  #placeholder-image {
    width: 100%;
  }

  .image-container {
    position: relative;
  }
</style>
