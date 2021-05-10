<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-code-working-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"/><path d="M155.6 276h40v-40h-40v40zm200.8-40h-40v40h40v-40zM236 276h40v-40h-40v40z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-code-working-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"/><path d="M155.6 276h40v-40h-40v40zm200.8-40h-40v40h40v-40zM236 276h40v-40h-40v40z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-code-working-icon",
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

