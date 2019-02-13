<template>
  <div id="app">
    <transition :name="animate">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer.vue'; 
export default {
  name: 'app',
  data() {
    return {
      animate: '',
    }
  },
  watch: {
    '$route' (to) {
      this.animate = to.meta.animate;
    }
  },
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
body{
  overflow-x: hidden;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
