<template>
  <div class="bar">
    <div class="cu-bar bg-white margin-top">
      <div class='action'>
        <p class='icon-title text-green'></p>
        <p>底部操作条</p>
      </div>
    </div>
    <div class='box'>
      <Tabbar />
      <div class="cu-bar bg-white tabbar border shop" style="margin-top: 20px;">
        <button class="action" open-type='contact'>
          <div class='icon-service text-green'>
            <div class='cu-tag badge'></div>
          </div>
          客服
        </button>
        <div class="action text-orange">
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

      <div class="cu-bar bg-white tabbar border shop" style="margin-top: 20px;">
        <button class="action" open-type='contact'>
          <div class='icon-service text-green'>
            <div class='cu-tag badge'></div>
          </div>
          客服
        </button>
        <div class="action">
          <div class='icon-cart'>
            <div class='cu-tag badge'>99</div>
          </div>
          购物车
        </div>
        <div class='bg-orange submit'>加入购物车</div>
        <div class='bg-red submit'>立即订购</div>
      </div>

      <div class="cu-bar bg-white tabbar border shop" style="margin-top: 20px;">
        <button class="action" open-type='contact'>
          <div class='icon-service text-green'>
            <div class='cu-tag badge'></div>
          </div>
          客服
        </button>
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
          <button class='cu-btn bg-red round shadow-blur'>立即订购</button>
        </div>
      </div>
      <div class="cu-bar bg-white tabbar border shop" style="margin-top: 20px;">
        <button class="action" open-type='contact'>
          <div class='icon-service text-green'>
            <div class='cu-tag badge'></div>
          </div> 客服
        </button>
        <div class="action">
          <div class='icon-cart'>
            <div class='cu-tag badge'>99</div>
          </div>
          购物车
        </div>
        <div class='btn-group'>
          <button class='cu-btn bg-orange round shadow-blur'>加入购物车</button>
          <button class='cu-btn bg-red round shadow-blur'>立即订购</button>
        </div>
      </div>
    </div>
    <div class="cu-bar bg-white">
      <div class='action'>
        <p class='icon-title text-green'></p>
        <p>标题操作条</p>
      </div>
    </div>
    <div class='box' v-if="true">
      <div class="cu-bar justify-center bg-white">
        <div class='action border-title'>
          <p class='text-xl text-bold'>关于我们</p>
          <p class='bg-grey' style='width:2rem'></p>
          <!-- 底部样式 last-child选择器-->
        </div>
      </div>
      <div class="cu-bar justify-center bg-white">
        <div class='action border-title'>
          <p class='text-xl text-bold text-blue'>关于我们</p>
          <p class='bg-gradual-blue' style='width:3rem'></p>
        </div>
      </div>
      <div class="cu-bar justify-center bg-white">
        <div class='action sub-title'>
          <p class='text-xl text-bold text-green'>关于我们</p>
          <p class='bg-green' style='width:2rem'></p>
          <!-- last-child选择器-->
        </div>
      </div>
      <div class="cu-bar justify-center bg-white">
        <div class='action sub-title'>
          <p class='text-xl text-bold text-blue'>关于我们</p>
          <p class='text-ABC text-blue'>about</p>
          <!-- last-child选择器-->
        </div>
      </div>
    </div>
    <div class='box'>
      <div class="cu-bar bg-white">
        <div class='action border-title'>
          <p class='text-xl text-bold'>关于我们</p>
          <p class='bg-grey' style='width:2rem'></p>
          <!-- 底部样式 last-child选择器-->
        </div>
      </div>
      <div class="cu-bar bg-white">
        <div class='action border-title'>
          <p class='text-xl text-bold text-blue'>关于我们</p>
          <p class='bg-gradual-blue' style='width:3rem'></p>
        </div>
      </div>
      <div class="cu-bar bg-white">
        <div class='action sub-title'>
          <p class='text-xl text-bold text-green'>关于我们</p>
          <p class='bg-green'></p>
          <!-- last-child选择器-->
        </div>
      </div>
      <div class="cu-bar bg-white">
        <div class='action sub-title'>
          <p class='text-xl text-bold text-blue'>关于我们</p>
          <p class='text-ABC text-blue'>about</p>
          <!-- last-child选择器-->
        </div>
      </div>
      <div class="cu-bar bg-white">
        <div class='action title-style-3'>
          <p class='text-xl text-bold'>关于我们</p>
          <p class='text-Abc text-gray self-end margin-left-sm'>about</p>
        </div>
      </div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <p class='icon-title text-green'></p>
          <p class='text-xl text-bold'>关于我们</p>
        </div>
      </div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <p class='icon-titles text-green'></p>
          <p class='text-xl text-bold'>关于我们</p>
        </div>
      </div>
    </div>

    <div class="cu-bar bg-white">
      <div class='action'>
        <p class='icon-title text-green'></p>
        <p>顶部操作条</p>
      </div>
    </div>
    <div class='box'>
      <div class="cu-bar bg-white">
        <div class='action'>
          <p class='icon-back text-gray'></p> 返回
        </div>
        <div class='content text-bold'>
          操作条
        </div>
      </div>
      <div class="cu-bar bg-white">
        <div class='action'>
          <p class='icon-homefill text-gray'></p> 首页
        </div>
        <div class='content text-bold'>
          鲜亮的高饱和色彩，专注视觉的小程序组件库
        </div>
        <div class='action'>
          <p class='icon-cardboardfill text-grey'></p>
          <p class='icon-recordfill text-red'></p>
        </div>
      </div>
      <div class="cu-bar bg-blue">
        <div class='action'>
          <p class='icon-close'></p> 关闭
        </div>
        <div class='content text-bold'>
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
        <p class='icon-title text-green'></p>
        <p>搜索操作条</p>
      </div>
    </div>
    <div class='box'>
      <div class="cu-bar search bg-white">
        <div class='search-form round'>
          <p class="icon-search"></p>
          <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search" />
        </div>
        <div class='action'>
          <button class='cu-btn bg-green shadow-blur round'>搜索</button>
        </div>
      </div>
      <div class="cu-bar search bg-white">
        <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"></div>
        <div class='search-form round'>
          <p class="icon-search"></p>
          <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search" />
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
          <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search" />
        </div>
        <div class='action'>
          <p>广州</p>
          <p class="icon-triangledownfill"></p>
        </div>
      </div>
      <div class="cu-bar bg-cyan search">
        <div class='search-form radius'>
          <p class="icon-search"></p>
          <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search" />
        </div>
        <div class='action'>
          <p class='icon-close'></p>
          <p>取消</p>
        </div>
      </div>
    </div>

    <div class="cu-bar bg-white">
      <div class='action'>
        <p class='icon-title text-green'></p>
        <p>操作条按钮组</p>
      </div>
    </div>

    <div class='box'>
      <div class="cu-bar btn-group">
        <button class='cu-btn bg-green shadow-blur round lg'>保存</button>
      </div>
      <div class="cu-bar btn-group">
        <button class='cu-btn bg-green shadow-blur'>保存</button>
        <button class='cu-btn text-green line-green shadow'>上传</button>
      </div>
      <div class="cu-bar btn-group">
        <button class='cu-btn bg-green shadow-blur round'>保存</button>
        <button class='cu-btn bg-blue shadow-blur round'>提交</button>
      </div>
    </div>


    <div class="cu-bar bg-white">
      <div class='action'>
        <p class='icon-title text-green'></p>
        <p>输入操作条</p>
      </div>
    </div>
    <div class='box'>
      <div class="cu-bar input">
        <div class='action'>
          <p class='icon-sound text-grey'></p>
        </div>
        <input class='solid-bottom'  maxlength="300" cursor-spacing="10" />
        <div class='action'>
          <p class='icon-emojifill text-grey'></p>
        </div>
        <button class='cu-btn bg-green shadow-blur'>发送</button>
      </div>

      <div class="cu-bar input">
        <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></div>
        <div class='action'>
          <p class='icon-roundaddfill text-grey'></p>
        </div>
        <input class='solid-bottom' maxlength="300" cursor-spacing="10" />
        <div class='action'>
          <p class='icon-emojifill text-grey'></p>
        </div>
        <button class='cu-btn bg-green shadow-blur'>发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import Tabbar from './uiComponents/Tabbar';

export default {
  name: 'Bar',
  components: {
    Tabbar,
  }
}
</script>

<style scoped>

button{
  border: none;
  outline: none;
}

</style>
