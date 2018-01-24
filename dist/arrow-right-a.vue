<template>
  <div
    class="ion"
    :class="rootClass"
    name="arrow-right-a-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M448.5 256.5l-192-192v112h-192v160h192v112z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "arrow-right-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Right A Icon"
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

