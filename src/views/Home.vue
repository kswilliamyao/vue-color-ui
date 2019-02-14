<template>
  <div class="home">
    <img src="../assets/images/BasicsBg.png" class='response' />
    <div class='nav-list'>
      <div v-for="(item, index) in elements" class="nav-li" :class="'bg-' + item.color" :key="index" 
       :style="'animation: show '+ (index+1)*0.2 +'s;'" @click="gotoUrl(item.url)">
        <div class="nav-title">{{item.title}}</div>
        <div class="nav-name">{{item.name}}</div>
        <p class="icon" :class="'icon-' + item.icon" ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      elements: [{
          title: '布局',
          name: 'layout',
          color: 'cyan',
          icon: 'newsfill',
          url: '/layout'
        },
        {
          title: '背景',
          name: 'background',
          color: 'blue',
          icon: 'colorlens',
          url: '/background'
        },
        {
          title: '文本',
          name: 'text',
          color: 'purple',
          icon: 'font',
          url: '/text'
        },
        {
          title: '图标 ',
          name: 'icon',
          color: 'mauve',
          icon: 'icon',
          url: '/icon'
        },
        {
          title: '按钮',
          name: 'button',
          color: 'pink',
          icon: 'btn',
          url: '/button'
        },
        {
          title: '标签',
          name: 'tag',
          color: 'brown',
          icon: 'tagfill',
          url: '/tag'
        },
        {
          title: '头像',
          name: 'avatar',
          color: 'red',
          icon: 'myfill',
          url: '/avatar'
        },
        {
          title: '进度条',
          name: 'progress',
          color: 'orange',
          icon: 'icloading',
          url: '/progress'
        },
        {
          title: '边框阴影',
          name: 'shadow',
          color: 'olive',
          icon: 'copy',
          url: '/shadow'
        },
        {
          title: '加载',
          name: 'loading',
          color: 'green',
          icon: 'loading2',
          url: '/loading'
        }
      ]
    }
  },
  methods: {
      gotoUrl(url) {
        this.$router.push(url);
      },
  },
}
</script>

<style scoped>

</style>
