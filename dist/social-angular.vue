<template>
  <div class="ion social-angular-icon" name="social-angular-icon" aria-labelledby="social-angular-icon-title">
    <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M213.573 256h84.846l-42.427-89.356z"/><path d="M255.981 32L32 112l46.12 272L256 480l177.75-96L480 112 255.981 32zM344 352l-26.589-56H194.584L168 352h-40L256 72l128 280h-40z"/></svg>
  </div>
</template>

<script>
  export default {
    name: "social-angular-icon",
    data () {
      let iconTitle = this.title ? this.title : "Social Angular Icon"
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

