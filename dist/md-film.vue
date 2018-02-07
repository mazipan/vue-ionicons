<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-film-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path  d="M376 64v42.667h-40V64H176v42.667h-40V64H96v384h40v-42.666h40V448h160v-42.666h40V448h40V64h-40zM176 362.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM176 192h-40v-42.666h40V192zm200 170.667h-40V320h40v42.667zm0-85.333h-40v-42.667h40v42.667zM376 192h-40v-42.666h40V192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-film-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Film Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

