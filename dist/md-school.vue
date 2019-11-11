<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-school-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M113.5 281.2v85.3L256 448l142.5-81.5v-85.3L256 362.7l-142.5-81.5zM256 64L32 192l224 128 183.3-104.7v147.4H480V192L256 64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-school-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md School Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

