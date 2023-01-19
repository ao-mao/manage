<template>
    <div class="header-container">
        <div class="l-content">
            <el-button icon="el-icon-menu" size="mini" @click="handleMenu" style="margin-right: 20px;"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item> 
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/user.jpeg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
//辅助函数
import { mapState } from 'vuex'
export default {
    data() {
        return {};
    },
    methods: {
        handleMenu() {
            // console.log(this.$store);
            this.$store.commit('collapseMenu')
        },
        // 获取store中的数据
    },
    computed:{
        ...mapState({
            tags : state => state.tab.tabsList
        })
    }
}
</script>

<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .l-content{
        display:flex;
        align-items: center;
        // /deep/样式穿刺
        /deep/.el-breadcrumb{
            .el-breadcrumb__inner{
                font-weight: normal;
                // &并且的意思
                &.is-link{
                    color: #666;
                }
            }
            :last-child {
                .el-breadcrumb__inner {
                    color: #fff;
                }
            }
        }
    }
}
</style>