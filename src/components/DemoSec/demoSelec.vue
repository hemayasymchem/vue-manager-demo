<template>
  <div class="SeModel-component" v-if="visible">
    <div class="container">
      <p class="title">{{title}}</p>
      <el-radio v-model="radio" label="1">选项1</el-radio>
      <el-radio v-model="radio" label="2">选项2</el-radio>
      <el-radio v-model="radio" label="3">选项3</el-radio>
      <el-radio v-model="radio" label="4">选项4</el-radio>
      <el-radio v-model="radio" label="5">选项5</el-radio>
      <el-radio v-model="radio" label="6">选项6</el-radio>
      <p class="selector">
        <el-button type="primary" @click="show">确定</el-button>
        <el-button type="primary" @click="cancel">取消</el-button>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SeModelComponent',
    data() {
      return {
        radio: null,
        visible: null,

      }
    },
    methods: {

      cancel() {
         this.$el.parentNode.removeChild(this.$el)
        //this.visible = false

      }
    },
  }
</script>


<style lang="scss">
  .SeModel-component {
    position: fixed;
    width: 400px;
    height: 230px;
    border: 1px solid blue;
    .container {
      width: 100%;
      .title {
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid gray;
        font-size: 14px;
      }
      .el-radio {
        margin: 0px;
        width: 50%;
        float: left;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        &:nth-child(2n) {
          border-right: 1px solid #ccc;
        }
      }
      .selector {
        clear: both;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding-top: 20px;
      }

    }
  }
</style>
