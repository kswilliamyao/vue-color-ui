<template>
	<div id="Button">
       <div class="cu-bar bg-white solid-bottom">
        <div class='action'>
            <p class='icon-title text-blue'></p>按钮形状
        </div>
        </div>
        <div class="padding flex flex-wrap justify-between align-center bg-white">
        <div class='cu-btn'>默认</div>
        <div class='cu-btn round'>圆角</div>
        <div class='cu-btn icon'>
            <p class='icon-emojifill'></p>
        </div>
        </div>
        <div class="cu-bar margin-top bg-white solid-bottom">
        <div class='action'>
            <p class='icon-title text-blue'></p>按钮尺寸
        </div>
        </div>
        <div class="padding flex flex-wrap justify-between align-center bg-white">
        <div class='cu-btn round sm'>小尺寸</div>
        <div class='cu-btn round'>默认</div>
        <div class='cu-btn round lg'>大尺寸</div>
        </div>
        <div class="cu-bar margin-top bg-white">
        <div class='action'>
            <p class='icon-title text-blue'></p>按钮颜色
        </div>
        <div class='action'>
          <p class='text-df margin-right-sm'>阴影</p>
          <label for=""><input type="checkbox" name="" id="" class="a-switch" :value="shadow" @click="switchClick(shadow)"></label>
        </div>
        </div>


        <div class='grid col-5 padding-sm'>
        <div class='margin-tb-sm text-center' v-for="(item, index) in ColorList" :key="index">
            <div class='cu-btn round' :class="['bg-' + item.name, shadow ? 'shadow':'']">{{item.title}}</div>
        </div>
        </div>
        <div class="cu-bar margin-top bg-white">
        <div class='action'>
            <p class='icon-title text-blue'></p>镂空按钮
        </div>
        <div class="action">
          <label for="man" class="radio">
            <span class="radio-bg"></span>
            <input type="radio" name="sex" id="man" :checked="bordersize"  @click="radioClick(true)"/> 有
            <span class="radio-on"></span>
          </label>
          <label for="woman" class="radio">
            <span class="radio-bg"></span>
            <input type="radio" name="sex" id="woman" :checked="bordersize"  @click="radioClick(false)"/> 无
            <span class="radio-on"></span>
          </label>
        </div>
        </div>
        <div class='grid col-5 padding-sm'>
        <div class='margin-tb-sm text-center' v-for="(item, index) in ColorList" :key="index">
            <div class='cu-btn round' :class="[bordersize ?'lines-' + item.name:'line-' + item.name]">{{item.title}}</div>
        </div>
        </div>
        <div class="cu-bar margin-top bg-white">
        <div class='action'>
            <p class='icon-title text-blue'></p>块状按钮
        </div>
        </div>
        <div class="padding flex flex-direction">
        <div class='cu-btn bg-grey lg'>玄灰</div>
        <div class='cu-btn bg-red margin-tb-sm lg'>嫣红</div>
        </div>
        <div class="cu-bar margin-top bg-white">
        <div class='action'>
            <p class='icon-title text-blue'></p>无效状态
        </div>
        </div>
        <div class="padding">
        <div class='cu-btn block bg-blue margin-tb-sm lg'>无效状态</div>
        <div class='cu-btn block line-blue margin-tb-sm lg'>无效状态</div>
        </div>
        <div class="cu-bar margin-top bg-white">
        <div class='action'>
            <p class='icon-title text-blue'></p>按钮加图标
        </div>
        </div>
        <div class="padding-xl">
        <div class='cu-btn block line-orange lg'>
            <p class='icon-upload'></p> 图标</div>
        <div class='cu-btn block bg-blue margin-tb-sm lg'>
            <p class='icon-loading2 iconfont-spin'></p> 加载</div>
        <div class='cu-btn block bg-black margin-tb-sm lg' loading> 微信加载</div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      shadow: false,
      bordersize: true,
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
    switchClick(val) {
      this.shadow = !val;
    },
    radioClick(val) {
      this.bordersize = val;
    }
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

  .radio{
    display: inline-block;
    position: relative;
    line-height: 45px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 0.746667rem /* 28/37.5 */;
  }
  .radio input{
    display: none;
  }
  .radio .radio-bg{
    display: inline-block;
    height: 45px;
    width: 45px;
    padding: 0;
    background: #fff;
    border: 1px solid #0081ff;
    border-radius: 100%;
    vertical-align: top;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .radio .radio-on{
    display: none;
  }
  .radio input:checked + span.radio-on{
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 100%;
    background: #FFFFFF;
    top: 13px;
    left: 13px;
    background-image: linear-gradient(#0081ff 0, #0081ff 100%);
    transform: scale(0, 0);
    transition: all 0.2s ease;
    transform: scale(1, 1);
    display: inline-block;
  }



  p{
    line-height: 1 !important;
  }
</style>
