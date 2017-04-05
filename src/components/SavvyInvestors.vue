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
          <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
            <div class="copy challenge fat-child">
          <span class="big">
            <span class="green-text">Challenge</span><br>yesterday.
          </span>
        </div>
      </a>
      </div>
      <div class="box etf flex-start">
      <a href="https://ad.doubleclick.net/ddm/clk/320829618;149536111;f" target="_blank">
        <div class="copy">
          <span>“You're only <br> as strong as your weakest stock.” </span>
          <span class="green-text tiny">-Vince Lowry <br> Head of Revenue Weighted Strategy Team </span>
        </div></a>
      </div>
      <div class="box box--wide box--video">
        <div class="videoholder1" id="videoHolder">
				</div>
        <!-- <video id="myVideo" @click="playOrPause" src="http://demos.vibrantmedia.com/demos/verticals/DE/BD/Christo_Oosthuizen/vibrant-ohf/static/videos/etfs-retail.mp4" poster="http://demos.vibrantmedia.com/demos/verticals/DE/BD/Christo_Oosthuizen/vibrant-ohf/static/img/etf_poster.png">
          <div class="play-button"></div>
        </video> -->
        <div class="cta">

        </div>
      </div>
    <div class="box etf">
      <a href="https://ad.doubleclick.net/ddm/clk/320520515;149536111;p" target="_blank">
        <div class="copy">
          <span>Oppenheimer <br>Revenue Weighted ETFs</span><br>
          <span class="instruments"><span class="green-text">RWK</span> | <span class="green-text">RWL</span> | <span class="green-text">ESGL</span> <br> <span class="green-text">RDIV</span> | <span class="green-text">RWJ</span> | <span class="green-text">ESGF</span></span>
        </div></a>
        <div class="disclosure" id="disclosure">
          <span>
            <span class="large">Carefully consider fund investment objectives, risks, charges and expenses. Visit oppenheimerfunds.com or
            call your advisor for a prospectus with this and other fund information. Read it carefully before investing.
            </span> <br>
            <span class="small">
              The alternate weighting approach employed by the Funds (i.e., using revenues as a weighting measure), while designed to enhance
              potential returns, may not produce the desired results. Because the Funds are rebalanced quarterly, the Funds may experience
              portfolio turnover in excess of 100%. The greater the portfolio turnover, the greater the transaction costs to the Funds, which could
              have an adverse effect on a Fund's performance. There is no guarantee that the issuers of stocks will declare dividends in the
              future, or that dividends will remain at their current levels or increase over time. The stocks of companies with favorable ESG
              practices may underperform the stock market as a whole.
              <br><br>©2017 OppenheimerFunds Distributor, Inc.
            </span>
          </span>
        </div>
        <div id="disclosure-buttons" class="disclosure-buttons">
          <div class="close" id="close" @click="closeDisclosure">
            <img src="http://demos.vibrantmedia.com/demos/verticals/DE/BD/Christo_Oosthuizen/vibrant-ohf/static/img/close.png" alt="Close">
          </div>
          <div class="updown">
            <img src="http://demos.vibrantmedia.com/demos/verticals/DE/BD/Christo_Oosthuizen/vibrant-ohf/static/img/up_down.png" alt="Scroll">
          </div>
        </div>
          <span class="disclosure-open" id="disclosure-open" @click="displayDisclosure">
            Disclosure >
          </span>
      </div>
    <div class="box vince">
    <a href="https://ad.doubleclick.net/ddm/clk/320829618;149536111;f" target="_blank">
      <div class="image">
        <span class="image-meta"><span class="name">Vince Lowry</span> <br>Head of Revenue <br> Weighted Strategy Team</span>
        <img src="http://demos.vibrantmedia.com/demos/verticals/DE/BD/Christo_Oosthuizen/vibrant-ohf/static/img/vince_lowry.jpg" alt="Vince Lowry">
      </div></a>
    </div>
    <div class="box">
      <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
        <div class="image challenge">
          <span class="big challenge-index"><span class="green-text">challenge</span> <br> the index.</span>
          <img src="http://demos.vibrantmedia.com/demos/verticals/DE/BD/Christo_Oosthuizen/vibrant-ohf/static/img/challenge_index.jpg" alt="Level II Tape">
        </div></a>
    </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
      playOrPause() {
        var x = document.getElementById("myVideo");
        x.addEventListener('ended',function(){
          x.load();
          x.height = 220;
        },false);
        if (x.paused) {
          x.play();
          x.height = 180
       } else {
          x.pause();
          }
      },
      displayDisclosure() {
        var x = document.getElementById('disclosure-buttons')
        var y = document.getElementById('disclosure');
        var z = document.getElementById('disclosure-open')
        x.classList.add('is-opened')
        y.classList.add('is-opened');
        z.classList.add('is-closed');
      },
      closeDisclosure() {
        var x = document.getElementById('disclosure-buttons')
        var y = document.getElementById('disclosure')
        var z = document.getElementById('disclosure-open')
        x.classList.remove('is-opened')
        y.classList.remove('is-opened')
        z.classList.remove('is-closed')
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
.fat-child {
  padding-left: 22px
}
@media (max-width: 666px) {

   .box {
     display: none;
     position: relative;
   }

  .box:nth-of-type(1) {
    display: flex;
    width: 190px;
    order: -2;
  }
  .box:nth-of-type(3) {
    display: flex;

  }
  .box:nth-of-type(4) {
    display: flex;
    order: -1;
    width: 190px;
  }
  .box:nth-of-type(5) {
    display: flex;
    order: -2;
  }
}
</style>
