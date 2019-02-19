<template>
  <div class="Tabbar">
    <div class='box'>
    <div class="cu-bar tabbar bg-white">
        <div class="action text-green">
          <div class='icon-homefill'></div> 首页
        </div>
        <div class="action text-gray">
          <div class='icon-similar'></div> 分类
        </div>
        <div class="action text-gray">
          <div class='icon-recharge'></div>
          积分
        </div>
        <div class="action text-gray">
          <div class='icon-cart'>
            <div class='cu-tag badge'>99</div>
          </div>
          购物车
        </div>
        <div class="action text-gray">
          <div class='icon-my'>
            <div class='cu-tag badge'></div>
          </div>
          我的
        </div>
      </div>
      <div class="cu-bar tabbar margin-bottom-xl bg-black">
        <div class="action text-orange">
          <div class='icon-homefill'></div> 首页
        </div>
        <div class="action text-gray">
          <div class='icon-similar'></div> 分类
        </div>
        <div class="action text-gray">
          <div class='icon-recharge'></div>
          积分
        </div>
        <div class="action text-gray">
          <div class='icon-cart'>
            <div class='cu-tag badge'>99</div>
          </div>
          购物车
        </div>
        <div class="action text-gray">
          <div class='icon-my'>
            <div class='cu-tag badge'></div>
          </div>
          我的
        </div>
      </div>
      <div class="cu-bar tabbar bg-black" >
        <div class="action text-green">
          <div class='icon-homefill'></div> 首页
        </div>
        <div class="action text-gray">
          <div class='icon-similar'></div> 分类
        </div>
        <div class="action text-gray add-action">
          <button class='cu-btn icon-add bg-green shadow'></button>
          发布
        </div>
        <div class="action text-gray">
          <div class='icon-cart'>
            <div class='cu-tag badge'>99</div>
          </div>
          购物车
        </div>
        <div class="action text-gray">
          <div class='icon-my'>
            <div class='cu-tag badge'></div>
          </div>
          我的
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
}
</script>

<style scoped>
button{
    outline: none;
    border: none;
}
</style>
