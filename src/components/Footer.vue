<template>
  <div id="footer">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
        router: null,
    }
  },
  created() {
      this.getRouter();
  },
  watch: {
      '$route': function() {
          this.getRouter();
      }
  },
  methods: {
      gotoUrl(url) {
        this.$router.push(url);
      },
      getRouter() {
          this.router = this.$route;
      },
  },
  created() {
    console.log(this.slots());
  },
  render: function (createElement, context) {
    // 完全透明的传入任何特性、事件监听器、子结点等。
    return createElement('button', context.data, context.children)
  }
}
</script>

<style scoped lang="less">

#footer {
    width: 100%;
    height: 200px;
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
