<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-information-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-4.5 104c11.1 0 20 9 20 20s-9 20-20 20-20-9-20-20 8.9-20 20-20zM288 352h-64v-8h16V224h-16v-8h48v128h16v8z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-information-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Information Icon"
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


