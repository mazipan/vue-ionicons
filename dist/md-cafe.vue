<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-cafe-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M48 400h368v48H48zM424 64H80v224c0 44 36 80 80 80h144c44 0 80-36 80-80v-64h40c22 0 40-18 40-40v-80c0-22-18-40-40-40zm0 112h-40v-64h40v64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-cafe-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Cafe Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

