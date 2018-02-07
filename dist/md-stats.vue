<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-stats-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M176 64h64v384h-64zM80 336h64v112H80zm192-64h64v176h-64zm96-96h64v272h-64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-stats-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Stats Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

