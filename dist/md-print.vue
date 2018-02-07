<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-print-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.899V448H384.1v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.101-352H127.899v80H384.1V64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-print-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Print Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

