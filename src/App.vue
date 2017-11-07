<template>
  <div id="app" class="container-fluid">
    <!-- 头部 -->
    <v-header></v-header>
    <!-- 身体部分 -->
    <div id="body-container">
      <!-- 左侧菜单 -->
      <side-menu v-show="sideMenuShow"></side-menu>
      <!-- 路由页面 -->
      <div id="page-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from './components/public/Header.vue';
  import SideMenu from './components/public/SideMenu.vue';
  export default {
    name: 'app',
    components: {VHeader, SideMenu},
    data () {
      return {
        sideMenuShow: true
      }
    },
    methods: {
      /*左侧菜单响应式*/
      sideMenuDisplay: function () {
        var ths = this;
        if ($(window).width() >= 768) {
          ths.sideMenuShow = true;
          //$(".Hui-aside").show();
        } else {
          ths.sideMenuShow = false;
        }
      }
    },
    mounted: function () {
      let ths = this;
      ths.sideMenuDisplay();
      $(window).resize(function () {
        ths.sideMenuDisplay();
      });
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: "Microsoft Yahei";
    padding: 0;
  }

  #body-container {
    position: relative;
  }

  #page-container {
    margin-left: 260px;
  }

  @import "./sass/public/Media.scss";
</style>
