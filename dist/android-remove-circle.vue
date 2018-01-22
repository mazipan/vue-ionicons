<template>
  <div
    class="ion android-remove-circle-icon"
    name="android-remove-circle-icon"
    aria-labelledby="android-remove-circle-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229H149v-42h214v42z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-remove-circle-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Remove Circle Icon"
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

