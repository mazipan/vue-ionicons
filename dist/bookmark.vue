<template>
  <div
    class="ion"
    :class="rootClass"
    name="bookmark-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M344 64H168c-4.4 0-8 3.6-8 8v56h192V72c0-4.4-3.6-8-8-8zM160 448l96-96 96 96V144H160z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "bookmark-icon",
    data () {
      let iconTitle = this.title ? this.title : "Bookmark Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
        type: String,
        default: ""
      },
      rootClass: {
        type: String,
        default: ""
      },
      w: {
        type: String,
        default: "14px"
      },
      h: {
        type: String,
        default: "14px"
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

