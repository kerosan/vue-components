<template>
    <div class='ej-component'>
      <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
      name: 'ej-decorator',
      props: {
        propMessage: 'Hi'
      }
    })
    export default class Decorator extends Vue {
      // initial data
      msg = 123

      // use prop values for initial data
      helloMsg = 'Hello, ' + this.propMessage

      // lifecycle hook
      mounted () {
        this.greet()
      }

      // computed
      get computedMsg () {
        return 'computed ' + this.msg
      }

      // method
      greet () {
        // console.log(('greeting: ' + this.msg))
      }
    }
</script>

<style scoped>
  .ej-component {
    display: block;
    padding: 20px;
    border: 1px dashed grey;
    min-width: 360px;
  }
</style>
