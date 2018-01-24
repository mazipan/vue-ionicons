<template>
  <div
    class="ion"
    :class="rootClass"
    name="asterisk-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M480 224l-186.828 7.487L401.688 64l-59.247-32L256 208 169.824 32l-59.496 32 108.5 167.487L32 224v64l185.537-10.066L113.65 448l55.969 32L256 304l86.381 176 55.949-32-103.867-170.066L480 288z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "asterisk-icon",
    data () {
      let iconTitle = this.title ? this.title : "Asterisk Icon"
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


