<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <h3 class="user-name"><span>用户名：{{name}}</span></h3>
    <span class="logout" @click="logout">退出登录</span>
    <!--<el-dropdown class="avatar-container" trigger="click">-->
      <!--<div class="avatar-wrapper">-->
        <!--<icon class="icon-operation" name="log-out"></icon>-->
      <!--</div>-->
      <!--<el-dropdown-menu class="user-dropdown" slot="dropdown">-->
        <!--<router-link class="inlineBlock" to="/">-->
          <!--<el-dropdown-item>-->
            <!--Home-->
          <!--</el-dropdown-item>-->
        <!--</router-link>-->
        <!--<el-dropdown-item divided>-->
          <!--<span @click="logout" style="display:block;">LogOut</span>-->
        <!--</el-dropdown-item>-->
      <!--</el-dropdown-menu>-->
    <!--</el-dropdown>-->
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  data(){
    return {
      name:""
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  created(){
    this.name = localStorage.getItem("userName") || "未登录"
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      // this.$store.dispatch('FedLogOut').then(() => {
      //   location.reload() // 为了重新实例化vue-router对象 避免bug
      // })
      window.localStorage.removeItem('userName')
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  min-width: 800px;
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  border-bottom: 2px solid #ccc;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .user-name {
    display: inline-block;
    position: absolute;
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    font-size: 14px;
  }
  .logout {
    position: absolute;
    right: 40px;
    font-size: 14px;
    color: blue;
    cursor: pointer;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      font-size: 22px;
      /*.user-avatar {*/
        /*width: 40px;*/
        /*height: 40px;*/
        /*border-radius: 10px;*/
      /*}*/
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

