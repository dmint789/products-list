<template>
  <div class="image-container">
    <img
      src="/placeholder.png"
      alt="Placeholder image"
      id="placeholder-image"
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
        position: 'absolute',
      };
    },
    mounted() {
      // The following code will make it so that images are only loaded when the element is in the viewport
      const observer = new IntersectionObserver(([entry]) => {
        const img = this.$el.querySelector('#main-image');
        const placeholder = this.$el.querySelector('#placeholder-image');

        img.onload = () => {
          // Delete the previous value stored in onload, remove the placeholder object and update the position of the main image
          delete img.onload;
          if (placeholder) placeholder.remove();
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
