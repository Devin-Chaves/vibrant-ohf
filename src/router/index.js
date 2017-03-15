import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Parent from '@/components/Parent'
import Default from '@/components/Default'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/parent', component: Parent,
      children: [
        { path: '', component: Default },
        { path: 'market-cap', component: Foo, name: 'foo'},
        { path: 'savvy-investors', component: Bar, name: 'bar' }
      ]
    }
  ]
})
