<template>
  <div
    class="ion"
    :class="rootClass"
    name="network-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M448 96c0-35.29-28.71-64-64-64s-64 28.71-64 64c0 23.637 12.89 44.307 32 55.391v52.832l-96 48-96-48v-52.832c19.11-11.084 32-31.754 32-55.391 0-35.29-28.71-64-64-64S64 60.71 64 96c0 23.637 12.89 44.307 32 55.391v92.387l128 64v52.832c-19.11 11.084-32 31.754-32 55.391 0 35.29 28.71 64 64 64s64-28.71 64-64c0-23.637-12.89-44.307-32-55.391v-52.832l128-64v-92.387c19.11-11.084 32-31.754 32-55.391zM128 64c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32zm128 384c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm128-320c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "network-icon",
    data () {
      let iconTitle = this.title ? this.title : "Network Icon"
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


