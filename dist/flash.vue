<template>
  <div
    class="ion"
    :class="rootClass"
    name="flash-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 288h147l-51.1 192L416 224H269l51-192z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "flash-icon",
    data () {
      let iconTitle = this.title ? this.title : "Flash Icon"
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

