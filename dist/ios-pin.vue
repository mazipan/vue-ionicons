<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-pin-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M256 48c-79.5 0-144 59.9-144 133.7 0 104 144 282.3 144 282.3s144-178.3 144-282.3C400 107.9 335.5 48 256 48zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-pin-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios Pin Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

