<template>
  <div
    class="ion android-star-half-icon"
    name="android-star-half-icon"
    aria-labelledby="android-star-half-icon-title">

    <svg viewBox="0 0 512 512"  :width="w" :height="h"><path d="M458 210.409l-145.267-12.476L256 64l-56.743 133.934L54 210.409l110.192 95.524L131.161 448 256 372.686 380.83 448l-33.021-142.066L458 210.409zM272.531 345.287L256 335.313l-.002-189.277 27.27 64.379 7.52 17.751 19.208 1.65 69.846 5.998-52.993 45.939-14.576 12.636 4.367 18.788 15.875 68.299-59.984-36.189z"/></svg>

  </div>
</template>

<script>
  export default {
    name: "android-star-half-icon",
    data () {
      let iconTitle = this.title ? this.title : "Android Star Half Icon"
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

