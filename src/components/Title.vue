<template>
  <span :class="type" class="ejComponent__title">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: "ej-title",
    props: {
      type: {
        required: false,
        type: 'h1' | 'h2' | 'h3' | 'h4',
        default: 'h1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "fonts";

  .ejComponent__title,
  .h1 {
    color: #262626;
    font-size: 20px;
    font-weight: $font-light;
  }

  .h2 {
    color: #262626;
    font-size: 20px;
    font-weight: $font-medium;
  }

  .h3 {
    color: #262626;
    font-size: 14px;
    font-weight: $font-light;
  }

  .h4 {
    color: #999999;
    font-size: 14px;
    font-weight: $font-light;
  }

</style>
