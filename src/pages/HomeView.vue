<template>
  <div class="homePageContainer">
    <!-- 头部 -->
    <HeaderVue class="pageHeader"></HeaderVue>
    <!-- 中间 -->
    <div class="middleMain">
      <!-- 课程分类 -->
      <ul class="courseClassify">
        <li v-for="(courseItem, index) in courseClassifyList" :key="index">
          <img :src="courseItem.courseImgUrl">
          <span>{{ courseItem.courseName }}</span>
        </li>
      </ul>
      <!-- 课程列表 -->
      <CourseVue :courseList="courseList"></CourseVue>
    </div>
    <!-- 底部导航 -->
    <FooterNavVue class="pageFooter"></FooterNavVue>
  </div>
</template>

<script>
// 头部
import HeaderVue from '@/components/Header/'

// 课程分类
import webdevIcon from '@/assets/webDevIcon.png'
import backendDevIcon from '@/assets/backendDevIcon.png'
import mobileDevICon from '@/assets/mobileDevIcon.png'
import databaseDevIcon from '@/assets/databaseDevIcon.png'
import cloudAndDataIcon from '@/assets/cloudAndDataIcon.png'

// 课程列表
import CourseVue from '@/components/Course/'
import CourseImgOne from '@/assets/courseOne.jpg'
import CourseImgTwo from '@/assets/courseTwo.jpg'
import CourseImgThree from '@/assets/courseThree.jpg'
import CourseImgFour from '@/assets/courseFour.jpg'
import CourseImgFive from '@/assets/courseFive.jpg'

// 底部导航
import FooterNavVue from '@/components/Footer/'

export default {
  name: 'HomePage',
  data () {
    return {
      courseClassifyList: [],
      courseList: []
    }
  },
  mounted () {
    // 课程分类数据
    this.courseClassifyList = [
      {
        courseImgUrl: webdevIcon,
        courseName: '前端开发'
      },
      {
        courseImgUrl: backendDevIcon,
        courseName: '后端开发'
      },
      {
        courseImgUrl: mobileDevICon,
        courseName: '移动开发'
      },
      {
        courseImgUrl: databaseDevIcon,
        courseName: '数据库'
      },
      {
        courseImgUrl: cloudAndDataIcon,
        courseName: '云计算&大数据'
      }
    ]
    // 课程列表数据
    this.courseList = [
      {
        courseImg: CourseImgOne,
        courseName: '实例妙解Sed和Awk的秘密',
        courseRemark: '中级 · 330人在学'
      },
      {
        courseImg: CourseImgTwo,
        courseName: '实例妙解Sed和Awk的秘密',
        courseRemark: '中级 · 330人在学'
      },
      {
        courseImg: CourseImgThree,
        courseName: '实例妙解Sed和Awk的秘密',
        courseRemark: '中级 · 330人在学'
      },
      {
        courseImg: CourseImgFour,
        courseName: '实例妙解Sed和Awk的秘密',
        courseRemark: '中级 · 330人在学'
      },
      {
        courseImg: CourseImgFive,
        courseName: '实例妙解Sed和Awk的秘密',
        courseRemark: '中级 · 330人在学'
      },
      {
        courseImg: CourseImgOne,
        courseName: '实例妙解Sed和Awk的秘密',
        courseRemark: '中级 · 330人在学'
      },
      {
        courseImg: CourseImgTwo,
        courseName: '实例妙解Sed和Awk的秘密',
        courseRemark: '中级 · 330人在学'
      }
    ]
  },
  components: {
    HeaderVue,
    CourseVue,
    FooterNavVue
  }
}
</script>

<style scoped>
  .homePageContainer{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .pageHeader{
    height: 44px;
    width: 100%;
  }
  .pageFooter{
    height: 49px;
    width: 100%;
  }
  .middleMain{
    flex-grow: 1;
    overflow: auto;
  }
  .courseClassify{
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #F3F5F7;
  }
  .courseClassify > li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .courseClassify img{
    width: 32px;
    margin-bottom: 12px;
  }
  .courseClassify span{
    font-size: 14px; color: #2B333B;
    font-family: PingFangSC-Regular;
  }
</style>
