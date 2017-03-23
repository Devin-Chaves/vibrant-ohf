<template lang="html">
  <div class="diminishing-investments child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div>Seniors are the fastest growing economic sector, accounting for $7.1 trillion in activity. And with global trends in life expectancy, this number is only expected to rise.</div>
        </div>
      </div>
      <div class="box">
        <div class="copy challenge">
          <span class="big"><span class="green-text">Challenge</span><br>stereotypes.</span>
        </div>
      </div>

      <div class="box etf flex-start">
        <div class="copy">
          <span>“Ignore the short-term noise, because <br> when you invest for <br> the long-term, you <br> see it through.” </span><br>
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
        <span>Oppenheimer International&nbsp;Growth&nbsp;Fund <span class="green-text"><br>(OIGYX)</span></span><br><br>
        <span class="green-text">
          <div class="star"></div>
        </span>
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
          x.height = 180
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
    font-size: 10px;
    line-height: 1.3;
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
