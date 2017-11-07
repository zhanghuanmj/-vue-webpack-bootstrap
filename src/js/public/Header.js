/**
 * author: zhanghuan
 * created: 2017/11/4
 * describe: 公共头部
 */
"use strict";

export default {
  name: "vHeader",
  data () {
    return {
      msg: 'header',
      sideMenuShow: false
    }
  },
  methods: {
    sideMenuFn: function () {
      var sideMenu = $('#side-menu');
      this.sideMenuShow = !this.sideMenuShow;
      if (this.sideMenuShow) {
        sideMenu.addClass('slideInDown');
        sideMenu.show();
      } else {
        sideMenu.fadeOut();
      }
    }
  },
  created: function () {

  }
}
