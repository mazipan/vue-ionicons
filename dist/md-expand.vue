<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-expand-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M396.795 396.8H320V448h128V320h-51.205zm.005-281.595V192H448V64H320v51.205zm-281.595-.005H192V64H64v128h51.205zm-.005 281.595V320H64v128h128v-51.205z"/></svg>
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
    let iconTitle = this.title ? this.title : "Md Expand Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

