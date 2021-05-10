<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-help-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M289 448h-66v-65h66v65zm-1-98h-64c0-101 96-95.1 96-159 0-35.2-28.8-63.4-64-63.4S192 158 192 192h-64c0-71 57.3-128 128-128s128 56.4 128 127c0 79.9-96 89-96 159z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-help-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M289 448h-66v-65h66v65zm-1-98h-64c0-101 96-95.1 96-159 0-35.2-28.8-63.4-64-63.4S192 158 192 192h-64c0-71 57.3-128 128-128s128 56.4 128 127c0 79.9-96 89-96 159z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-help-icon",
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

