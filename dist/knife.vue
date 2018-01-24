<template>
  <div
    class="ion"
    :class="rootClass"
    name="knife-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M285.7 32c-3.3 0-6 1.4-8 3.8C259 58.7 224 116.1 224 250.1c0 39.2 33 39.2 32 69.4v.4c-2 47.1-14.9 111.1-16 130.3-.4 15.2 9.7 29.8 24.1 29.8h.4c14.4 0 23.5-14.4 23.5-29.6V38.3c0-5-.5-6.3-2.3-6.3z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "knife-icon",
    data () {
      let iconTitle = this.title ? this.title : "Knife Icon"
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

