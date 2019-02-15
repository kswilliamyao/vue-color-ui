<template>
	<div id="layout">
        <div class="cu-bar bg-white solid-bottom margin-top">
            <div class='action'>
            <p class='icon-title text-blue'></p>固定尺寸
            </div>
        </div>
        <div class="padding bg-white">
            <div class="flex flex-wrap">
            <div class='basis-xs bg-grey margin-xs padding-sm radius'>xs(20%)</div>
            <div class='basis-df'></div>
            <div class='basis-sm bg-grey margin-xs padding-sm radius'>sm(40%)</div>
            <div class='basis-df'></div>
            <div class='basis-df bg-grey margin-xs padding-sm radius'>sub(50%)</div>
            <div class='basis-lg bg-grey margin-xs padding-sm radius'>lg(60%)</div>
            <div class='basis-xl bg-grey margin-xs padding-sm radius'>xl(80%)</div>
            </div>
        </div>
        <div class="cu-bar bg-white solid-bottom margin-top">
            <div class='action'>
            <p class='icon-title text-blue'></p>比例布局
            </div>
        </div>
        <div class="padding bg-white">
            <div class="flex">
            <div class='flex-sub bg-grey padding-sm margin-xs radius'>1</div>
            <div class='flex-sub bg-grey padding-sm margin-xs radius'>1</div>
            </div>
            <div class="flex  p-xs margin-bottom-sm mb-sm">
            <div class='flex-sub bg-grey padding-sm margin-xs radius'>1</div>
            <div class='flex-twice bg-grey padding-sm margin-xs radius'>2</div>
            </div>
            <div class="flex  p-xs margin-bottom-sm mb-sm">
            <div class='flex-sub bg-grey padding-sm margin-xs radius'>1</div>
            <div class='flex-twice bg-grey padding-sm margin-xs radius'>2</div>
            <div class='flex-treble bg-grey padding-sm margin-xs radius'>3</div>
            </div>
        </div>
        <div class="cu-bar bg-white margin-top solid-bottom">
            <div class='action'>
            <p class='icon-title text-blue'></p>水平对齐(justify)
            </div>
        </div>
        <div class="bg-white">
            <div class="flex solid-bottom padding justify-start">
            <div class='bg-grey padding-sm margin-xs radius'>start</div>
            <div class='bg-grey padding-sm margin-xs radius'>start</div>
            </div>
            <div class="flex solid-bottom padding justify-end">
            <div class='bg-grey padding-sm margin-xs radius'>end</div>
            <div class='bg-grey padding-sm margin-xs radius'>end</div>
            </div>
            <div class="flex solid-bottom padding justify-center">
            <div class='bg-grey padding-sm margin-xs radius'>center</div>
            <div class='bg-grey padding-sm margin-xs radius'>center</div>
            </div>
            <div class="flex solid-bottom padding justify-between">
            <div class='bg-grey padding-sm margin-xs radius'>between</div>
            <div class='bg-grey padding-sm margin-xs radius'>between</div>
            </div>
            <div class="flex solid-bottom padding justify-around">
            <div class='bg-grey padding-sm margin-xs radius'>around</div>
            <div class='bg-grey padding-sm margin-xs radius'>around</div>
            </div>
        </div>
        <div class="cu-bar bg-white margin-top solid-bottom">
            <div class='action'>
            <p class='icon-title text-blue'></p>垂直对齐(align)
            </div>
        </div>
        <div class="bg-white">
            <div class="flex solid-bottom padding align-start">
            <div class='bg-grey padding-lg margin-xs radius'>ColorUi</div>
            <div class='bg-grey padding-sm margin-xs radius'>start</div>
            </div>
            <div class="flex solid-bottom padding align-end">
            <div class='bg-grey padding-lg margin-xs radius'>ColorUi</div>
            <div class='bg-grey padding-sm margin-xs radius'>end</div>
            </div>
            <div class="flex solid-bottom padding align-center">
            <div class='bg-grey padding-lg margin-xs radius'>ColorUi</div>
            <div class='bg-grey padding-sm margin-xs radius'>center</div>
            </div>
        </div>

        <div class="cu-bar bg-white margin-top solid-bottom">
            <div class='action'>
            <p class='icon-title text-blue'></p>等分列
            </div>
            <div class='action'></div>
        </div>
        <div class="cu-bar bg-white margin-top solid-bottom">
            <div class='action'>
            <p class='icon-title text-blue'></p>等高
            </div>
            <div class='action'></div>
        </div>
        <div class="bg-white padding">
            <div class="grid  margin-bottom text-center" :class="'col-' + (index + 1)" v-for="(item,index) in 5" :key="index">
            <div :class=" index % 2 === 0 ? 'bg-cyan':'bg-blue'" class="padding" v-for="index in (index+1)*2" :key="index">{{index+1}}</div>
            </div>
        </div>
        <div class="bg-white padding">
            <div class="grid col-4 grid-square">
                <div class="bg-img"  style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
                <div class="bg-img"  style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"></div>
                <div class="bg-img"  style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></div>
                <div class="bg-img"  style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"></div>
            </div>
        </div>
        <div class="cu-bar bg-white margin-top solid-bottom">
            <div class='action'>
            <p class='icon-title text-blue'></p>浮动
            </div>
        </div>
        <div class="bg-white padding">
            <div class=" cf padding-sm">
            <div class='bg-grey radius fl padding-sm'>ColorUi fl</div>
            <div class='bg-grey radius fr padding-sm'>ColorUi fr</div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      starCount: 0,
      forksCount: 0,
      visitTotal: 0
    }
  },
}
</script>

<style scoped>
#layout{
    background: #f1f1f1;
}

</style>
