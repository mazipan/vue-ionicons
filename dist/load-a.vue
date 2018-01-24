<template>
  <div
    class="ion"
    :class="rootClass"
    name="load-a-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><circle cx="256" cy="96" r="64"/><circle cx="96" cy="256" r="48"/><circle cx="368" cy="144" r="8"/><path d="M180.1 107.6c-19.9-20.1-52.2-20.1-72.1 0-19.9 20.1-19.9 52.7 0 72.8 19.9 20.1 52.2 20.1 72.1 0 19.9-20.1 19.9-52.7 0-72.8z"/><circle cx="416" cy="256" r="16"/><circle cx="369" cy="369" r="24"/><circle cx="256" cy="416" r="32"/><circle cx="144" cy="368" r="40"/></svg>

  </div>
</template>

<script>
  export default {
    name: "load-a-icon",
    data () {
      let iconTitle = this.title ? this.title : "Load A Icon"
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


