<template>
  <div
    class="ion"
    :class="rootClass"
    name="pull-request-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M128 64c-35.29 0-64 28.71-64 64 0 23.637 12.89 44.307 32 55.391V360.61C76.89 371.693 64 392.363 64 416c0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391V183.391c19.11-11.084 32-31.754 32-55.391 0-35.29-28.71-64-64-64zm0 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm0-288c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zM415 360.034V204.989c0-33.987-10.49-61.002-31.18-80.294-22.111-20.618-54.314-30.388-95.82-29.106V32l-96 96 96 96v-64c26.5 0 42.67 2.642 52.175 11.504 7.183 6.698 10.825 17.964 10.825 33.485v156.196c-18.562 11.217-31 31.589-31 54.814 0 35.29 28.71 64 64 64s64-28.71 64-64c0-24.048-13.338-45.03-33-55.965zM384 448c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "pull-request-icon",
    data () {
      let iconTitle = this.title ? this.title : "Pull Request Icon"
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


