<template>
  <div class="ion information-circled-icon" name="information-circled-icon" aria-labelledby="information-circled-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M480 253C478.3 129.3 376.7 30.4 253 32S30.4 135.3 32 259c1.7 123.7 103.3 222.6 227 221 123.7-1.7 222.7-103.3 221-227zM256 111.9c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM300 395h-88v-11h22V224h-22v-12h66v172h22v11z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "information-circled-icon",
    data () {
      let iconTitle = this.title ? this.title : "Information Circled Icon"
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

