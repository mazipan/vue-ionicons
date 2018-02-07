<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-arrow-up-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-arrow-up-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Arrow Up Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

