<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-options-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M32 384h272v32H32zm368 0h80v32h-80zm-16 63.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95zM32 240h80v32H32zm176 0h272v32H208zm-16 63.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95zM32 96h272v32H32zm368 0h80v32h-80zm-16 63.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-options-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Options Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

