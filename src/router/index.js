import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Challenge from '@/components/Challenge'
import Default from '@/components/Default'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import MarketCap from '@/components/MarketCap'
import SavvyInvestors from '@/components/SavvyInvestors'
import InvestmentOpportunities from '@/components/InvestmentOpportunities'
import DiminishingInvestments from '@/components/DiminishingInvestments'
import MiddleClass from '@/components/MiddleClass'
import EmergingMarkets from '@/components/EmergingMarkets'
import DevelopedMarkets from '@/components/DevelopedMarkets'
import SiliconValley from '@/components/SiliconValley'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', redirect: { path: '/challenge' }},
    { path: '/challenge', component: Challenge,
      children: [
        { path: '', component: Default, name: 'challenge'},
        { path: 'market-cap', component: MarketCap, name: 'market-cap'},
        { path: 'savvy-investors', component: SavvyInvestors, name: 'savvy-investors'},
        { path: 'investment-opportunities', component: InvestmentOpportunities, name: 'investment-opportunities'},
        { path: 'diminishing-investments', component: DiminishingInvestments, name: 'diminishing-investments'},
        { path: 'middle-class', component: MiddleClass, name: 'middle-class'},
        { path: 'emerging-markets', component: EmergingMarkets, name: 'emerging-markets'},
        { path: 'developed-markets', component: DevelopedMarkets, name: 'developed-markets'},
        { path: 'silicon-valley', component: SiliconValley, name: 'silicon-valley'}
      ]
    }
  ]
})
