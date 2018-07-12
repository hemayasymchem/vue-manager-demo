<template>
  <div class="product-special-content">
    <h3 class="title">
      专题内容编辑
    </h3>
    <el-form>
      <el-form-item>
        <span class="leftSpan">
          专题名称：
        </span>
        <el-input type="text" v-model.trim="params.Name"
                  @blur="checkName" @keyup.native.prevent="checkName"
        ></el-input>
        <span class="rightSpan">名称不能超过8个汉字</span>
      </el-form-item>
      <el-form-item>
        <span class="leftSpan">
          专题代表图：
        </span>
        <img src="" alt="">
        <el-upload
          class="upload-demo"
          action=""
          name="img"
          :show-file-list="false"
          :before-upload="beforeUpload"
          :on-success="uploadSuccess"
          style="display:inline-block; margin-left:20px;"
        >
          <el-button type="primary">选择文件</el-button>
        </el-upload>
        <span class="rightSpan">建议尺寸：400*300</span>
      </el-form-item>
      <el-form-item>
        <span class="leftSpan">
          专题描述：
        </span>
        <el-input type="textarea" class="textArea" :rows="6" v-model.trim="params.Des"
          @blur="checkDes" @keyup.native.prevent="checkDes"
        ></el-input> <br>
        <span style="margin-left: 300px;">{{params.desLength}}/250字</span>
      </el-form-item>
    </el-form>
    <p> 推荐单品列表（单品推荐数量建议为双数，且最多不能超过60个）:</p>
    <p class="number">
        <span style="color: gray;">目前单品推荐数量：</span>
        <span style="color:red;font-weight:bold;">44</span>
        <el-button type="primary" @click="addSingle">添加推荐单品</el-button>
    </p>
    <ul>
      <li>
        <span class="state" >X</span>
        <br>
        <img src="" alt="tupian"><br>
        <span>名称：xxxxx</span><br>
        <span>品牌：xxxx</span><br>
        <span>价格：￥344.34</span><br>
        <span>预计可获得收益：￥22.12</span>
      </li>
      <li v-for="(item,index) in listData" :key="index">
        <!--<span class="state" v-if="item.picked" style="color:green;" @click="changePicked(item)">√</span>-->
        <span class="state"  style="color:red;" @click="Delete(item)">X</span><br>
        <img src="item.imgSrc" alt="tupian"><br>
        <span>名称: {{item.name}}</span><br>
        <span>品牌：{{item.pinpai}}</span><br>
        <span>价格：￥{{item.price}}</span><br>
        <span>预计可获得收益：￥{{item.shouyi}}</span>
      </li>
    </ul>
    <div class="btns">
      <el-button type="primary" style="background:orangered;" @click="preview">预览</el-button>
      <el-button type="primary">保存</el-button>
      <el-button type="primary" style="background: transparent; color: black;">取消</el-button>
    </div>
    <!--二维码预览页面-->
    <div class="preview" v-if="previewFlag">
      <div class="container">
        <span class="close" @click="previewClose">X</span>
        <img src="" alt="二维码">
        <span class="notice">
          温馨提示：微信扫码查看专题效果
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        params: {
          Name: '',
          Des: '',
          desLength: 0,
        },
        listData: [
          {
            picked: true,imgSrc: '',name: '名称1',pinpai: '品牌1',price: '344.45',shouyi: '45.12'
          },
          {
            picked: false,imgSrc: '',name: '名称1',pinpai: '品牌1',price: '344.45',shouyi: '45.12'
          },
          {
            picked: true,imgSrc: '',name: '名称1',pinpai: '品牌1',price: '344.45',shouyi: '45.12'
          },
          {
            picked: true,imgSrc: '',name: '名称1',pinpai: '品牌1',price: '344.45',shouyi: '45.12'
          },
          {
            picked: true,imgSrc: '',name: '名称1',pinpai: '品牌1',price: '344.45',shouyi: '45.12'
          },
          {
            picked: true,imgSrc: '',name: '名称1',pinpai: '品牌1',price: '344.45',shouyi: '45.12'
          },
        ],
        previewFlag: false, // 预览界面是否存在
      }
    },
    methods: {
      checkName() { //校验专题名称不能超过8个汉字的字节
        let index = this.calculateByte(this.params.Name)
        if(index) {
          this.params.Name = this.params.Name.slice(0,index)
        }
      },
      checkDes() { //校验专题描述的字体个数
        this.params.desLength = this.params.Des.length
        if( this.params.desLength > 300) {
          this.params.desLength = 300
          this.params.Des = this.params.Des.slice(0,300)
        }
      },
      Delete(item) {
        console.log("执行删除操作")
      },
      addSingle() { //添加新增单品
        this.$router.push({path: '/product/product-addSingle'})
      },
      beforeUpload() {

      },
      uploadSuccess() {

      },
      preview() {
        this.previewFlag = true
      },
      previewClose() {
        this.previewFlag = false
      },
      calculateByte(str) { // 计算字节的公用方法
        let bytesCount = 0
        for (var i=0; i<str.length; i++) {
          var c = str.charAt(i)
          if (/^[\u0000-\u00ff]$/.test(c)) {
            bytesCount += 1
          } else {
            bytesCount += 2
          }

          if( bytesCount > 16) {
            return i
          }

        }
      },
    }
  }
</script>

<style lang="scss">
  .product-special-content {
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      border-radius: 10px;
      height: 40px;
      line-height: 40px;
      background: gray;
      font-size: 18px;
    }
    .el-form {
      margin-top: 20px;
      .el-form-item {
        .leftSpan {
          display: inline-block;
          width: 90px;
          text-align: right;
        }
        .rightSpan {
          color: gray;
          margin-left: 30px;
        }
        .el-input {
          width: 300px;
        }
        img {
          display: inline-block;
          width: 300px;
          height: 300px;
          border: 1px solid red;
          vertical-align: top;
        }
        .textArea {
          width: 300px;
          vertical-align: top;
        }
      }
    }
    .number {
      margin-top: 20px;
      padding-left: 20px;
      .el-button {
        margin-left: 40px;
      }
    }
    ul {
      width: 100%;
      overflow: hidden;
      li {
        float: left;
        width: 19%;
        margin-left: 8px;
        border: 1px dashed gray;
        border-radius: 10px;
        margin-top: 20px;
        padding: 0px 0px 20px 20px;
        position: relative;
        font-size: 12px;
        .state {
          position: absolute;
          right: 0px;
          top: 0px;
          padding: 5px;
          cursor: pointer;
        }
        img {
          display: inline-block;
          width: 90%;
          height: 100px;
          border: 1px solid #ccc;
          margin-bottom: 10px;
        }
      }
    }
    .btns {
      margin-top: 20px;
      width: 100%;
      text-align: center;
      .el-button {
        width: 120px;
        margin: 0px 40px;
      }
    }
  }
</style>
