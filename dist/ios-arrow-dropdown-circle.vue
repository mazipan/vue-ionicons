<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-arrow-dropdown-circle-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-arrow-dropdown-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Arrow Dropdown Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

