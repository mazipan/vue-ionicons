<template>
  <div
    class="ion"
    :class="rootClass"
    name="qr-scanner-icon"
    :aria-labelledby="iconTitle">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M96 124.171c0-6.938 5.232-12.171 12.171-12.171H176V64h-66.829C75.717 64 48 90.717 48 124.171V192h48v-67.829zM403.579 64H336v48h67.219c6.938 0 12.781 5.232 12.781 12.171V192h48v-67.829C464 90.717 437.033 64 403.579 64zM416 386.829c0 6.938-5.232 12.171-12.171 12.171H336v49h67.829C437.283 448 464 420.283 464 386.829V320h-48v66.829zM108.171 399C101.232 399 96 393.768 96 386.829V320H48v66.829C48 420.283 75.717 448 109.171 448H176v-49h-67.829z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "qr-scanner-icon",
    data () {
      let iconTitle = this.title ? this.title : "Qr Scanner Icon"
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

<style>
.ion{
  display: inline-block;
}
</style>

