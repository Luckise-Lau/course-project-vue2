<template>
  <div class="detailPage">
    <!-- 课件视频 -->
    <div class="videoBox">
      <video
        src="http://V3.mukewang.com/shizhan/59f8498ae420e5be578b459b/H.mp4"
        controls="constrols"
      ></video>
      <router-link to="/">
        <div class="videoBack">&lt;</div>
      </router-link>
    </div>
    <!-- 课件头部 -->
    <ul class="coursewareTitle">
      <li v-for="(coursewareTitleItem, index) in coursewareTitleList" :key="index">
        {{ coursewareTitleItem }}
      </li>
    </ul>
    <!-- 课件简介 -->
    <div class="coursewareSynopsis">
      <h2>{{ coursewareTitle }}</h2>
      <p>{{ coursewareDescription }}</p>
      <i></i>
    </div>
    <!-- 课件介绍 -->
    <ul class="coursewareIntroduce">
      <li v-for="(introduceItem, index) in coursewareIntroduceList" :key="index">
        <h2>{{ coursewareIntroduceTitle[index] }}</h2>
        <p v-html="introduceItem"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetaiPage',
  data () {
    return {
      coursewareTitleList: [],
      coursewareTitle: '',
      coursewareDescription: '',
      coursewareIntroduceTitle: ['课程须知', '老师告诉你能学到什么？'],
      coursewareIntroduceList: []
    }
  },
  mounted () {
    this.coursewareTitleList = ['章节', '详情', '评论', '问答', '笔记']
    this.coursewareTitle = 'iOS基础教程之-Camera摄像头'
    this.coursewareDescription = '从实例出发介绍我们的Camera, 可以实现Camera属性检测, 照片拍摄, 视频录制, 图片展示, 录制视频'
    this.coursewareIntroduceList = [
      '本课程适合客户端产品经理，研发人员以及对iOS新特性感兴趣的人群',
      `(1）数码相机相关的所有API<br>
       (2）利用Camera实现相机的各种属性检测<br>
       (3）利用Camera拍照、保存、遍历相册等功能<br>
       (4）利用Camera拍摄视频、视频剪切功能'`
    ]
  }
}
</script>

<style scoped>
  div.detailPage{
    background: #F3F5F7;
  }
  div.videoBox{
    position: relative;
    height: 210px;
  }
  div.videoBox video{
    width: 100%;
    height: 100%;
  }
  div.videoBack{
    width: 32PX;
    height: 32PX;
    position: fixed;
    top: 16PX;
    left: 16PX;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3PX;
    font-size: 24PX;
    color: #fff;
    line-height: 32PX;
    text-align: center;
  }
  .coursewareTitle{
    display: flex;
    justify-content: space-evenly;
    height: 44px;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    position: relative;
    z-index: 10;
  }
  .coursewareTitle > li{
    font-size: 14px;
    color: #71777D;
  }
  .coursewareSynopsis{
    padding: 24px 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
  }
  .coursewareSynopsis > h2{
    font-size: 16px;
    color: #2B333B;
    font-weight: 400;
  }
  .coursewareSynopsis > p{
    color: #71777D;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
  }
  .coursewareSynopsis > i{
    display: inline-block;
    width: 10PX;
    height: 10PX;
    background: url('@/assets/toBottomArrows.png') no-repeat center;
    background-size: cover;
    align-self: center;
    margin-top: 10px;
  }
  .coursewareIntroduce{
    padding: 20px;
    margin-top: 8px;
    background: #fff;
  }
  .coursewareIntroduce li{
    font-size: 14px;
  }
  .coursewareIntroduce li:last-child{
    margin-top: 24px;
  }
  .coursewareIntroduce h2{
    color: #2B333B;
    margin-bottom: 12px;
    font-weight: 400;
  }
  .coursewareIntroduce p{
    color: #71777D;
    line-height: 20px;
    padding-left: 30px;
  }
</style>
