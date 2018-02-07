<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-skip-backward-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M170.7 256L448 448V64L170.7 256zM64 64h64v384H64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-skip-backward-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Skip Backward Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

