<template>
  <span :class="type" class="ejComponent__text">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'ej-text',
    props: {
      type: {
        required: false,
        type: 'default' | 'primary' | 'secondary',
        default: 'default'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "fonts";

  .ejComponent__text,
  .default {
    color: #262626;
    font-size: 12px;
    font-weight: $font-light;
  }

  .primary {
    color: #262626;
    font-size: 12px;
    font-weight: $font-bold;
  }

  .secondary {
    color: #999999;
    font-size: 12px;
    font-weight: $font-light;
  }

</style>
