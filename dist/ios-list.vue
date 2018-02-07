<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ios-list-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><circle cx="92" cy="256" r="28"/><circle cx="92" cy="132" r="28"/><circle cx="92" cy="380" r="28"/><path d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 124H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ios-list-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Ios List Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

