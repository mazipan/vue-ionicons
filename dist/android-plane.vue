<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-plane-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M448 336v-40L288 192V79.2c0-17.683-14.82-31.2-32-31.2-17.179 0-32 13.518-32 31.2V192L64 296v40l160-48v113.602l-48 31.199V464l80-16 80 16v-31.199l-48-31.199V288l160 48z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-plane-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Plane Icon"
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

