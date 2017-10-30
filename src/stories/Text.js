import {storiesOf} from '@storybook/vue'

import Vue from 'vue'
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Decorator from './Decorator.vue'
Vue.component('decorator', Decorator);

import Text from '../components/Text.vue'
Vue.component('ej-text', Text);

storiesOf('ej-text', module)
  .addDecorator(story => ({template: `<decorator>${story().template}</decorator>`}))
  .add('default', () => ({
    components: Text,
    template: '<ej-text>Default text</ej-text>',
  })).add('primary', () => ({
  components: Text,
  template: '<ej-text type="primary">Primary text</ej-text>',
})).add('secondary', () => ({
  components: Text,
  template: '<ej-text type="secondary">Secondary text</ej-text>',
}))
