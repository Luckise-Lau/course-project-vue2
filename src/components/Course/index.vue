<template>
  <ul>
    <router-link to="/detail">
      <li class="courseItemLi" v-for="(courseItem, index) in courseList" :key="index">
        <img :src="courseItem.courseImg">
        <div class="courseInfo">
          <h2>{{ courseItem.courseName }}</h2>
          <p>{{ courseItem.courseRemark }}</p>
        </div>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'CourseComponent',
  props: {
    courseList: Array,
    default: []
  }
}
</script>

<style scoped>
  li.courseItemLi{
    padding: 24px 20px 0;
    display: flex;
  }
  li.courseItemLi img{
    width: 108px;
    height: 72px;
    border-radius: 3.18px;
  }
  li.courseItemLi .courseInfo{
    display: flex;
    flex-direction: column;
  }
  li.courseItemLi h2{
    margin-left: 16px;
    font-size: 15px;
    color: #2B333B;
    line-height: 17px;
    margin-bottom: 8px;
  }
  li.courseItemLi p{
    margin-left: 16px;
    font-size: 15px;
    color: #71777D;
  }
</style>
