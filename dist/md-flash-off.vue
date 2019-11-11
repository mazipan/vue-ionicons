<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-flash-off-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M459.9 435.5L76.1 52.5 51.9 76.6 160 184.3V272h64v192l72-144 139.9 139.5zM352 208h-64l64-160H160v40.3l168 167.6z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-flash-off-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Flash Off Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

