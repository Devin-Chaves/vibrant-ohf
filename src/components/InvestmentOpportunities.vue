<template lang="html">
  <div class="investment-opportunities child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div>Fearing a post-Brexit recession, some global investors fled. But the opposite proved true and growth accelerated. Volatility creates opportunity.</div>
        </div>
      </div>
      <div class="box">
        <div class="copy challenge">
          <span class="big"><span class="green-text">Challenge</span><br>pessimism.</span>
        </div>
      </div>

      <div class="box flex-start">
        <div class="copy">
          <span>“The global economy has come together at an incredible speed.”</span>
          <span class="green-text tiny">-George Evans <br> CIO of Equities</span>
        </div>
      </div>
      <div class="box box--wide box--video">
        <div class="videoholder" id="videoHolder">
        </div>
        <video id="myVideo" @click="playOrPause" src="static/videos/growth-retail.mp4" poster="static/img/growth_poster.png">
          <div class="play-button"></div>
        </video>
        <div class="cta">

        </div>
      </div>
    <div class="box">
      <div class="copy">
        <span>Oppenheimer <br> International&nbsp;Growth&nbsp;Fund</span><br><br>        <span><span class="green-text">RWK</span> | <span class="green-text">RWL</span> | <span class="green-text">ESGL</span> <br> <span class="green-text">RDIV</span> | <span class="green-text">RWJ</span> | <span class="green-text">ESGF</span></span>
      </div>
    </div>
    <div class="box">
      <div class="image george">
        <span class="tiny image-meta"><span class="name">George&nbsp;Evans</span> <br> CIO of Equities</span>
        <img src="static/img/george_evans.jpg" alt="George Evans">
      </div>
    </div>
    <div class="box">
      <div class="image challenge">
        <span class="big challenge-index"><span class="green-text">challenge</span> <br> the index.</span>
        <img src="static/img/challenge_index.jpg" alt="Level II Tape">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    methods: {
      playOrPause() {
        var x = document.getElementById("myVideo");
        if (x.paused) {
          x.play();
          x.height = 180
       } else {
          x.pause();
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
    video {
      object-fit: contain;
    }
    .george {
      background: #e5e5e5;
      img {
        margin-left: 15px;
      }
    }
    .image-meta {
      top: 53%;
      transform: translateY(-50%);
      .name {
        line-height: .1
      }
    }
</style>
