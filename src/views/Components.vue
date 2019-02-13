<template>
  <div class="home">
    <img src="../assets/images/componentBg.png" class='response' />
    <div class="nav-list">
      <div v-for="(item, index) in elements" class="nav-li" :class="'bg-' + item.color" :key="index" 
       :style="'animation: show '+ (index+1)*0.2 +'s;'">
        <div class="nav-title">{{item.title}}</div>
        <div class="nav-name">{{item.name}}</div>
        <p class="icon" :class="'icon-' + item.icon" ></p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      elements: [
        { title: '操作条', name: 'bar', color: 'purple', icon: 'vipcard' },
        { title: '导航栏 ', name: 'nav', color: 'mauve', icon: 'formfill' },
        { title: '列表', name: 'list', color: 'pink', icon: 'list' },
        { title: '卡片', name: 'card', color: 'brown', icon: 'newsfill' },
        { title: '表单', name: 'form', color: 'red', icon: 'formfill' },
        { title: '时间轴', name: 'timeline', color: 'orange', icon: 'timefill' },
        { title: '聊天', name: 'chat', color: 'green', icon: 'messagefill' },
        { title: '轮播', name: 'swiper', color: 'olive', icon: 'album' },
        { title: '模态框', name: 'modal', color: 'grey', icon: 'squarecheckfill' },
        { title: '步骤条', name: 'steps', color: 'cyan', icon: 'roundcheckfill' },
      ],
    }
  },
}
</script>

<style scoped>

</style>
