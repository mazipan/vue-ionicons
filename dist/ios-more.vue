<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-more-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M255.8 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zM102 218c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38zm308 0c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-more-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios More Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

