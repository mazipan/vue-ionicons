<template>
  <div class="ion arrow-move-icon" name="arrow-move-icon" aria-labelledby="arrow-move-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M480 256l-96-96v76H276V128h76l-96-96-96 96h76v108H128v-76l-96 96 96 96v-76h108v108h-76l96 96 96-96h-76.2l-.4-108.5 108.6.3V352z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "arrow-move-icon",
    data () {
      let iconTitle = this.title ? this.title : "Arrow Move Icon"
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

