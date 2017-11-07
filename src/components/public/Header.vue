<!--
* author: zhanghuan
* created: 2017/11/4
* describe: 公共头部
-->
<template>
  <div id="header">
    <div class="clearfix">
      {{msg}}
      <span @click="sideMenuFn" id="side-menu-btn" class="btn btn-default pull-right visible-xs">☰</span>
    </div>
  </div>
</template>

<script src="@/js/public/Header"></script>

<style lang="scss" scoped>
  @import "../../sass/public/Header";
</style>
