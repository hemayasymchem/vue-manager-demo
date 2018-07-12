<template>
  <div class="single-page">
    <h3 class="title">
      单品商品库
    </h3>
    <el-form>
      <el-form-item>
        <span class="leftSpan">选择商品分类：</span>
        <el-select v-model="selectValue">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span class="leftSpan">选择商品价格：</span>
        <el-radio-group
          v-model="productPrice"
        >
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">500元以下</el-radio>
          <el-radio :label="3">500-1000元</el-radio>
          <el-radio :label="4">1000-2000元</el-radio>
          <el-radio :label="5">2000-5000元</el-radio>
          <el-radio :label="6">5000元以上</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <span class="leftSpan">关键词搜索：</span>
        <el-input type="text" placeholder="输入您想搜索的关键词" v-model.trim="keyWord"></el-input>
        <span class="rightSpan">可进行商品关键词和商品ID搜索</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form-item>
    </el-form>


    <div class="showlist" v-if="ListFlag">
      <p>已选条件：<span class="clearSelect" @click="clearSelect">清空筛选</span></p>
      <ul>
        <li :class="{selected: this.selected == '0'}" @click="Sort1">综合</li>
        <li :class="{selected: this.selected == '1'}" @click="Sort2">销量</li>
        <li :class="{selected: this.selected == '2'}" @click="Sort3">新品</li>
        <li :class="{selected: this.selected == '3'}" @click="Sort4">价格
            <span class="border-arrow border-up"  @click.stop="priceUp"></span>
            <span class="border-arrow border-down"></span>
        </li>
        <li :class="{selected: this.selected == '4'}" @click="selected='4'" style="width: 140px;">预计可获得收益
            <span class="border-arrow border-up"></span>
            <span class="border-arrow border-down"></span>
        </li>
      </ul>
      <ol class="showContainer">
        <li>
          <img  src=""  alt="picture"></img>
          <p>名称:xxxxxxx</p>
          <p>品牌</p>
          <p>价格</p>
          <p>预计可获得的收益</p>
          <p class="route">小程序路径 <span class="btn">复制</span></p>
        </li>
        <li v-for="(item,index) in myDatas" :key="index">
          <img src="item.img" alt="">
          <p>名称:{{item.name}}</p>
          <p>品牌:{{item.pinpai}}</p>
          <p>价格:{{item.price}}</p>
          <p>预计可获得的收益:{{item.shouyi}}</p>
          <p class="route">小程序路径 <span class="btn" :data-clipboard-text="item.addresss">复制</span></p>
        </li>
      </ol>
    </div>

    <el-pagination
      align="center"
      background
      @size-change="changeSize"
      @current-change="changePage"
      :current-page="pagination.pageIndex"
      :page-sizes="pagination.pageSizeOptions"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      prev-text="Pre"
      next-text="Next"
      :total="pagination.totalNum">
    </el-pagination>

  </div>
</template>

<script>
  import ClipboardJS from 'clipboard' //引入剪切板插件

  export default {
    name: 'ProductSingle',
    data() {
      return {
        selectValue: '', //商品分类
        productPrice: '', //商品价格单选框的值
        keyWord: '', //商品搜索的关键词
        options:[
          {value: '选择1', label: '体育运动'},
          {value: '选择2', label: '美妆'}
        ],
        ListFlag: true, // 数据展示组件是否展示
        selected: '0', // 选择何种排序方式 默认为'0' 按综合排序
        myDatas: [
          { img: '', name: 'name1', pinpai: '品牌1', price: '123', shouyi: '111', addresss: '地址1'},
          { img: '', name: 'name1', pinpai: '品牌1', price: '123', shouyi: '111', addresss: '地址2'},
          { img: '', name: 'name1', pinpai: '品牌1', price: '123', shouyi: '111', addresss: '地址3'},
          { img: '', name: 'name1', pinpai: '品牌1', price: '123', shouyi: '111', addresss: '地址4'}
        ],
        pagination: {
          pageIndex: 1,
          pageSizeOptions: [5, 10, 15, 20],
          pageSize: 5,
          totalNum: 100,
        },
      }
    },
    mounted() {
      var clipboard = new ClipboardJS('.btn')
    },
    methods: {
      search() {
        console.log(this.selectValue,this.productPrice,this.keyWord)
      },
      clearSelect() { //清空筛选
        this.ListFlag = false
      },
      //排序需要的方法
      Sort1() {
        this.selected = '0'
      },
      Sort2() {
        this.selected = '1'
      },
      Sort3() {
        this.selected = '2'
      },
      Sort4() {
        this.selected = '3'
        console.log('srot4')
      },
      Sort5() {
        this.selected = '3'
        console.log("执行了sort5")
      },
      priceUp() {
        console.log('priceUp')
      },
      copy(item) {
        console.log(item.addresss)
      },
      changeSize(size) {
        console.log(size)
      },
      changePage(page) {
        console.log(page)
      }
    },
  }
</script>

<style lang="scss">
  .single-page {
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
      padding: 20px 0px 0px 20px;
      .el-form-item {
        .leftSpan {
          display: inline-block;
          width: 100px;
          text-align:right;
        }
        .el-input {
          width: 300px;
        }
        .rightSpan {
          color: gray;
          margin-left: 20px;
        }
        .el-button {
          margin-left: 200px;
        }
      }
    }
    .showlist {
      width:100%;
      .clearSelect {
        color: orangered;
        font-weight: bolder;
        margin-left: 20px;
        cursor: pointer;
      }
      ul {
        margin-top: 20px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: gray;
        li {
          float: left;
          width: 80px;
          text-align: center;
          height: 40px;
          border: 1px solid black;
          font-size: 14px;
          position: relative;
        }
        .selected {
          background-color: red;
        }
      }
      .showContainer {
        width: 100%;
        border: 1px solid red;
        overflow: hidden;
        li {
          float: left;
          width: 30%;
          background: #ccc;
          margin-right: 30px;
          margin-top: 20px;
          border-radius: 20px;
          padding: 10px 20px;
          img {
            display: inline-block;
            width: 100%;
            height: 60px;
            border: 1px solid red;
          }
          p {
            padding: 5px 0px 5px 25px;
          }
          .route {
            margin-top: 20px;
            .btn {
              display: inline-block;
              width: 60px;
              height: 30px;
              line-height: 30px;
              text-align: center;
              background: deepskyblue;
              margin-left:20px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
