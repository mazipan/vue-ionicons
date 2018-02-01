<template>
  <div
    class="ion"
    :class="rootClass"
    name="social-angular-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M213.573 256h84.846l-42.427-89.356z"/><path d="M255.981 32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32zM344 352l-26.589-56H194.584L168 352h-40L256 72l128 280h-40z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-angular-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Angular Icon"
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


