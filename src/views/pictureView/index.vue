<template lang="pug">
    #appWaterfall
      #content
        vue-waterfall-easy(:imgsArr="imgsArr",@scrollReachBottom="getData", @click="clickFn")
          .img-info(slot-scope="props")
            p.some-info
            p.some-info {{props.value.info}}
</template>

<script>
import vueWaterfallEasy from '@/components/vue-waterfall-easy/vue-waterfall-easy.vue'
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      imgsArr: [],
      group: 0, // 当前加载的加载图片的次数
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData() {
      axios.get('./static/mock/data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
        .then(res => {
          this.imgsArr = this.imgsArr.concat(res.data)
          this.group++
        })
    },
    clickFn(event, { index, value }) {
      if (event.target.tagName.toLowerCase() == 'img') {
        console.log('img clicked', index, value)
      }
    }
  },
  created() {
    this.getData()
  },
}
</script>

<style lang="scss">

  #content {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
  }


  #appWaterfall {
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
    height: 100vh;
    background-attachment: initial;
    transform: translate3d(0,0,0);
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    .some-info {
      background-color: rgb(232, 232, 232);
      line-height: 1.6;
      text-align: center;
    }

    .vue-waterfall-easy-scroll{
      padding-top:8px !important;
      box-sizing:border-box;
    }

    .img-box:hover{
      padding: 5px;
      box-shadow: 1px 1px 5px 5px #888888;
    }
  }

 


</style>
