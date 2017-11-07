/**
 * @author: zhanghuan
 * @create: 2017/11/4
 * @describe: 公共ajax配置
 */
"use strict";
import axios from 'axios';
import * as Cookies from 'tiny-cookie';

let TOKEN = Cookies.get('token');
let layerOne = null;

if (TOKEN == 'null' || TOKEN == 'undefined') {
  TOKEN = '';
}

var ajax = axios.create({
  baseURL: '',
  timeout:15000,
  headers: {'token': TOKEN || ''},
  //`transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
  transformResponse:[function(data){
    //在这里根据自己的需求改变数据
    layer.close(layerOne);
    var temData = JSON.parse(data);
    if (temData.code !== 1) {
      layer.open({
        content: temData.msg,
        skin: 'msg',
        time: 2, //2秒后自动关闭
        end: function () {
          console.error(temData.msg);
        }
      });
    }
    return temData;
  }],
});

//添加一个请求拦截器
ajax.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  layerOne = layer.open({
    type: 2,
    content: '加载中'
  });
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(err);
});

export default ajax;
