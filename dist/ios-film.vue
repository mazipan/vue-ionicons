<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-film-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M56 88v336h400V88H56zm72 320H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm240 112H144v-16h224v16zm72 144h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-film-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Film Icon"
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


