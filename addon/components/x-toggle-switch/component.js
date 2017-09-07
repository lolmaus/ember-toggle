import Component from '@ember/component';
import { computed } from "@ember/object"
import layout from './template';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Component.extend(RecognizerMixin, {
  layout,
  tagName: 'span',
  classNames: ['x-toggle-container'],
  classNameBindings: ['size', 'disabled:x-toggle-container-disabled', 'value:x-toggle-container-checked'],

  recognizers: 'swipe',

  swipeRight() {
    this.get('sendToggle')(true);
  },

  swipeLeft() {
    this.get('sendToggle')(false);
  },

  themeClass: computed('theme', function() {
    return `x-toggle-${this.get('theme') || 'default'}`;
  })
});
