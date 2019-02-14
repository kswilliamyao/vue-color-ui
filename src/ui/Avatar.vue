<template>
	<div id="Avatar">
        <div class="cu-bar bg-white">
        <div class='action'>
            <text class='icon-title text-blue'></text>头像形状
        </div>
        </div>
        <div class="padding">
        <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
        <div class="cu-avatar radius margin-left" style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"></div>
        </div>
        <div class="cu-bar bg-white margin-top">
        <div class='action'>
            <text class='icon-title text-blue'></text>头像尺寸
        </div>
        </div>
        <div class="padding">
        <div class="cu-avatar sm round margin-left" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
        <div class="cu-avatar round margin-left" style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"></div>
        <div class="cu-avatar lg round margin-left" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></div>
        <div class="cu-avatar xl round margin-left" style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"></div>
        </div>
        <div class="padding">
        <div class="cu-avatar sm round margin-left bg-red"> A</div>
        <div class="cu-avatar round margin-left bg-red">B</div>
        <div class="cu-avatar lg round margin-left bg-red">C</div>
        <div class="cu-avatar xl round margin-left bg-red">D</div>
        </div>
        <div class="padding">
        <div class="cu-avatar sm round margin-left bg-red"> 蔚</div>
        <div class="cu-avatar round margin-left bg-red">蓝</div>
        <div class="cu-avatar lg round margin-left bg-red">
            <text>wl</text>
        </div>
        <div class="cu-avatar xl round margin-left bg-red">
            <text class='avatar-text'>网络</text>
        </div>
        </div>
        <div class="cu-bar bg-white margin-top">
        <div class='action'>
            <text class='icon-title text-blue'></text>内嵌文字(图标)
        </div>
        </div>
        <div class="padding">
        <div class="cu-avatar radius">
            <text class='icon-people'></text>
        </div>
        <div class="cu-avatar radius  margin-left">
            <text>港</text>
        </div>
        </div>

        <div class="cu-bar bg-white margin-top">
        <div class='action'>
            <text class='icon-title text-blue'></text>头像颜色
        </div>
        </div>
        <div class="padding-sm">
        <div class="cu-avatar round lg  margin-xs" v-for="(item, keys) in ColorList" :key="keys" :class="'bg-' + item.name">
            <text class='avatar-text'>{{item.name}}</text>
        </div>
        </div>
        <div class="cu-bar bg-white margin-top">
        <div class='action'>
            <text class='icon-title text-blue'></text>头像组
        </div>
        </div>
        <div class='padding'>
        <div class="cu-avatar-group">
            <div class="cu-avatar round lg" v-for="(item, index) in 4" :key="index" :style=" 'background-image:url(https://image.weilanwl.com/img/square-' + (index + 1) +'.jpg);'"></div>
        </div>
        </div>

        <div class="cu-bar bg-white margin-top">
        <div class='action'>
            <text class='icon-title text-blue'></text>头像标签
        </div>
        </div>
        <div class='padding'>
        <div class="cu-avatar round lg margin-left"  v-for="(item, index) in 4"  :key="index" :style="'background-image:url(https://image.weilanwl.com/img/square-' + (index + 1) +'.jpg);'">
            <div class="cu-tag badge" :class="index%2==0?'icon-female bg-pink':'icon-male bg-blue'"></div>
        </div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'Avatar',
  data () {
    return {
      shadow: true,
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
}
</script>

<style scoped>
</style>
