<template>
  <div class="systemHeader">
    <ul class="headerUl">
      <li>推荐</li>
      <li>课程</li>
      <li>实战</li>
      <li>职业路径</li>
      <li class="systemSearchBox">
        <i></i>
      </li>
      <li class="systemHistoryBox">
        <i></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'systemHeader'
}
</script>

<style scoped>
  .headerUl{
    width: 375px;
    height: 44px;
    font-size: 0;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .headerUl > li {
    font-size: 16px;
    color: #71777D;
  }
  li.systemSearchBox{
    padding-left: 60px;
  }
  .headerUl i{
    display: inline-block;
    width: 18px; height: 18px;
    background: url('@/assets/systemSearchIcon.png') no-repeat center;
    background-size: cover;
    vertical-align: -3px;
  }
  li.systemHistoryBox > i{
    background: url('@/assets/systemHistoryIcon.png') no-repeat center;
    background-size: cover;
  }
</style>
