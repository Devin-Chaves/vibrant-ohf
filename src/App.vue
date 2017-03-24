<template>
  <div id="app">
      <!-- <ul>
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

      </ul> -->
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
html, body {
  font-family: 'PragmaticaW01-Condensed1061371', Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: white;
}

#app {
  padding: 0 20px;
  height: 100vh;
}

ul {
  line-height: 1.5em;
  padding-left: 1.5em;
}

a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

body {
  background: black;
}
.challenge-view {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.box-wrapper {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  max-width: 800px;
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
  margin-left: 200px;
  max-width: 650px;
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
    font-family:'PragmaticaW01-Condensed1061365';;
    font-size: 22px;
    text-transform:uppercase;
    font-weight: 800;
    line-height: .9;
  }
  strong {
    font-family:'PragmaticaW01-Condensed1061371';
  }
  .tiny {
    font-family:'PragmaticaW01-CondLight';
    display: inline-block;
    font-size:10px;
    line-height:1.5;
    padding: 8px 0;
  }
  .box {
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-top: 10px;
    height: 180px;
    width: 190px;
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
      width: 390px;
      background: #bad61e;
      color: black;
      display: flex;
      align-items: center;
      .copy{
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        .big {
          margin-right: 24px;
        }
      }
    }
    &--video {
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .copy {
    padding: 20px 26px;
    font-size: 16px;

    &--secondary {
      padding: 0 20px;
      font-size: 12px;
    }
  }
  .cta {
    padding-top: 16px;
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
  padding: 0 20px;
  background: #ececec;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 3px;
  -webkit-transition: all 0.25s easeInOutCubic;
  transition: all 0.25s easeInOutCubic;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.11), 0 4px 6px 0 rgba(0, 0, 0, 0.08);
  line-height: 27px;
  height: 25px;
  font-size: 12px;
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
  .etf {
    .copy {
      padding-left: 15px;
    }
    overflow: scroll;
  }
  .morningstar {
    display: inline-block;
    font-size: 8px;
    line-height: 1.3;
  }
  .image {
    position: relative;

    .image-meta {
      font-size: 8px;
      left: 10px;
      color: black;
      font-weight: 400;
    }
    .name {
      font-size: 12px;
      line-height: 1.5;
      font-weight: normal
    }
    .tiny {
      display: inline;
      line-height: 1.1;
      font-size: 9px;
      font-weight: 200;
    }
    span {
      position: absolute;
    }
    img {
      width: 100%;
    }
  }
  .challenge {
    display: flex;
    flex-direction: row;
    margin: -1px;
  }
  .challenge-index {
    padding: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  video {
    margin: 0 auto;
    max-height: 220px;
  }
  .child {
    color: white;
  .box {
    display: flex;
    align-items: center;
    overflow: hidden;
      }
    }
  .flex-start {
    display: flex;
    align-items: flex-start;
  }

  .fat-child {
    padding-left: 15px;
  }

  .tiny {
    font-weight: 200;
  }
  .disclosure-open {
    position: absolute;
    bottom: 7px;
    right: 17px;
    font-size: 7px;
    font-weight: 200;
  }

  .disclosure {
    display: none;
    overflow: scroll;
    padding: 30px 15px 0 5px;
    background: black;
    position: absolute;
    max-width: 190px;
    max-height: 180px;
    .large {
      display: inline-block;
      font-size: .71rem;
      font-weight: 400;
      font-style: italic;
      line-height: 1.25
    }
    .small {
      font-family:'PragmaticaW01-CondLight';
      padding-top: 8px;
      display: inline-block;
      font-size: 8px;
      line-height: 1.2;
      font-weight: 200;
      padding-bottom: 40px;
      }
    }
    .disclosure-buttons {
      display: none;
    }
  .close {
    position: absolute;
    top: 5px;
    right: 7px;
    img {
      height: 10px;
    }
  }
  .updown {
    position: absolute;
    bottom: 5px;
    right: 7px;
    img {
      height: 20px;
    }
  }
  .is-opened {
    display: block;
  }
  .is-closed {
    display: none;
  }
  .instruments {
    display: inline-block;
    padding-top: 10px;
  }
  .stars {
    height: 15px;
    padding: 3px 0;
  }

</style>
