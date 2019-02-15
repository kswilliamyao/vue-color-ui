<template>
	<div id="Progress">
    <div class="cu-bar bg-white solid-bottom">
    <div class='action'>
        <text class='icon-title text-blue'></text>进度条形状
    </div>
    </div>
    <div class="padding bg-white">
    <div class="cu-progress">
        <div class='bg-red' :style="{ 'width': loading ? '61.8%':''}">61.8%</div>
    </div>
    <div class="cu-progress radius margin-top">
        <div class='bg-red' :style="{ 'width': loading ? '61.8%':''}">61.8%</div>
    </div>
    <div class="cu-progress round margin-top">
        <div class='bg-red' :style="{ 'width': loading ? '61.8%':''}">61.8%</div>
    </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
    <div class='action'>
        <text class='icon-title text-blue'></text>进度条尺寸
    </div>
    </div>
    <div class="padding bg-white">
    <div class="cu-progress round">
        <div class='bg-red' :style="{ 'width': loading ? '61.8%':''}"></div>
    </div>
    <div class="cu-progress round margin-top sm">
        <div class='bg-red' :style="{ 'width': loading ? '61.8%':''}"></div>
    </div>
    <div class="cu-progress round margin-top xs">
        <div class='bg-red' :style="{ 'width': loading ? '61.8%':''}"></div>
    </div>
    </div>

    <div class="cu-bar bg-white solid-bottom margin-top">
    <div class='action'>
        <text class='icon-title text-blue'></text>进度条颜色
    </div>
    <div class='action' @click="showModal()">
        <div class='padding-sm solid radius shadow-blur' :class="'bg-' + color"></div>
    </div>
    </div>
    <div class="padding" :class="color === 'white'?'bg-grey':'bg-white'">
    <div class="cu-progress round">
        <div :class='"bg-" + color' :style="{ 'width': loading ? '61.8%':''}"></div>
    </div>
    </div>


    <div class="cu-bar bg-white solid-bottom margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p>进度条条纹
    </div>
    <div class='action'>
      <p class='text-df margin-right-sm'>条纹</p>
      <label for=""><input type="checkbox" name="" id="" class="a-switch" :value="active" @click="switchClick(active)"></label>
    </div>
    </div>
    <div class="padding bg-white">
    <div class="cu-progress round sm striped" :class="active ? 'active':''">
        <div class='bg-green' :style="{ 'width': loading ? '61.8%':''}"></div>
    </div>
    <div class="cu-progress round sm margin-top-sm striped"  :class="active ? 'active':''">
        <div class='bg-black' :style="{ 'width': loading ? '61.8%':''}"></div>
    </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p>进度条比例
    </div>
    </div>
    <div class="padding bg-white">
    <div class="cu-progress radius striped active">
        <div class='bg-red' :style="{ 'width': loading ? '30%':''}">30%</div>
        <div class='bg-olive' :style="{ 'width': loading ? '45%':''}">45%</div>
        <div class='bg-cyan' :style="{ 'width': loading ? '25%':''}">25%</div>
    </div>
    </div>
    <div class="cu-bar bg-white solid-bottom margin-top">
    <div class='action'>
        <p class='icon-title text-blue'></p>进度条布局
    </div>
    </div>
    <div class="padding bg-white ">
    <div class='flex'>
        <div class="cu-progress round">
        <div class='bg-green' :style="{ 'width': loading ? '80%':''}"></div>
        </div>
        <p class='icon-roundcheckfill text-green margin-left-sm'></p>
    </div>
    <div class='flex margin-top'>
        <div class="cu-progress round">
        <div class='bg-green' :style="{ 'width': loading ? '80%':''}"></div>
        </div>
        <p class='margin-left'>80%</p>
    </div>
    </div>

    <div class="cu-modal" :class="modalName === 'ColorModal' ? 'show':''">
    <div class="cu-dialog">
        <div class="cu-bar justify-end">
        <div class='content'>选择颜色</div>
        <div class='action' @click="hideModal()">
            <p class='icon-close text-red'></p>
        </div>
        </div>
        <div class='grid col-5 padding'>
        <div class='padding-xs' v-for="(item, index) in ColorList" :key="index" @click="SetColor(item.name)">
            <div class='padding-tb radius' :class="'bg-' + item.name"> {{item.title}} </div>
        </div>
        </div>
    </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {
      loading: true,
      color:'red',
      modalName: null,
      active: false,
      ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
    }
  },
  methods: {
      showModal() {
        this.modalName = 'ColorModal';
      },
      SetColor(color) {
        this.color = color;
        this.modalName = null;
      },
      hideModal() {
        this.modalName = null;
      },
      switchClick(val) {
        this.active = !val;
      },
  },
}
</script>

<style scoped>
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
