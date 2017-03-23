<template lang="html">
  <div class="savvy-investors child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div>Obsession with trends and headlines can overvalue stocks. And what gossip gives, gossip can take away.</div>
        </div>
      </div>
      <div class="box">
        <div class="copy challenge">
          <span class="big"><span class="green-text">Challenge</span><br>yesterday.</span>
        </div>
      </div>

      <div class="box etf flex-start">
        <div class="copy">
          <span>“You're only <br> as strong as your weakest stock.” </span>
          <span class="green-text tiny">-Vince Lowry <br> Head of Revenue Weighted Strategy Team </span>
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
        <span>Oppenheimer <br>Revenue Weighted ETFs</span><br>
        <span><span class="green-text">RWK</span> | <span class="green-text">RWL</span> | <span class="green-text">ESGL</span> <br> <span class="green-text">RDIV</span> | <span class="green-text">RWJ</span> | <span class="green-text">ESGF</span></span>
      </div>
    </div>
    <div class="box vince">
      <div class="image">
        <span class="image-meta"><span class="name">Vince Lowry</span> <br>Head of Revenue <br> Weighted Strategy Team</span>
        <img src="static/img/vince_lowry.jpg" alt="Vince Lowry">
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

.vince {
  background: #f3f3f3;
  img {
    display: block;
    margin-top: 5px;
    margin-left: 19px;
  }
  .image-meta {
    margin-top: 2rem;
    .name {
      line-height: .5
    }
  }
}
.tiny {
  font-size: 9px;
}

</style>
