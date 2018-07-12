<template>
  <div class="person-page">
    <h3 class="title">
      修改密码
    </h3>
    <el-form>
      <el-form-item>
        <span class="leftSpan">原密码：</span>
        <el-input type="password" placeholder="请输入原密码" v-model.trim="oldPassword"></el-input>
        <span class="rightSpan">{{noticeMsg.msg1}}</span>
      </el-form-item>
      <el-form-item>
        <span class="leftSpan">新密码：</span>
        <el-input type="password" placeholder="请输入新密码" v-model.trim="newPassword"></el-input>
        <span class="rightSpan">{{noticeMsg.msg2}}</span>
      </el-form-item>
      <el-form-item>
        <span class="leftSpan">确认新密码：</span>
        <el-input type="password" placeholder="请再输一次新密码" v-model.trim="ConfirmPassword"></el-input>
        <span class="rightSpan">{{noticeMsg.msg3}}</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">保存更改</el-button>
        <el-button type="primary" @click="quxiao">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'password',
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        ConfirmPassword: '',
        noticeMsg: {
          msg1: '',
          msg2: '',
          msg3: '',
        }
      }
    },
    methods: {
      submit() { //保存更改
        Object.keys(this.noticeMsg).forEach(item => {
          this.noticeMsg[item] = ''
        })
        let Flag = this.checkEmpty()
        if (!Flag) {
          return
        }
        if (this.oldPassword != '123') {
          this.noticeMsg.msg1 = '原密码错误'
          return
        }
        if (this.ConfirmPassword*1 != this.newPassword) {
          this.noticeMsg.msg3 = '两次密码不一致，请重新输入'
          return
        }
        console.log('执行保存操作')
        this.$alert("恭喜您,您的密码已成功修改","",{
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push({path: '/login'})
          }
        })
      },
      checkEmpty() { //校验是否有空
        let Flag = true
        if (this.oldPassword == '') {
          this.noticeMsg.msg1 = '新密码不能为空'
          Flag = false
        }
        if (this.newPassword == '') {
          this.noticeMsg.msg2 = '新密码不能为空'
          Flag = false
        }
        if (this.ConfirmPassword == '') {
          this.noticeMsg.msg3 = '确认密码不能为空'
          Flag = false
        }
        return Flag
      },
      quxiao() {
        this.$confirm("确定要退出修改密码？","",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( () => {
            this.$router.push({path: '/person/main'})
        }).catch( () => {
            this.$router.push({path: '/person/main'})
        })
      },
    },
  }
</script>

<style lang="scss">
  .person-page {
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: gray;
      border-radius: 10px;
      padding-left: 20px;
    }
    .el-form {
      padding: 30px 0px 0px 100px;
      .el-form-item {
        .leftSpan {
          display: inline-block;
          width: 100px;
          text-align: right;
        }
        .el-input {
          width: 300px;
        }
        .el-button {
          width: 100px;
          margin-left: 80px;
        }
        .rightSpan {
          color: red;
        }
      }
    }
  }
</style>
