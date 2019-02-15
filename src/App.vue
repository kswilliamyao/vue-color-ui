<template>
  <div id="app">
    <Header v-if="header" :title="title"></Header>
    <transition :name="animate">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'; 
export default {
  name: 'app',
  data() {
    return {
      animate: '',
      router: null,
      header: false,
      title: '首页',
    }
  },
  watch: {
    '$route' (to) {
      this.animate = to.meta.animate;
      this.router = this.$route;
      this.title = this.$route.meta.title;
      const url = ['/home', '/components', '/plugin', '/about'];
      if (url.indexOf(this.router.path) < 0) {
        this.header = true;
      } else {
        this.header = false;
      }
    }
  },
  components: {
    Footer,
    Header
  }
}
</script>
<style lang="less">
@import 'assets/app.css';
#app{
  padding-bottom: 2.933333rem /* 110/37.5 */;
}
body{
  background: #f5f5f5;
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


image[class*="gif-"]{
  border-radius: 6rpx;
  display: block;
}

.gif-black{  
  mix-blend-mode: screen;  
}
.gif-white{  
  mix-blend-mode: multiply; 
}


[class*=animation-] {
    animation-duration: .5s;
    animation-timing-function: ease-out;
    animation-fill-mode: both
}

.animation-fade {
    animation-name: fade;
    animation-duration: .8s;
    animation-timing-function: linear
}

.animation-scale-up {
    animation-name: scale-up
}

.animation-scale-down {
    animation-name: scale-down
}

.animation-slide-top {
    animation-name: slide-top
}

.animation-slide-bottom {
    animation-name: slide-bottom
}

.animation-slide-left {
    animation-name: slide-left
}

.animation-slide-right {
    animation-name: slide-right
}

.animation-shake {
    animation-name: shake
}

.animation-reverse {
    animation-direction: reverse
}

@keyframes fade {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

@keyframes scale-up {
    0% {
        opacity: 0;
        transform: scale(.2)
    }

    100% {
        opacity: 1;
        transform: scale(1)
    }
}

@keyframes scale-down {
    0% {
        opacity: 0;
        transform: scale(1.8)
    }

    100% {
        opacity: 1;
        transform: scale(1)
    }
}

@keyframes slide-top {
    0% {
        opacity: 0;
        transform: translateY(-100%)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes slide-bottom {
    0% {
        opacity: 0;
        transform: translateY(100%)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0)
    }

    10% {
        transform: translateX(-9px)
    }

    20% {
        transform: translateX(8px)
    }

    30% {
        transform: translateX(-7px)
    }

    40% {
        transform: translateX(6px)
    }

    50% {
        transform: translateX(-5px)
    }

    60% {
        transform: translateX(4px)
    }

    70% {
        transform: translateX(-3px)
    }

    80% {
        transform: translateX(2px)
    }

    90% {
        transform: translateX(-1px)
    }
}

@keyframes slide-left {
    0% {
        opacity: 0;
        transform: translateX(-100%)
    }

    100% {
        opacity: 1;
        transform: translateX(0)
    }
}

@keyframes slide-right {
    0% {
        opacity: 0;
        transform: translateX(100%)
    }

    100% {
        opacity: 1;
        transform: translateX(0)
    }
}

</style>
