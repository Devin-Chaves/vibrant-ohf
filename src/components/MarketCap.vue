<template lang="html">
  <div class="market-cap child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div>Market cap is influenced by gossip, panic and the 24-hour news cycle. Revenue isn’t emotional, so it can be a truer indicator of a company’s success.</div>
        </div>
        <div class="cta">

        </div>
      </div>
      <div class="box">
        <div class="copy challenge">
          <span class="big"><span class="green-text">Challenge</span><br>old&nbsp;thinking.</span>
        </div>
        <div class="cta">

        </div>
      </div>

      <div class="box flex-start">
        <div class="copy copy--secondary">
          <span>“When you buy the S&P 500, you’re buying emotion and panic in what the marketplace reflects.”</span><br>
          <span class="green-text tiny">-Sharon French <br> Head of Beta Solutions</span>
          <img src="static/img/wisdom_man.png" alt="Wise Little Guy">
        </div>
        <div class="cta">

        </div>
      </div>
      <div class="box box--wide box--video">
        <div class="videoholder" id="videoHolder">
				</div>
        <video id="myVideo" @click="playOrPause" src="static/videos/etfs-retail.mp4" poster="static/img/etf_poster.png">
          <div class="play-button"></div>
        </video>
        <div class="cta">

        </div>
      </div>
    <div class="box etf">
      <div class="copy">
        <span>Oppenheimer <br>Revenue&nbsp;Weighted&nbsp;ETFs</span> <br>
        <span><span class="green-text">RWK</span> | <span class="green-text">RWL</span> | <span class="green-text">ESGL</span> <br> <span class="green-text">RDIV</span> | <span class="green-text">RWJ</span> | <span class="green-text">ESGF</span></span>
      </div>
      <div class="cta">

      </div>
    </div>
    <div class="box">
      <div class="image sharon">
        <span class="image-meta"><span class="name">Sharon&nbsp;French</span> <br><span class="tiny">Head&nbsp;of&nbsp;Beta <br> Solutions</span></span>
        <img src="static/img/sharon_french.jpg" alt="Sharon French">
      </div>
    </div>
    <div class="box">
      <div class="image challenge">
        <img src="static/img/challenge_index.jpg" alt="Level II Tape">
        <span class="big challenge-index"><span class="green-text">challenge</span> <br> the index.</span>
      </div>
      <div class="cta">

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

    .sharon {
      background: #e5e5e5;
      img {
        margin-top: 15px;
      }
      .image-meta {
        top: 24px;
      }
    }
    .flex-start {
      position: relative;
    }
    .flex-start img {
      height: 90px;
      position: absolute;
      bottom: 5px;
      right: 20px;
    }
</style>
