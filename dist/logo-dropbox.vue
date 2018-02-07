<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-dropbox-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M177 77L64 150.9l78.1 62.7L256 143.1zM64 276.3l113 73.9 79-66.1-113.9-70.5zm192 7.8l79 66.1 113-73.9-78.1-62.7zm192-133.2L335 77l-79 66.1 113.9 70.5z"/><path d="M256.2 298.3l-79.8 66-34.4-22.2V367l114 68 114-68v-24.9l-34.2 22.2z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-dropbox-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Dropbox Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

