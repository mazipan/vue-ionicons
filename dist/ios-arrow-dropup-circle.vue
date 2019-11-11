<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-arrow-dropup-circle-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 464c114.9 0 208-93.1 208-208S370.9 48 256 48 48 141.1 48 256s93.1 208 208 208zm0-244.5l-81.1 81.9c-7.5 7.5-19.8 7.5-27.3 0s-7.5-19.8 0-27.3l95.7-95.4c7.3-7.3 19.1-7.5 26.6-.6l94.3 94c3.8 3.8 5.7 8.7 5.7 13.7 0 4.9-1.9 9.9-5.6 13.6-7.5 7.5-19.7 7.6-27.3 0l-81-79.9z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-arrow-dropup-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Arrow Dropup Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

