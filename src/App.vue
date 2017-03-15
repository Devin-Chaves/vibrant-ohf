<template>
  <div id="app">
      <h1>Transitions</h1>
      <ul>
        <li><router-link to="/" exact>/</router-link></li>
        <li><router-link to="/parent" exact>/parent</router-link></li>
        <li><router-link :to="{name: 'foo'}">/parent/market-cap</router-link></li>
        <li><router-link :to="{name: 'bar'}">/parent/savvy-investors</router-link></li>
        <li><router-link :to="{name: 'baz'}">/parent/investment-opportunities</router-link></li>
        <li><router-link :to="{name: 'baq'}">/parent/diminishing-investments</router-link></li>
        <li><router-link :to="{name: 'buz'}">/parent/middle-class</router-link></li>
        <li><router-link :to="{name: 'buq'}">/parent/emerging-markets</router-link></li>
        <li><router-link :to="{name: 'bam'}">/parent/developed-markets</router-link></li>
        <li><router-link :to="{name: 'fizz'}">/parent/silicon-valley</router-link></li>

      </ul>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  margin-left: 282px;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.router-link-active {
  color: #bfd916;
}
  .green-text {
    color: #bfd916;
  }
  .big {
    font-size: 32px;
    text-transform:uppercase;
    font-weight:bold;
  }
  .tiny {
    display: inline-block;
    font-size:12px;
    line-height:1.5;
    padding: 16px 0
  }
  .box {
    position: relative;

    &--primary {
      background: white;
      color: black;
    }
    &--secondary {
      color: white;
      background: black;
    }
  }
  .copy {
    position: absolute;
    bottom: 0;
    padding: 0 20px;
    font-size: 24px;
  }
  .cta {
    padding: 18px 0;
    text-align: left;
    a {
      .is-black {
        color: white;
        background: black;
      }
    }
  }
  .Button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  border: 0;
  overflow: visible;
  font: inherit;
  font-weight: 600;
  color: #333;
  text-transform: none;
  display: inline-block;
  padding: 0 32px;
  background: #ececec;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 3px;
  -webkit-transition: all 0.25s easeInOutCubic;
  transition: all 0.25s easeInOutCubic;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.11), 0 4px 6px 0 rgba(0, 0, 0, 0.08);
  line-height: 36px;
  height: 36px;
  font-size: 16px;
  text-decoration: none;
  text-align: left;
  white-space: nowrap;
  &--primary {
    background: black;
    color: #bfd916;
    }
  &--secondary {
    background: #bfd916;
    color: black;
    }
  }

</style>
