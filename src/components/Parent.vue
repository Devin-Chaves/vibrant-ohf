<template lang="html">
  <div class="parent">
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
body {
  background: black;
}
.parent {
  display: flex;
  flex-direction: row;
}
.sidebar {
  margin-top: 32px;
  width: 250px;
  height: 790px;
  border: solid 1px #bfd916;
}
.box-wrapper {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  max-width: 900px;
}
.box {
  margin-top: 32px;
  height: 240px;
  width: 250px;
  border: solid 1px #bfd916;

  &--wide {
    width: 532px;
  }
}
.box:not(:last-of-type) {
  margin-right: 32px;
}
</style>
