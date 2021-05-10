<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-remove-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M96 235h320v42H96z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-remove-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M96 235h320v42H96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-remove-icon",
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

