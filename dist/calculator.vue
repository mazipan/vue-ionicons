<template>
  <div
    class="ion calculator-icon"
    name="calculator-icon"
    aria-labelledby="calculator-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M400 32H112c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zM144 208h32v32h-32v-32zm0 64h32v32h-32v-32zm0 64h32v32h-32v-32zm96 96h-96v-32h96v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm64 192h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm0-64h-32v-32h32v32zm64 192h-32v-96h32v96zm0-128h-32v-32h32v32zm0-64h-32v-32h32v32zm0-80H144V80h224v80z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "calculator-icon",
    data () {
      let iconTitle = this.title ? this.title : "Calculator Icon"
      return {
        iconTitle: iconTitle
      }
    },
    props: {
      title: {
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

