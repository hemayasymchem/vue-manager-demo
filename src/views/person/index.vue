<template>
  <div class="person-main-page">
    <h3 class="title">
      个人中心管理
      <el-button type="primary" @click="handleClick">修改密码</el-button>
    </h3>
    <p><span>企业编号：</span>{{No}}</p>
    <p><span>企业邮箱：</span>{{Email}}</p>
    <p><span>开户银行：</span>{{Bank}}</p>
    <p><span>银行卡账号：</span>{{bankNo}}</p>
  </div>
</template>

<script>
  export default {
    name: 'personMainPage',
    data() {
      return {
        No: '1',
        Email: 'secoo',
        Bank: 'ICBC',
        bankNo: '6222 4000 8276 8976 145',
      }
    },
    methods: {
      handleClick() {
        this.$router.push({path: '/person/password'})
      }
    },
  }
</script>

<style lang="scss">
  .person-main-page {
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: gray;
      border-radius: 10px;
      padding-left: 20px;
      .el-button  {
        float: right;
        margin-right: 40px;
      }
    }
    p {
      padding: 20px 0px 0px 20px;
      span {
        display: inline-block;
        width: 140px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
</style>
