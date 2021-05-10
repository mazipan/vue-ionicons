<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-stats-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M176 64h64v384h-64zM80 336h64v112H80zM272 272h64v176h-64zM368 176h64v272h-64z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-stats-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M176 64h64v384h-64zM80 336h64v112H80zM272 272h64v176h-64zM368 176h64v272h-64z"/></svg>
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
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

