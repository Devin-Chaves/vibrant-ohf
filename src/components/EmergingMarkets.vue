<template lang="html">
  <div class="emerging-markets child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div class="padding-right">Emerging markets already represent 35% of global GDP. Can you afford to overlook 35 cents of every dollar?</div>
        </div>
      </div>
      <div class="box">
        <div class="copy challenge">
          <span class="big"><span class="green-text">Challenge</span><br>assumptions.</span>
        </div>
      </div>

      <div class="box etf flex-start">
        <div class="copy copy--secondary">
          <img src="static/img/globe.png" alt="Globe Image">
          <br>
          <span>“This is a global world. You should be global in your investing, as you are global in the products you buy.”</span><br>
          <span class="green-text tiny">-Hemant Baijal <br> Co-Head, Global Debt Team</span>
        </div>
      </div>
      <div class="box box--wide box--video">
        <div class="videoholder" id="videoHolder">
        </div>
        <video id="myVideo" @click="playOrPause" src="static/videos/bond-retail.mp4" poster="static/img/bond_poster.jpg">
          <div class="play-button"></div>
        </video>
        <div class="cta">

        </div>
      </div>
    <div class="box etf">
      <div class="copy">
        <span>Oppenheimer International Bond Fund <span class="green-text">(OIBYX)</span></span><br><br>
        <span class="green-text">
          <div class="star"></div>
        </span>
        <span class="exciting">Invest in countries with surprising opportunities.</span>
      </div>
    </div>
    <div class="box">
      <div class="image hemant">
        <span class="tiny image-meta"><span class="name">Hemant&nbsp;Baijal</span> <br> Co-Head, <br> Global Debt Team</span>
        <img src="static/img/hemant_baijal.jpg" alt="George Evans">
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
  .hemant {
    background: #f3f3f3;
    img {
      margin-left: 10px;
      margin-top: 10px;
    }
    .image-meta {
      top: 15%;
      left: 5px;
      .name {
        line-height: .1;
      }
    }
  }
  .padding-right {
    padding-right: 2rem;
  }
  .exciting {
    display: inline-block;
    font-size: 13px;
  }
  .flex-start img {
    height: 50px;
    margin-left: 30%;
  }
</style>
