<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-arrow-dropright-circle-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-arrow-dropright-circle-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Arrow Dropright Circle Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

