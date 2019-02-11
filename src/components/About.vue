<template>
  <div class="about">
    <div class='UCenter-bg'>
      <img src='../assets/images/logo.png' class='png' mode='widthFix' />
        <div class='text-xl'>Vue版ColorUI组件库
      </div>
      <div class='margin-top-sm'>
        <p>By: Martin Yin</p>
      </div>
      <img src='../assets/images/wave.gif' class='gif-wave' />
    </div>
    <div class='padding flex text-center text-grey bg-white shadow-warp'>
      <div class='flex flex-sub flex-direction solid-right'>
        <div class="text-xxl text-orange" v-if="visitTotal > 0">{{visitTotal}}</div>
        <div class="margin-top-sm">
          <p class='icon-attentionfill'></p> View</div>
      </div>
      <div class='flex flex-sub flex-direction solid-right'>
        <div class="text-xxl text-blue" v-if="starCount > 0">{{starCount}}</div>
        <div class="margin-top-sm">
          <p class='icon-favorfill'></p> Star</div>
      </div>
      <div class='flex flex-sub flex-direction'>
        <div class="text-xxl text-green" v-if="forksCount > 0">{{forksCount}}</div>
        <div class="margin-top-sm">
          <p class='icon-fork'></p> Fork</div>
      </div>
    </div>

    <div class="cu-list menu card-menu margin-bottom-xl shadow-lg" style="margin-top: 20px;">
      <div class="cu-item arrow">
        <div class='content flex' >
          <p class='icon-github text-grey text-margin-12'></p>
          <p class='text-grey flex-sub'>GitHub</p>
        </div>
      </div>
      <div class="cu-item arrow">
        <div class='content flex'>
          <div class='icon-formfill text-green text-margin-12'></div>
          <p class='text-grey flex-sub'>关于</p>
        </div>
      </div>
      <div class="cu-item arrow">
        <div class='content flex'>
          <div class='icon-formfill text-green text-margin-12'></div>
          <div class='text-grey flex-sub'>日志</div>
        </div>
      </div>
      <div class="cu-item arrow">
        <div class='content flex'>
          <p class='icon-appreciatefill text-red text-margin-12'></p>
          <p class='text-grey flex-sub'>赞赏支持</p>
        </div>
      </div>
      <div class="cu-item arrow">
        <div class='content flex'>
          <p class='icon-writefill text-red text-margin-12'></p>
          <p class='text-grey flex-sub'>意见反馈</p>
        </div>
      </div>
      <div class="cu-item arrow">
        <div class='content flex'>
          <p class='icon-creativefill text-orange text-margin-12'></p>
          <p class='text-grey flex-sub'>Bug测试</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      starCount: 0,
      forksCount: 0,
      visitTotal: 0
    }
  },
}
</script>

<style scoped>
.about{
  padding-bottom: 100px;
  background: #f5f5f5;
}
.png{
  width: 5.333333rem /* 200/37.5 */;
  height: 5.333333rem /* 200/37.5 */;
}
.UCenter-bg {
  background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
  background-size: cover;
  height: 14.666667rem /* 550/37.5 */;
  display: flex;
  justify-content: center;
  padding-top: 1.066667rem /* 40/37.5 */;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 0.08rem /* 3/37.5 */ rgba(0, 0, 0, 0.3);
}

.UCenter-bg text {
  opacity: 0.8;
}

.UCenter-bg img {
  width: 5.333333rem /* 200/37.5 */;
  height: 5.333333rem /* 200/37.5 */;
}

.UCenter-bg .gif-wave{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 2.666667rem /* 100/37.5 */;   
}

.margin-top-sm p{
  display: inline;
}




</style>
