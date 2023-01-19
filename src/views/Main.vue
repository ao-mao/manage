<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-asideVue></common-asideVue>
      </el-aside>
      <el-container>
        <el-header>
          <common-header />
        </el-header>
        <common-tag></common-tag>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAsideVue from '@/components/commonAside.vue';
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '@/components/CommonTag.vue';
export default {
  data() {
    return {};
  },
  components: {
    CommonAsideVue,
    CommonHeader,
    CommonTag
  }
}
</script>


<style scoped>
.el-header {
  padding: 0;
}
.el-aside {
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}
.el-menu {
  transition: all 5ms;
  overflow-x: hidden
}
</style>