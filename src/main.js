// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'script-loader!jquery/dist/jquery.min';

window.jQuery = jQuery;
window.$ = jQuery;

import Vue from 'vue'
import App from './App'
import router from './router'

import creativeFunctionLibrary from '../static/creativeFunctionLibrary.js'

import FontFaceObserver from 'fontfaceobserver'
var normal = new FontFaceObserver('PragmaticaCond');
var bold = new FontFaceObserver('PragmaticaCond', {
  weight: bold
});

Promise.all([normal.load(), bold.load()]).then(function () {
  console.log('Family A & B have loaded');
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
