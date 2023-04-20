<template>
  <ul>
    <li v-for="(navItem, index) in footBtnList" :key="index">
      <img :src="navItem.imgUrl">
      <span>{{ navItem.name }}</span>
    </li>
  </ul>
</template>

<script>
// 图片文件
import indexActiveIcon from '@/assets/indexActive.png'
import discoverDefIcon from '@/assets/discoverDefIcon.png'
import downDefIcon from '@/assets/downDefIcon.png'
import myDefIcon from '@/assets/myDefIcon.png'

export default {
  name: 'FooterComponent',
  data () {
    return {
      footBtnList: []
    }
  },
  mounted () {
    this.footBtnList = [
      {
        name: '首页',
        imgUrl: indexActiveIcon
      },
      {
        name: '发现',
        imgUrl: discoverDefIcon
      },
      {
        name: '下载',
        imgUrl: downDefIcon
      },
      {
        name: '我的',
        imgUrl: myDefIcon
      }
    ]
  }
}
</script>

<style scoped>
  ul{
    height: 49px;
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid #D9DDE1;
    background: #fff;
    opacity: 0.9;
  }
  li{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span{
    font-size: 10px;
    color: #2B333B;
  }
  img{
    width: 24px;
  }
</style>
