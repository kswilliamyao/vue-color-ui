<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer.vue'; 
export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>
<style lang="less">
@import 'assets/app.css';
#app{
  padding-bottom: 2.933333rem /* 110/37.5 */;
}
</style>
