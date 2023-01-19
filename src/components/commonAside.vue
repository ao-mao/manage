<template>
  <el-menu default-active="1-4-1" 
  class="el-menu-vertical-demo" 
  @collapse-transition="false"
  @open="handleOpen" 
  @close="handleClose"
  :collapse="isCollapse"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#E6A23C"
  >
  <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
    <el-menu-item :index="item.name" v-for="item in noChildren" :key="item.name" @click="clickMenu(item)">
      <!-- "`el-icon-${item.icon}`" 是模板字符串 es6语法 -->
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '首页1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '首页2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单
    clickMenu(item){
      console.log(item);
      //当页面的路由和跳转路由不一致才进行跳转
      if(this.$route.path !== item.path && !(this.$route.path === '/home' && ( item.path === '/'))){
        this.$router.push(item.path);
      }
      //点击之后将数据传到vuex（tab.js）中
      this.$store.commit('selectMenu',item)
    }
  },
  computed: {
    // 对数据进行过滤， 分成有子菜单和没有子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children);
    },
    hasChildren() {
      return this.menuData.filter(item => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>

<!-- scope只作用于当前页面 -->
<style lang="less" scope>
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu{ 
  border: 0;
  h3 {
    padding : 0 10px;
    color:#fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>