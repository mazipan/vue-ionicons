<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-pin-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-pin-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Pin Icon"
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


