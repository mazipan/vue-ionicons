<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-arrow-dropdown-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M128 192l128 128 128-128z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-arrow-dropdown-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Arrow Dropdown Icon"
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


