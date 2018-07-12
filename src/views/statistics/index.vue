<template>
  <div class="statistics-page">
    <h3 class="title">
      统计管理
    </h3>
    <div>
      <p class="biaoti">当前账户信息：</p>
      <p class="content content1">
        <span>累计佣金总金额：{{price1}}元</span>
        <span>已打款金额：{{price2}}元</span>
        <span>账户剩余金额：{{price3}}元</span>
      </p>
      <p class="content">
        <span style="color:gray; font-size:14px;">温馨提示：系统每月15日会统一将累计预计可获得收益打到您的签约合同银行卡账户中,请注意查收，不同银行会有转账延时，还请耐心等待。</span>
      </p>
    </div>

    <div>
      <p class="biaoti">订单查询：</p>
      <p class="content">
        <span>订单日期：</span>
        <el-date-picker
          value-format="yyyy-MM-dd 00:00:00"
          type="date"
          placeholder="当天前一天日期"
        ></el-date-picker>
        <span>至</span>
        <el-date-picker
          value-format="yyyy-MM-dd 23:59:59"
          type="date"
          placeholder="当天前一天日期"
        ></el-date-picker>

        <el-button type="primary">查询</el-button>
        <el-button type="primary">导出</el-button>
      </p>
    </div>

    <el-table
      :data="tableData"
      border
      style="width:90%"
    >
      <el-table-column
        prop="no"
        label="序号"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="订单日期"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="lei"
        label="商品分类"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="商品名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="state"
        label="是否可返回佣金"
        align="center"
        :formatter="formatter"
      ></el-table-column>
      <el-table-column
        prop="shouyi"
        label="预计可获得利益（元）"
        align="center"
      ></el-table-column>
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
  </div>
</template>

<script>
  export default {
    name: 'statisticsPage',
    data() {
      return {
        price1: '123',
        price2: '23',
        price3: '122',
        tableData: [
          {no:1,date: '123',lei: '化妆品',name: '是否封东风',state: '3',shouyi: '34,33'}
        ],
        pagination: {
          pageIndex: 1,
          pageSizeOptions: [100],
          pageSize: 100,
          totalNum: 100,
        },
      }
    },
    methods: {
      formatter(row,column,cellValue,index) {
        if (cellValue == 1) {
          return 'OK1'
        } else if (cellValue == 2) {
          return 'OK2'
        } else {
          return 'OK3'
        }
      },
      changeSize(size) {

      },
      changePage(page) {

      },
    }
  }
</script>

<style lang="scss">
  .statistics-page {
    width: 100%;
    height: 100%;
    .title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 10px;
      background: gray;
    }
    .biaoti {
      color: blue;
      padding: 20px 0px 20px 20px;
    }
    .content {
      padding: 0px 0px 10px 40px;
      .el-button {
        margin-left: 40px;
      }
    }
    .content1 {
      span {
        padding-right: 50px;
      }
    }
  }
</style>
