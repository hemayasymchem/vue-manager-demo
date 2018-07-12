<template>
    <div class="DownButton-component">
      ▼
    </div>
</template>

<script>
    export default {
        name: 'DownButton',
        props: {
            downClick: {
                type: Function,
                default: null,
            }
        }
    }
</script>

<style lang="scss">
    .DownButton-component {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: indigo;
        color: #fff;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
    }
</style>
