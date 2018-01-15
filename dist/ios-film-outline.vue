<template>
  <div class="ion ios-film-outline-icon" name="ios-film-outline-icon" aria-labelledby="ios-film-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M56 88v336h400V88H56zm72 320H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm0-64H72v-48h56v48zm240 256H144V264h224v144zm0-160H144V104h224v144zm72 160h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48zm0-64h-56v-48h56v48z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "ios-film-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Ios Film Outline Icon"
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

