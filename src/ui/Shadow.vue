<template>
	<div id="Shadow">
        <div class="cu-bar bg-white solid-bottom">
        <div class='action'>
            <p class='icon-title text-blue'></p>边框
        </div>  
        <div class='action'>
        <switch class='sm'></switch>
        </div>   
        </div>
        <div class='padding bg-white text-center'>
        <div class='padding' :class='size? "solids":""'>四周</div>
        <div class='padding margin-top' :class='"" + size? "solids-top":""'>上</div>
        <div class='padding margin-top' :class='size ? "solids-right":""'>右</div>
        <div class='padding margin-top' :class='size ? "solids-bottom":""'>下</div>
        <div class='padding margin-top' :class='size ? "solids-left":""'>左</div>
        </div>
        <div class="cu-bar bg-white margin-top">
        <div class='action'>
            <p class='icon-title text-blue'></p>阴影
        </div>
        </div>
        <div class="padding text-center">
        <div class="padding-xl radius shadow bg-white"> 默认阴影</div>
        <div class="padding-xl radius shadow-lg bg-white margin-top">长阴影</div>
        <div class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</div>
        <div class="padding-xl radius shadow-blur bg-red margin-top">根据背景颜色而改变的阴影</div>
        <div class="padding-xl radius shadow-blur bg-red margin-top bg-img" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"><div>根据背景颜色而改变的阴影</div></div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'Shadow',
  data () {
    return {
        size: true,
    }
  },
}
</script>

<style scoped>
</style>
