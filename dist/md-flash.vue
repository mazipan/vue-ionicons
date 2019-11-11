<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-flash-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M160 48v224h64v192l128-256h-64l64-160H160z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-flash-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Flash Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

