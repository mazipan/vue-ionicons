<template>
  <div
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="md-podium-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M32 224h128v192H32zm160-96h128v288H192zm160 160h128v128H352z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "md-podium-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : "Md Podium Icon"
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

