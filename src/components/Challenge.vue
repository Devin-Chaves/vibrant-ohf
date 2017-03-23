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

      <transition name="fade">
        <router-link to='/challenge' v-if="$route.name !== 'challenge'">
          <img src="static/img/oppenheimer.png" alt="Oppenheimer Funds">
          <div class="next-challenge">
            <div class="arrow"></div><span>Next Challenge</span>
          </div>
        </router-link>
      </transition>
      <transition name="fade">
        <div class="challenge-open" v-if="$route.name == 'challenge'">
          <a href="http://www.oppenheimerfunds.com/ico/challengetheindex" target="_blank">
            <img src="static/img/oppenheimer.png" alt="Oppenheimer Funds">
          </a>
        </div>
      </transition>
      <div class="tiny copyright">©2017 OppenheimerFunds Distributor, Inc.</div>
    </div>
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
.sidebar {
  position: relative;
  margin-top: 10px;
  width: 250px;
  height: 575px;
  margin-left: -500px;
  .tiny {
    display: block;
  }
}

.sidebar img {
  max-width: 80%;
}
.next-challenge {
  position: absolute;
  top: 50%;
}
.next-challenge span {
  font-size: 24px;
  margin-right: -20px;
  color: white;
}
.arrow {
  margin-right: 8px;
  margin-bottom: -2px;
  display: inline-block;
  vertical-align: baseline;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent #bad61e transparent transparent;
}
.copyright {
  position: absolute;
  bottom: 0;
}
.challenge-open {
  position: absolute;
  top: 50%;
  transform: translateY(-65%);
}

</style>
