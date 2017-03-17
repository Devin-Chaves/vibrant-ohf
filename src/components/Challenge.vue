<template lang="html">
  <div class="challenge">
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
      <img src="static/img/oppenheimer.png" alt="Oppenheimer Funds">
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

.sidebar img {
  max-width: 100%;
}

</style>
