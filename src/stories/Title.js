import {storiesOf} from '@storybook/vue'
import Vue from 'vue'
// import withReadme from 'storybook-readme/with-readme'
import {withInfo} from '@storybook/addon-info'

// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import Decorator from './Decorator.vue'
import Title from '../components/Title.vue'

Vue.component('decorator', Decorator)
Vue.component('ej-title', Title)

storiesOf('ej-title', module)
  .addDecorator(story => ({template: `<decorator>${story().template}</decorator>`}))
  .add('H1', () => ({
    components: Title,
    template: '<ej-title>H1 title</ej-title>',
  }))
  .add('H2', () => ({
    components: Title,
    template: '<ej-title type="h2">H2 title</ej-title>',
  }))
  .add('H3', () => ({
    components: Title,
    template: '<ej-title type="h3">H3 title</ej-title>',
  }))
  .add('H4', () => ({
    components: Title,
    template: '<ej-title type="h4">H4 title</ej-title>',
  }))
