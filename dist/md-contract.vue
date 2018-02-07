<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-contract-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M64 371.2h76.795V448H192V320H64v51.2zm76.795-230.4H64V192h128V64h-51.205v76.8zM320 448h51.2v-76.8H448V320H320v128zm51.2-307.2V64H320v128h128v-51.2h-76.8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-contract-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Contract Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

