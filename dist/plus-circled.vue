<template>
  <div
    class="ion"
    :class="rootClass"
    name="plus-circled-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H272v112h-32V272H128v-32h112V128h32v112h112v32z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "plus-circled-icon",
    data () {
      let iconTitle = this.title ? this.title : "Plus Circled Icon"
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


