<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-move-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M480 256l-96-96v64h-96v-96h64l-96-96-96 96h64v96h-96v-64l-96 96 96 96v-64h96v96h-64l96 96 96-96h-64v-96h96v64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-move-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Move Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

