<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-swap-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M131.3 231.1L32 330.6l99.3 99.4v-74.6h174.5v-49.7H131.3v-74.6zM480 181.4L380.7 82v74.6H206.2v49.7h174.5v74.6l99.3-99.5z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-swap-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Swap Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

