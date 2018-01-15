<template>
  <div class="ion ios-calculator-icon" name="ios-calculator-icon" aria-labelledby="ios-calculator-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M368 64H144c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-8 216v128h-48V280h48zm0-80v48h-48v-48h48zm-80 160v48h-48v-48h48zm0-80v48h-48v-48h48zm0-80v48h-48v-48h48zm-80 160v48h-48v-48h48zm0-80v48h-48v-48h48zm0-80v48h-48v-48h48zm-48-48v-48h208v48H152z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-calculator-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Calculator Icon"
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

