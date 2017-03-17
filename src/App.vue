<template>
  <div id="app">
      <ul>
        <li><router-link to="/" exact>/</router-link></li>
        <li><router-link to="/challenge" exact>/challenge</router-link></li>
        <li><router-link :to="{name: 'market-cap'}">/challenge/market-cap</router-link></li>
        <li><router-link :to="{name: 'savvy-investors'}">/challenge/savvy-investors</router-link></li>
        <li><router-link :to="{name: 'investment-opportunities'}">/challenge/investment-opportunities</router-link></li>
        <li><router-link :to="{name: 'diminishing-investments'}">/challenge/diminishing-investments</router-link></li>
        <li><router-link :to="{name: 'middle-class'}">/challenge/middle-class</router-link></li>
        <li><router-link :to="{name: 'emerging-markets'}">/challenge/emerging-markets</router-link></li>
        <li><router-link :to="{name: 'developed-markets'}">/challenge/developed-markets</router-link></li>
        <li><router-link :to="{name: 'silicon-valley'}">/challenge/silicon-valley</router-link></li>

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
body {
  background: black;
}
.challenge {
  display: flex;
  flex-direction: row;
}
.sidebar {
  margin-top: 10px;
  width: 250px;
  height: 790px;
}
.box-wrapper {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  max-width: 900px;
}
.box:not(:last-of-type) {
  margin-right: 10px;
}

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
  color: #bad61e;
}
  .green-text {
    color: #bad61e;
  }
  .big {
    font-size: 30px;
    text-transform:uppercase;
    font-weight: 800;
  }
  .tiny {
    display: inline-block;
    font-size:12px;
    line-height:1.5;
    padding: 16px 0
  }
  .box {
    display: flex;
    align-items: flex-end;
    margin-top: 10px;
    height: 240px;
    width: 250px;
    border: solid 1px #bad61e;


    &--primary {
      background: white;
      color: black;
    }
    &--secondary {
      color: white;
      background: black;
    }
    &--wide {
      width: 512px;
      background: #bad61e;
      color: black;
      display: flex;
      align-items: center;
      .copy{
        padding: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        .big {
          margin-right: 48px;
        }
      }
    }
  }
  .copy {
    padding: 0 20px;
    font-size: 20px;
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
    color: #bad61e;
    }
  &--secondary {
    background: #bad61e;
    color: black;
    }
  }

</style>
