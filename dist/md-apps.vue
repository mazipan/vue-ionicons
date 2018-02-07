<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-apps-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-apps-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Apps Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

