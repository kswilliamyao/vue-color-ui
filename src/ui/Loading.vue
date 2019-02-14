<template>
	<div id="Loading">
    <div class="cu-bar bg-white">
    <div class='action'>
        <p class='icon-title text-blue'></p>背景
    </div>
    </div>
    <div class="cu-load bg-blue " :class="!isLoad?'loading':'over'"></div>
    <div class="cu-bar bg-white margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p>加载状态
    </div>
    <div class='action'>
        <switch class='sm' bindchange='isLoading'></switch>
    </div>
    </div>
    <div class="cu-load bg-grey" :class="!isLoad?'loading':'over'"></div>
    <div class="cu-bar bg-white margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p> 加载错误
    </div>
    </div>
    <div class="cu-load bg-red erro"></div>

    <div class="cu-bar bg-white margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p> 弹框加载
    </div>
    <div class='action'>
        <button class='cu-btn bg-green shadow'>
        点我
        </button>
    </div>
    </div>
    <div class='cu-load load-modal' v-if="loadModal"> 
        <!-- <div class='icon-emojifill text-orange'></div> -->
        <img src='../assets/images/logo.png' class='png' mode='aspectFit' />
        <div class='gray-text'>加载中...</div>
    </div>
    <div class="cu-bar bg-white margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p>进度条加载
    </div>
    <div class='action'>
        <button class='cu-btn bg-green shadow'>
        点我
        </button>
    </div>
    </div>
    <div class='load-progress' :class='loadProgress!=0?"show":"hide"'>
    <div class='load-progress-bar bg-green' :style="'transform: translate3d('+ -(100-loadProgress) +'%, 0px, 0px)'"></div>
    <div class='load-progress-spinner text-green'></div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
        loadProgress: 0,
        isLoad: true,
        loadModal: false,
    }
  },
}
</script>

<style scoped>
button{
    border: none;
    outline: none;
}
</style>
