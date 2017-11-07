<!--
* author: zhanghuan
* created: 2017/11/4
* describe: 左侧菜单
-->
<template>
  <div id="side-menu" class="animated">
    <aside class="side-menu-cnt">
      <dl v-for="(item, index) in nav">
        <dt @click="openOrClose(index)" :class="{active: item.active}" class="clearfix">
          <span class="side-menu-icon pull-left"></span>
          <a :href="item.hash ? '#' + item.hash : 'javascript: void(0);'" class="parent-nav">{{item.name}}</a>
          <i v-if="item.children && item.children.length > 0" :class="{open: item.active}" class="icon pull-right"></i>
        </dt>

        <dd v-if="item.children && item.children.length > 0" v-show="item.active" class="animated flipInX">
          <ul>
            <li v-for="(ite, inde) in item.children">
              <div :class="{active: ite.active}">
                <a :href="ite.hash ? '#' + ite.hash : 'javascript: void(0);'" class="child-nav">{{ite.name}}</a>
              </div>
            </li>
          </ul>
        </dd>
      </dl>
    </aside>
  </div>
</template>

<script src="@/js/public/SideMenu"></script>

<style lang="scss" scoped>
  @import "../../sass/public/SideMenu";
</style>
