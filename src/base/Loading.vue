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
        <p class='text-df margin-right-sm'>阴影</p>
        <label for=""><input type="checkbox" name="" id="" class="a-switch" :value="isLoad" @click="loadingClick(isLoad)"></label>
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
    <div class='action' @click="loadModals()" >
        <button class='cu-btn bg-green shadow'>
        点我
        </button>
    </div>
    </div>
    <div class='cu-load load-modal' v-if="loadModal"> 
        <div class='icon-emojifill text-orange'></div>
        <div class='gray-text'>加载中...</div>
    </div>
    <div class="cu-bar bg-white margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p>进度条加载
    </div>
    <div class='action' @click="loadProgre()">
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
        isLoad: false,
        loadModal: false,
    }
  },
  methods: {
      loadingClick(isLoad) {
          this.isLoad = !isLoad;
      },
      loadProgre() {
        this.loadProgress = this.loadProgress + 3;
        if (this.loadProgress < 100){
            setTimeout(() => {
                this.loadProgre();
            }, 100)
        }else{
            this.loadProgress = 0;
        }
      },
      loadModals () {
        this.loadModal = true;
        setTimeout(()=> {
            this.loadModal = false;
        }, 2000)
      },
  },
}
</script>

<style scoped>
button{
    border: none;
    outline: none;
}

  .a-switch{
    width: 80px;
    height: 45px;
    border-radius: 30px;
    -webkit-appearance: none;
    user-select: none;
    outline: none; 
    display: block;
    background-color: #e0e0e0;
    box-shadow: #c2c2c2 0 0 0 0 inset;
    position: relative;
    transition:0.4s;
  }
  .a-switch:before{
    content: '';
    width: 42px;
    height: 42px;
    border-radius: 100%;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); 
    position: absolute;
    left:0;
    top:0.5px;
    transition:0.3s;
  }
  .a-switch:checked{
    border-color: #81d480;
    background-color: #81d480; 
  }
  .a-switch:checked:before{
    left: 39px;
  }
</style>
