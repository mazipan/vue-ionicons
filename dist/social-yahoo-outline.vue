<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-yahoo-outline-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M384.6 68.4c-11.3 0-22.5-.8-32.6-4.4l-96 160-96-160c-10.1 3.6-20.7 4.4-32 4.4-11.1 0-22.1-.9-32-4.4l128 212.7V448c10-3.5 20.8-4.4 32-4.4s22 .9 32 4.4V277L416 64c-9.9 3.4-20.3 4.4-31.4 4.4zM274.2 268.5l-2.2 4V428.2c-5-.6-11.2-.7-16-.7-4.8 0-10 .1-16 .7V272.3l-2.4-3.8L127 84.4h1c7.6 0 16-.3 24.7-1.9l89.8 149.8 13.4 22.8 14-22.9 89.8-149.9c9 1.6 17.6 1.7 24.8 1.7h.5L274.2 268.5z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "social-yahoo-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Yahoo Outline Icon"
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

