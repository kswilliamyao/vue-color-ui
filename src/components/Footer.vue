<template>
  <div id="footer">
    <div class='box'>
        <div class="cu-bar tabbar bg-white">
            <div class="action text-green" @click="gotoUrl('/home')">
                <div class='icon-homefill'></div> 首页
            </div>
            <div class="action text-gray" @click="gotoUrl('/components')">
                <div class='icon-similar'></div> 组件
            </div>
            <div class="action text-gray add-action">
                <div class='cu-btn icon-add bg-green shadow'></div>
                测试
            </div>
            <div class="action text-gray" @click="gotoUrl('/plugin')">
            <div class='icon-cart'>
            </div>
            拓展
            </div>
            <div class="action text-gray" @click="gotoUrl('/about')">
            <div class='icon-my'>
            </div>
            关于我
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
      gotoUrl(url) {
        this.$router.push(url);
      }
  },
}
</script>

<style scoped lang="less">

#footer {
    width: 100%;
    position: fixed;
    z-index: 1000;
    bottom: 0px;
    left: 0px;
    .cu-bar.tabbar {
        img{
            width: 1.333333rem /* 50/37.5 */;
            height: 1.333333rem /* 50/37.5 */;
        }
    }
}

</style>
