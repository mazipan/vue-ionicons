<template>
  <div class="ion social-angular-outline-icon" name="social-angular-outline-icon" aria-labelledby="social-angular-outline-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M255.982 64l187.967 69.105-39.17 230.389-148.881 79.949-148.812-80.051L68.031 133.11 255.982 64m-.001-32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32z"/><path d="M344 352h40L256 72 128 352h40l26.584-56h122.827L344 352zm-130.427-96l42.419-89.356L298.419 256h-84.846z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-angular-outline-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Angular Outline Icon"
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

