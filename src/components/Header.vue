<template>
  <div id="header">
    <div class="cu-bar bg-blue">
        <div class='action' @click="back()">
        <p class='icon-back'></p> 
        </div>
        <div class='content text-bold'>
        {{title}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title'],
  data () {
    return {
        router: null,
    }
  },
  methods: {
      back() {
        this.$router.back();
      },
  },
}
</script>

<style  lang="less">

#header {
    width: 100%;
    .cu-bar{
        .tabbar {
            img{
                width: 1.333333rem /* 50/37.5 */;
                height: 1.333333rem /* 50/37.5 */;
            }
        }
    }
}

</style>
