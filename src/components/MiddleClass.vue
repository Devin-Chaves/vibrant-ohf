<template lang="html">
  <div class="middle-class child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div class="padding-right">The middle class is growing and by 2025 <br> it will include half the world's population. </div>
        </div>
      </div>
      <div class="box">
        <div class="copy challenge">
          <span class="big"><span class="green-text">Challenge</span><br>perceptions.</span>
        </div>
      </div>

      <div class="box flex-start">
        <div class="copy copy--secondary">
          <img src="static/img/beacon.png" alt="">
          <br>
          <span>“Technology has enabled the ability to communicate; <br>that’s broken down barriers.” </span><br>
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
    <div class="box etf">
      <div class="copy">
        <span>Oppenheimer International&nbsp;Growth&nbsp;Fund <br> <span class="green-text">(OIGYX)</span></span><br>
        <img class="stars" src="static/img/stars.png" alt="Stars">
        <span class="disclosure">Class Y shares rated 4 stars overall by Morningstar among 312 funds in the Foreign Large Growth category for the 3-, 5- and 10-Year periods ended 12/31/16 based on risk-adjusted performance.</span>
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
          x.height = 240
       } else {
          x.pause();
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .disclosure {
    display: inline-block;
    font-size: 8px;
    line-height: 1.3;
  }
  .image-meta {
    top: 50%;
    transform: translateY(-50%);
  }
  .padding-right {
    padding-right: 4rem;
  }
  .flex-start img {
    height: 50px;
    margin-left: 30%;
  }
  .stars {
    height: 15px;
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
