/**
 * author: zhanghuan
 * created: 2017/11/4
 * describe: 左侧菜单
 */
"use strict";
import axios from '@/ajax';
import URL from '@/urlConfig';

export default {
  name: "sideMenu",
  data () {
    return {
      tempNav: [],
      hash: location.hash
    }
  },
  methods: {
    clearAllActive: function (nav) {
      //折叠所有菜单
      for (let i = 0, l = nav.length; i < l; i++) {
        nav[i].active = false;
      }
    },
    activeNav: function (nav) {
      //确定当前应该激活的菜单
      let hash = this.hash;
      for (let i = 0, l = nav.length; i < l; i++) {
        if (nav[i].children) {
          for (let j = 0, le = nav[i].children.length; j < le; j++) {
            if ('#' + nav[i].children[j].hash === hash) {
              nav[i].children[j].active = true;
              nav[i].active = true;
              break;
            } else {
              nav[i].children[j].active = false;
              nav[i].active = false;
            }
          }
        } else {
          if ('#' + nav[i].hash === hash) {
            nav[i].active = true;
          } else {
            nav[i].active = false;
          }
        }
      }
      return nav;
    },
    openOrClose: function (i) {
      //展开或折叠菜单
      if (this.tempNav[i].children && this.tempNav[i].children.length > 0) {
        //如果有子菜单
        if (this.tempNav[i].active) {
          this.tempNav[i].active = !this.tempNav[i].active;
          return false;
        }
        this.clearAllActive(this.tempNav);
        this.tempNav[i].active = !this.tempNav[i].active;
      }
    }
  },
  beforeCreate: function () {
    let ths = this;
    axios.get(URL.nav)
      .then(function (response) {
        let data = response.data;
        if (data.code === 1 && data.data) {
          ths.tempNav = ths.activeNav(data.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
    window.addEventListener('hashchange', function () {
      ths.hash = location.hash;
      ths.tempNav = ths.activeNav(ths.tempNav);
    }, false);
  },
  created: function () {

  },
  computed: {
    nav: function () {
      return this.tempNav;
    }
  }
}
