<template lang="html">
  <div class="challenge-view">
    <!-- <div class="box-wrapper">

      <div class="box">
        <div class="copy">
          <div class="cta">

          </div>
        </div>
      </div>
      <div class="box">
        <div class="copy">
          <div class="cta">

          </div>
        </div>
      </div>
      <div class="box">
        <div class="copy">
          <div class="cta">

          </div>
        </div>
      </div>
      <div class="box">
        <div class="copy">
          <div class="cta">

          </div>
        </div>
      </div>
      <div class="box">
        <div class="copy">
          <div class="cta">

          </div>
        </div>
      </div>
      <div class="box">
        <div class="copy">
          <div class="cta">

          </div>
        </div>
      </div>
    <div class="box">
      <div class="copy">
        <div class="cta">

        </div>
      </div>
    </div>
    <div class="box">
      <div class="copy">
        <div class="cta">

        </div>
      </div>
    </div>
    <div class="box">
      <div class="copy">
        <div class="cta">

        </div>
      </div>
    </div>
  </div> -->
    <!-- <h2>Parent</h2> -->
    <div class="sidebar">
      <img class="img-saver" src="static/img/oppenheimer.png" alt=""/>
      <transition name="fade">
        <div v-if="$route.name !== 'challenge'">
          <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
            <img src="static/img/oppenheimer.png" alt="Oppenheimer Funds">
          </a>
          <router-link to='/challenge'>
            <div class="next-challenge">
              <div class="arrow"></div><span>Next Challenge</span>
            </div>
        </router-link>
      </div>
      </transition>
      <transition name="fade">
        <div class="challenge-open" v-if="$route.name == 'challenge'">
          <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
            <img src="static/img/oppenheimer.png" alt="Oppenheimer Funds">
          </a>
        </div>
      </transition>
      <div class="copyright">©2017 OppenheimerFunds Distributor, Inc.</div>
    </div>
    <div class="copyright-hidden">©2017 OppenheimerFunds Distributor, Inc.</div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  }
}
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}


</style>
