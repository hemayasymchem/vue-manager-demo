<template>
  <div class="special-page">
    <h3 class="title">
      专题推荐管理
      <el-button type="primary" @click="addNewSpecial">新增专题页面</el-button>
    </h3>
    <el-form>
      <el-form-item>
        <span class="leftSpan">创建时间：</span>
        <el-date-picker
          value-format="yyyy-MM-dd 00:00:00"
          type="date"
          placeholder="当天日期"
          v-model.trim="params.startDate"
        ></el-date-picker>
        <span style="padding: 0px 10px;">至</span>
        <el-date-picker
          value-format="yyyy-MM-dd 00:00:00"
          type="date"
          placeholder="当天日期"
          v-model.trim="params.endDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <span class="leftSpan">关键词搜索：</span>
        <el-input type="text" placeholder="输入您想搜索的关键字" v-model.trim="params.keyWord"></el-input>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      border
      style="width:95%"
    >
      <el-table-column
        prop="No"
        label="序号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="time"
        label="创建时间"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="专题名称"
        align="center"
      ></el-table-column>
      <el-table-column
        label="小程序路径"
        align="center"
      >
        <template slot-scope="scope">
          <span>{{scope.row.route}}</span><br>
          <span
            style="display:inline-block;width:60px;background: skyblue;color:white; cursor: pointer;"
          >复制</span>
        </template>
      </el-table-column>
      <el-table-column
        label="预览操作"
        align="center"
      >
        <template slot-scope="scope">
          <span style="color:blue;cursor:pointer;" @click="preview(scope)">点击预览</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <span style="color:blue;cursor:pointer;" @click="edit">编辑</span>
        </template>
      </el-table-column>
    </el-table>

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
    name: 'ProductSpecial',
    data() {
      return {
        params: {
          startDate: '',
          endDate: '',
          keyWord: '',
        },
        tableData:[
          { No: '1',time: '123456',name: '口红排行',route: '小程序地址'}
        ],
        pagination: {
          pageIndex: 1,
          pageSizeOptions: [100],
          pageSize: 100,
          totalNum: 100,
        },
        previewFlag: false,
      }
    },
    methods: {
      addNewSpecial() { //跳转至新增专题页面
        this.$router.push({path: '/product/product-addSpecial'})
      },
      search() {
        console.log(this.params)
      },
      preview(scope) {
        this.previewFlag = true
        console.log(scope.row)
      },
      previewClose() {
        this.previewFlag = false
      },
      edit() {
        this.$router.push({path: '/product/product-specialContent'})
      },
      changeSize(size) {

      },
      changePage(page) {

      },
    },
  }
</script>

<style lang="scss">
  .special-page {
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      border-radius: 10px;
      height: 40px;
      line-height: 40px;
      background: gray;
      font-size: 18px;
      .el-button {
        float: right;
        margin-right: 60px;
        border-radius: 10px;
      }
    }
    .el-form {
      padding-top: 20px;
      .el-form-item {
        .leftSpan {
          display: inline-block;
          width: 90px;
          text-align: right;
        }
        .el-input {
          width: 300px;
        }
        .el-button {
          margin-left: 200px;
        }
      }
    }

  }
</style>
