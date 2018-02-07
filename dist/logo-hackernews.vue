<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-hackernews-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M64 64v384h384V64H64zm214 215v72h-40v-72l-66-120h47.1l39.7 83.6 38-83.6H342l-64 120z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-hackernews-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Logo Hackernews Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

