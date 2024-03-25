<template>
  <div>
    <div class="h5-bg"><img src="../assets/h5-bg.png" alt=""></div>
    <header-layout></header-layout>
    <router-view/>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'

export default {
  name: 'BasicLayout',
  components: {
    HeaderLayout,
    FooterLayout
  },
  data () {
    return {

    }
  },
  computed: {
    
  },
  created () {
    
  },
  mounted () {

  },
  methods: {
  
  }
}
</script>

<style lang="scss">
@media (min-width:959.95px) {
  .h5-bg {
    display: none;
  }
}
@media (max-width:959.95px) {
  .h5-bg {
    position: absolute;
    z-index: 1;
    img {
      width: 100%;
    }
  }
}
</style>
