<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :data-title="iconTitle"
    data-name="md-expand-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="md-expand-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-expand-icon",
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

