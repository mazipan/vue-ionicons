<template>
  <div
    class="ion reply-icon"
    name="reply-icon"
    aria-labelledby="reply-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M448 400s-36.8-208-224-208v-80L64 256l160 134.4v-92.3c101.6 0 171 8.9 224 101.9z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "reply-icon",
    data () {
      let iconTitle = this.title ? this.title : "Reply Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
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

