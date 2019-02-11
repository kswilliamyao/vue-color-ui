<template>
  <div class="bar">
    <div class="cu-custom" style="height: 50px;">
        <div class="cu-bar fixed bg-gradual-pink" style="height: 40px;padding-top: 5px;">
            <div class='action'  >
                <p class='icon-back'></p>
                <p>操作条</p>
            </div>
        </div>
    </div>
    <div class="cu-bar bg-white margin-top">
        <div class='action'>
            <p class='icon-title p-green'></p>
            <p>底部操作条</p>
        </div>
    </div>
    <div class='box'>
        <div class="cu-bar tabbar bg-white">
            <div class="action">
            <div class='icon-cu-img'>
                <img src='../assets/images/tabbar/basics_cur.png'></img>
            </div>
            <div class='p-green'>元素</div>
            </div>
            <div class="action">
            <div class='icon-cu-img'>
                <img src='../assets/images/tabbar/component.png'></img>
            </div>
            <div class='p-gray'>组件</div>
            </div>
            <div class="action">
            <div class='icon-cu-img'>
                <img src='../assets/images/tabbar/plugin.png'></img>
                <div class='cu-tag badge'>99</div>
            </div>
            <div class='p-gray'>扩展</div>
            </div>
            <div class="action">
            <div class='icon-cu-img'>
                <img src='../assets/images/tabbar/about.png'></img>
                <div class='cu-tag badge'></div>
            </div>
            <div class='p-gray'>关于</div>
            </div>
        </div>
        <div class="cu-bar tabbar margin-bottom-xl bg-black">
            <div class="action p-orange">
            <div class='icon-homefill'></div> 首页
            </div>
            <div class="action p-gray">
            <div class='icon-similar'></div> 分类
            </div>
            <div class="action p-gray">
            <div class='icon-recharge'></div>
            积分
            </div>
            <div class="action p-gray">
            <div class='icon-cart'>
                <div class='cu-tag badge'>99</div>
            </div>
            购物车
            </div>
            <div class="action p-gray">
            <div class='icon-my'>
                <div class='cu-tag badge'></div>
            </div>
            我的
            </div>
        </div>
        <div class="cu-bar tabbar margin-bottom-xl bg-white">
            <div class="action p-green">
            <div class='icon-homefill'></div> 首页
            </div>
            <div class="action p-gray">
            <div class='icon-similar'></div> 分类
            </div>
            <div class="action p-gray add-action">
            <div class='cu-btn icon-add bg-green shadow'></div>
            发布
            </div>
            <div class="action p-gray">
            <div class='icon-cart'>
                <div class='cu-tag badge'>99</div>
            </div>
            购物车
            </div>
            <div class="action p-gray">
            <div class='icon-my'>
                <div class='cu-tag badge'></div>
            </div>
            我的
            </div>
        </div>
        <div class="cu-bar tabbar bg-black">
            <div class="action p-green">
            <div class='icon-homefill'></div> 首页
            </div>
            <div class="action p-gray">
            <div class='icon-similar'></div> 分类
            </div>
            <div class="action p-gray add-action">
            <div class='cu-btn icon-add bg-green shadow'></div>
            发布
            </div>
            <div class="action p-gray">
            <div class='icon-cart'>
                <div class='cu-tag badge'>99</div>
            </div>
            购物车
            </div>
            <div class="action p-gray">
            <div class='icon-my'>
                <div class='cu-tag badge'></div>
            </div>
            我的
            </div>
        </div>

        <div class="cu-bar bg-white tabbar border shop">
            <div class="action" open-type='contact'>
            <div class='icon-service p-green'>
                <div class='cu-tag badge'></div>
            </div>
            客服
            </div>
            <div class="action p-orange">
            <div class='icon-favorfill'></div> 已收藏
            </div>
            <div class="action">
            <div class='icon-cart'>
                <div class='cu-tag badge'>99</div>
            </div>
            购物车
            </div>
            <div class='bg-red submit'>立即订购</div>
        </div>

        <div class="cu-bar bg-white tabbar border shop">
            <div class="action" open-type='contact'>
            <div class='icon-service p-green'>
                <div class='cu-tag badge'></div>
            </div>
            客服
            </div>
            <div class="action">
            <div class='icon-cart'>
                <div class='cu-tag badge'>99</div>
            </div>
            购物车
            </div>
            <div class='bg-orange submit'>加入购物车</div>
            <div class='bg-red submit'>立即订购</div>
        </div>

        <div class="cu-bar bg-white tabbar border shop">
            <div class="action" open-type='contact'>
            <div class='icon-service p-green'>
                <div class='cu-tag badge'></div>
            </div>
            客服
            </div>
            <div class="action">
            <div class=' icon-shop'></div> 店铺
            </div>
            <div class="action">
            <div class='icon-cart'>
                <div class='cu-tag badge'>99</div>
            </div>
            购物车
            </div>
            <div class='btn-group'>
            <div class='cu-btn bg-red round shadow-blur'>立即订购</div>
            </div>
        </div>
        <div class="cu-bar bg-white tabbar border shop">
            <div class="action" open-type='contact'>
            <div class='icon-service p-green'>
                <div class='cu-tag badge'></div>
            </div> 客服
            </div>
            <div class="action">
            <div class='icon-cart'>
                <div class='cu-tag badge'>99</div>
            </div>
            购物车
            </div>
            <div class='btn-group'>
            <div class='cu-btn bg-orange round shadow-blur'>加入购物车</div>
            <div class='cu-btn bg-red round shadow-blur'>立即订购</div>
            </div>
        </div>
      </div>

      <div class="cu-bar bg-white">
  <div class='action'>
    <p class='icon-title p-green'></p>
    <p>标题操作条</p>
  </div>
</div>
<div class='box'>
  <div class="cu-bar justify-center bg-white">
    <div class='action border-title'>
      <p class='p-xl p-bold'>关于我们</p>
      <p class='bg-grey' style='width:2rem'></p>
      <!-- 底部样式 last-child选择器-->
    </div>
  </div>
  <div class="cu-bar justify-center bg-white">
    <div class='action border-title'>
      <p class='p-xl p-bold p-blue'>关于我们</p>
      <p class='bg-gradual-blue' style='width:3rem'></p>
    </div>
  </div>
  <div class="cu-bar justify-center bg-white">
    <div class='action sub-title'>
      <p class='p-xl p-bold p-green'>关于我们</p>
      <p class='bg-green' style='width:2rem'></p>
      <!-- last-child选择器-->
    </div>
  </div>
  <div class="cu-bar justify-center bg-white">
    <div class='action sub-title'>
      <p class='p-xl p-bold p-blue'>关于我们</p>
      <p class='p-ABC p-blue'>about</p>
      <!-- last-child选择器-->
    </div>
  </div>
</div>
<div class='box'>
  <div class="cu-bar bg-white">
    <div class='action border-title'>
      <p class='p-xl p-bold'>关于我们</p>
      <p class='bg-grey' style='width:2rem'></p>
      <!-- 底部样式 last-child选择器-->
    </div>
  </div>
  <div class="cu-bar bg-white">
    <div class='action border-title'>
      <p class='p-xl p-bold p-blue'>关于我们</p>
      <p class='bg-gradual-blue' style='width:3rem'></p>
    </div>
  </div>
  <div class="cu-bar bg-white">
    <div class='action sub-title'>
      <p class='p-xl p-bold p-green'>关于我们</p>
      <p class='bg-green'></p>
      <!-- last-child选择器-->
    </div>
  </div>
  <div class="cu-bar bg-white">
    <div class='action sub-title'>
      <p class='p-xl p-bold p-blue'>关于我们</p>
      <p class='p-ABC p-blue'>about</p>
      <!-- last-child选择器-->
    </div>
  </div>
  <div class="cu-bar bg-white">
    <div class='action title-style-3'>
      <p class='p-xl p-bold'>关于我们</p>
      <p class='p-Abc p-gray self-end margin-left-sm'>about</p>
    </div>
  </div>
  <div class="cu-bar bg-white">
    <div class='action'>
      <p class='icon-title p-green'></p>
      <p class='p-xl p-bold'>关于我们</p>
    </div>
  </div>
  <div class="cu-bar bg-white">
    <div class='action'>
      <p class='icon-titles p-green'></p>
      <p class='p-xl p-bold'>关于我们</p>
    </div>
  </div>
</div>

<div class="cu-bar bg-white">
  <div class='action'>
    <p class='icon-title p-green'></p>
    <p>顶部操作条</p>
  </div>
</div>
<div class='box'>
  <div class="cu-bar bg-white">
    <div class='action'>
      <p class='icon-back p-gray'></p> 返回
    </div>
    <div class='content p-bold'>
      操作条
    </div>
  </div>
  <div class="cu-bar bg-white">
    <div class='action'>
      <p class='icon-homefill p-gray'></p> 首页
    </div>
    <div class='content p-bold'>
      鲜亮的高饱和色彩，专注视觉的小程序组件库
    </div>
    <div class='action'>
      <p class='icon-cardboardfill p-grey'></p>
      <p class='icon-recordfill p-red'></p>
    </div>
  </div>
  <div class="cu-bar bg-blue">
    <div class='action'>
      <p class='icon-close'></p> 关闭
    </div>
    <div class='content p-bold'>
      海蓝
    </div>
  </div>
  <div class="cu-bar bg-black search">
    <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></div>
    <div class='content'>
      ColorUI
    </div>
    <div class='action'>
      <p class="icon-more"></p>
    </div>
  </div>
</div>


<div class="cu-bar bg-white">
  <div class='action'>
    <p class='icon-title p-green'></p>
    <p>搜索操作条</p>
  </div>
</div>
<div class='box'>
  <div class="cu-bar search bg-white">
    <div class='search-form round'>
      <p class="icon-search"></p>
      <input type="p" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
    </div>
    <div class='action'>
      <div class='cu-btn bg-green shadow-blur round'>搜索</div>
    </div>
  </div>
  <div class="cu-bar search bg-white">
    <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"></div>
    <div class='search-form round'>
      <p class="icon-search"></p>
      <input type="p" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
    </div>
    <div class='action'>
      <p>广州</p>
      <p class="icon-triangledownfill"></p>
    </div>
  </div>
  <div class="cu-bar bg-red search">
    <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
    <div class='search-form radius'>
      <p class="icon-search"></p>
      <input type="p" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
    </div>
    <div class='action'>
      <p>广州</p>
      <p class="icon-triangledownfill"></p>
    </div>
  </div>
  <div class="cu-bar bg-cyan search">
    <div class='search-form radius'>
      <p class="icon-search"></p>
      <input type="p" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
    </div>
    <div class='action'>
      <p class='icon-close'></p>
      <p>取消</p>
    </div>
  </div>
</div>

<div class="cu-bar bg-white">
  <div class='action'>
    <p class='icon-title p-green'></p>
    <p>操作条按钮组</p>
  </div>
</div>

<div class='box'>
  <div class="cu-bar btn-group">
    <div class='cu-btn bg-green shadow-blur round lg'>保存</div>
  </div>
  <div class="cu-bar btn-group">
    <div class='cu-btn bg-green shadow-blur'>保存</div>
    <div class='cu-btn p-green line-green shadow'>上传</div>
  </div>
  <div class="cu-bar btn-group">
    <div class='cu-btn bg-green shadow-blur round'>保存</div>
    <div class='cu-btn bg-blue shadow-blur round'>提交</div>
  </div>
</div>


<div class="cu-bar bg-white">
  <div class='action'>
    <p class='icon-title p-green'></p>
    <p>输入操作条</p>
  </div>
</div>
<div class='box'>
  <div class="cu-bar input">
    <div class='action'>
      <p class='icon-sound p-grey'></p>
    </div>
    <input class='solid-bottom'  maxlength="300" cursor-spacing="10"></input>
    <div class='action'>
      <p class='icon-emojifill p-grey'></p>
    </div>
    <div class='cu-btn bg-green shadow-blur'>发送</div>
  </div>

  <div class="cu-bar input">
    <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></div>
    <div class='action'>
      <p class='icon-roundaddfill p-grey'></p>
    </div>
    <input class='solid-bottom' maxlength="300" cursor-spacing="10"></input>
    <div class='action'>
      <p class='icon-emojifill p-grey'></p>
    </div>
    <div class='cu-btn bg-green shadow-blur'>发送</div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data () {
    return {
    }
  },
}
</script>

<style scoped>
.bar{
    background: #ddd;
}
.box {  
  margin: 0.533333rem /* 20/37.5 */; 
}

.box div.cu-bar {
  margin-top: 1.066667rem /* 40/37.5 */;
}

</style>
