<template>
  <div
    class="ion"
    :class="rootClass"
    name="ios-printer-icon">
    <svg viewBox="0 0 512 512" class="ion__svg" :width="w" :height="h"><path d="M128 224h256v224H128z"/><path d="M127.5 224.5h256v224h-256zM111.5 64.5h288v32h-288z"/><path d="M432.5 112.5h-352c-17.645 0-33 12.842-33 30.309v158.393c0 17.468 15.355 33.299 33 33.299h31v-126h288v126h33c17.645 0 31-15.831 31-33.299V142.809c0-17.467-13.355-30.309-31-30.309z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-printer-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Printer Icon"
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


