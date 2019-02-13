
<template>
  <div class="plugin">
    <div class="cu-card">
        <div class="cu-item bg-img shadow-blur" :style="{ backgroundImage: 'url(' + item.img + ')' }"   v-for="(item, index) in list" :key="index">
            <div class="cardTitle">
            {{item.title}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'plugin',
    data() {
        return {
            list: [{
                title: '索引列表',
                img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
            },
            {
                title: '微动画',
                img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
            }]
        }
    }
}
</script>
<style>
.cu-bar .content image{
  height: 60px;
  width: 240px;
}

.cardTitle{
  color: #fff;
  padding: 90px 60px;
  font-size: 40px;
  font-weight: 300;
  transform: skew(-10deg, 0deg);
  position: relative;
  text-shadow: 0px 0px 6px rgba(0,0,0,0.3)
}

.cardTitle::before{
  content: "";
  position: absolute;
  width: 60px;
  height: 6px;
  border-radius: 20px;
  background-color: #fff;
  display: block;
  top: 60px;
  left: 50px;  
  transform: skew(10deg, 0deg);
}
.cardTitle::after{
  content: "";
  position: absolute;
  width: 140px;
  border-radius: 6px;
  height: 24px;
  background-color: #fff;
  display: block;
  bottom: 76px;
  left: 90px;  
  transform: skew(10deg, 0deg);
  opacity: 0.1;
}

</style>

    