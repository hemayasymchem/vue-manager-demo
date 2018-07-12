<template>
    <div class="UpButton-component" @click="upClick">
      ▲
    </div>
</template>

<script>
    export default {
        name: 'UpButton',
        methods: {
            upClick() {
                this.$emit('upClick')
            }
        }
    }
</script>

<style lang="scss">
    .UpButton-component {
        display: inline-block;
        width: 20px;
        height:20px;
        line-height: 20px;
        text-align: center;
        background: green;
        color: #fff;
        cursor: pointer;
        font-size: 12px;
    }
</style>



