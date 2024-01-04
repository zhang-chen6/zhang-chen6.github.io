<template>
  <div class="info_container">
    <h1>三白</h1>
    <div class="basic_info">
      <img class="user_img" src="../../../assets/user.jpg" alt="" />
      <div class="basic_info_right">
        <div class="basic_info_right_body">
          <div>姓名：章陈</div>
          <div>职业：前端开发工程师</div>
          <div>年龄：28</div>
          <div>工作年限：3年</div>
        </div>
      </div>
    </div>
    <div class="other_info">
      <div class="habit">
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less" scoped>
.info_container {
  h1{
    text-align: center;
    letter-spacing: 15px;
    font-size: 52px;
  }
  .basic_info {
    display: flex;
    padding: 1vh 2vw;
    justify-content: center;
    .user_img {
      width: 120px;
    }
    .basic_info_right {
      margin-left: 2vw;
      .basic_info_right_body {
        div{
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
