<template>
  <div
    class="ion"
    :class="rootClass"
    name="android-sync-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 93.09V32l-80 81.454 80 81.456v-61.093c65.996 0 120 54.982 120 122.183 0 20.363-5 39.714-14.004 57.016L391 342.547c15.996-25.457 25-54.988 25-86.547 0-89.599-72.002-162.91-160-162.91zm0 285.094c-66.001 0-120-54.988-120-122.184 0-20.363 5-39.709 13.999-57.02L121 169.454C104.999 193.89 96 224.436 96 256c0 89.599 72.002 162.91 160 162.91V480l80-81.453-80-81.457v61.094z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "android-sync-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Sync Icon"
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


