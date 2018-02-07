<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-information-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M232 235h48v137h-48zm0-95h48v48h-48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-information-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Information Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

