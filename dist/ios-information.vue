<template>
  <div class="ion ios-information-icon" name="ios-information-icon" aria-labelledby="ios-information-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-4.5 104c11.1 0 20 9 20 20s-9 20-20 20-20-9-20-20 8.9-20 20-20zM288 352h-64v-8h16V224h-16v-8h48v128h16v8z"/></svg>
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
      }
    }
  }
</script>

<style>
.ion{
  display: inline-block;
}
</style>

