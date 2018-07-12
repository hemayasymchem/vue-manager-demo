<template>
    <div class="login-page">
        <el-form class="login-container"
          autoComplete="on"
        >
          <el-form-item>
            <span style="font-size: 24px; font-weight: bolder;margin-left: 150px;">寺库分销系统</span>
          </el-form-item>
          <el-form-item>
            <span class="span1">企业编号：</span>
            <el-input type="text"  placeholder="请输入企业编号" v-model.trim="params.No"></el-input>
            <span class="span2">{{noticeMsg.msg1}}</span>
          </el-form-item>
          <el-form-item>
            <span class="span1">企业邮箱：</span>
            <el-input type="text"  placeholder="请输入企业邮箱" v-model.trim="params.Email"></el-input>
            <span class="span2">{{noticeMsg.msg2}}</span>
          </el-form-item>
          <el-form-item>
            <span class="span1">密码：</span>
            <el-input type="password" placeholder="请输入密码" style="width: 40%;" v-model.trim="params.passWord"></el-input>
            <span @click="forgetPassword" class="forget">忘记密码？</span>
            <span class="span2" style="margin-left: 4px;">{{noticeMsg.msg3}}</span>
          </el-form-item>
          <el-form-item>
            <span class="span1">验证码：</span>
            <el-input type="text" placeholder="验证码" v-model.trim="params.ConfirmNo"></el-input>
            <span class="span2">{{noticeMsg.msg4}}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login" style="margin-left: 160px; width: 150px;">登录</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { To_md5 } from '@/utils/MD5keyUtil.js'
    import { login } from '@/api/login' // 登录方法

    export default {
        name: 'Login',
        data() {
            return {
              params: {
                No: '',
                Email: '',
                passWord: '',
                ConfirmNo: '',
              },
              noticeMsg: {
                msg1: '',
                msg2: '',
                msg3: '',
                msg4: '',
              }
            }
        },
        methods: {
            forgetPassword() {
                this.$alert('如您忘记密码，请通过您的企业邮箱发送"忘记邮箱"为主题的邮件给"xxxx"进行密码重置,' +
                  '成功后我们会将重置成功邮件发送到您的企业邮箱中','温馨提示',{
                  confirmButtonText: '关闭',
                  callback: action => {
                    return
                  }
                })
            },
            login() {
              const Flag = this.loginEmpty() //返回值为真,表示没有空的值
              if ( !Flag ) { return }
              if (this.params.No !== '123') {
                this.noticeMsg.msg1 = '您输入的企业编号不存在'
                return
              }
              if (this.params.Email !== '123') {
                this.noticeMsg.msg2 = '您输入的企业邮箱错误'
                return
              }
              //if (判断文案是否正确)
              if (this.params.passWord !== '123') {
                this.noticeMsg.msg3 = '您输入的密码错误'
                return
              }
              if (this.params.ConfirmNo !== '123') {
                this.noticeMsg.msg4 = '您输入的验证码错误'
                return
              }
              console.log("所有的验证都正确，执行登录接口")

            },
            loginEmpty() { //校验是否有空的
              let Flag = true
              Object.keys(this.noticeMsg).forEach(msg => { //每次点击登录将提示信息清空
                this.noticeMsg[msg] = ''
              })
              if( this.params.No == '') {
                this.noticeMsg.msg1 = '企业编号不能为空'
                Flag = false
              }
              if(this.params.Email == '') {
                this.noticeMsg.msg2 = '企业邮箱不能为空'
                Flag = false
              }
              if(this.params.passWord == '') {
                this.noticeMsg.msg3= '密码不能为空'
                Flag = false
              }
              if (this.params.ConfirmNo == '') {
                this.noticeMsg.msg4 = '验证码不能为空'
                Flag = false
              }
              return Flag
            },
        },
    }
</script>

<style lang="scss">
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

    .login-page {
        position: fixed;
        width: 100%;
        height: 100%;
        background: gray;
        .el-form {
            width: 600px;
            height: 400px;
            position: absolute;
            top: 100px;
            left: 50%;
            margin-left: -200px;
            padding: 20px 10px;
            color: black;

            .el-form-item {
                /*.icon-operation {*/
                    /*width: 30px;*/
                    /*height: 30px;*/
                /*}*/
                .span1 {
                    display: inline-block;
                    width: 80px;
                }
                .span2 {
                  margin-left: 20px;
                  color: red;
                }
                .forget {
                  color: blue;
                  font-weight: bold;
                  cursor: pointer;
                }
                .el-input {
                    width: 50%;
                    .el-input__inner {
                        background: #eee;
                        border:none;

                    }
                }
            }
        }
    }
</style>
