<template lang="html">
  <div class="market-cap child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div>Market cap is influenced by gossip, panic and the <br>24-hour news cycle. <br> Revenue isn’t emotional, <br> so it can be a truer indicator <br> of a company’s success.</div>
        </div>
        <div class="cta">

        </div>
      </div>
      <div class="box">
        <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
          <div class="copy challenge fat-child">
            <span class="big"><span class="green-text">Challenge</span><br>old&nbsp;thinking.</span>
          </div></a>
      </div>

      <div class="box etf flex-start">
        <a href="https://ad.doubleclick.net/ddm/clk/320829619;149536111;g" target="_blank">
          <div class="copy copy--secondary">
            <span>“When you buy the S&P 500, you’re buying emotion and panic in what the marketplace reflects.”</span><br>
            <span class="green-text tiny">-Sharon French <br> Head of Beta Solutions</span>
            <img src="static/img/wisdom_man.png" alt="Wise Little Guy">
          </div></a>
        <div class="cta">

        </div>
      </div>
      <div class="box box--wide box--video">
        <div class="videoholder1" id="videoHolder">
				</div>
        <video id="myVideo" @click="playOrPause" src="static/videos/etfs-retail.mp4" poster="static/img/etf_poster.png">
          <div class="play-button"></div>
        </video>
        <div class="cta">

        </div>
      </div>
    <div class="box etf">
      <a href="https://ad.doubleclick.net/ddm/clk/320520515;149536111;p" target="_blank">
        <div class="copy">
          <span class="big big--hidden"><span class="green-text">challenge</span> <br> the index.</span>
          <span>Oppenheimer <br>Revenue&nbsp;Weighted&nbsp;ETFs</span> <br>
          <span class="instruments"><span class="green-text">RWK</span> | <span class="green-text">RWL</span> | <span class="green-text">ESGL</span> <br> <span class="green-text">RDIV</span> | <span class="green-text">RWJ</span> | <span class="green-text">ESGF</span></span>
        </div></a>
        <div class="disclosure" id="disclosure">
          <span>
            <span class="large">Carefully consider fund investment objectives, risks, charges and expenses. Visit <a href="http://www.oppenheimerfunds.com">oppenheimerfunds.com</a> or
              call your advisor for a prospectus with this and other fund information. Read it carefully before investing
            </span> <br>
            <span class="small">
              The alternate weighting approach employed by the Funds (i.e., using revenues as a weighting measure), while designed to enhance potential returns, may not produce the desired results. Because the Funds are rebalanced quarterly, the Funds may experience portfolio turnover in excess of 100%. The greater the portfolio turnover, the greater the transaction costs to the Funds, which could have an adverse effect on a Fund's performance. There is no guarantee that the issuers of stocks will declare dividends in the future, or that dividends will remain at their current levels or increase over time. The stocks of companies with favorable ESG practices may underperform the stock market as a whole.
              <br><br>©2017 OppenheimerFunds Distributor, Inc.
            </span>
          </span>
        </div>
        <div id="disclosure-buttons" class="disclosure-buttons">
          <div class="close" id="close" @click="closeDisclosure">
            <img src="static/img/close.png" alt="Close">
          </div>
          <div class="updown">
            <img src="static/img/up_down.png" alt="Scroll">
          </div>
        </div>
          <span class="disclosure-open" id="disclosure-open" @click="displayDisclosure">
            Disclosure >
          </span>
      </div>
    <div class="box">
      <a href="https://ad.doubleclick.net/ddm/clk/320829619;149536111;g" target="_blank"><div class="image sharon">
          <span class="image-meta"><span class="name">Sharon&nbsp;French</span> <br><span class="tiny">Head&nbsp;of&nbsp;Beta <br> Solutions</span></span>
          <img src="static/img/sharon_french.jpg" alt="Sharon French">
        </div></a>
    </div>
    <div class="box">
      <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank"><div class="image challenge">
          <img src="static/img/challenge_index.jpg" alt="Level II Tape">
          <span class="big challenge-index"><span class="green-text">challenge</span> <br> the index.</span>
        </div></a>
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
      },
      mounted() {
        function setVideoPlayer() {
            //Check for mp4 SRC and build player! - or Vast!
            if (ca.doesExist('mp4Src', true) || ca.doesExist('vastSrc', true)) {
                var videoSource = ca.getParam('mp4Src');
                var vast = null;
                if (ca.doesExist('vastSrc', true)) {
                    if (!ca.doesExist('vastMp4Src', true)) {
                        ca.setParam('vastMp4Src', '//intellitxt.com/ast/ee318636-be5b-dc11-9c93-005056c00008/vmuk52455/onesecondvideo.mp4');
                        videoSource = ca.getParam('vastMp4Src');
                    }
                    vast = ca.getParam('vastSrc');
                }

                //Setup existing params or fallbacks
                var pw = ca.setToExist('playerW', true, 480);
                var as = ca.setToExist('autoplay', true, true);
                var volume = ca.setToExist('volume', true, '40');
                var mute = ca.setToExist('startMute', true, false);
                //var ffVideo = ca.setToExist('ffVideo',true,true);

                if (Math.floor(parseInt(volume)) > 100) {
                    volume = 100;
                } else if (Math.floor(parseInt(volume)) < 0) {
                    volume = 0;
                } else {
                    volume = Math.floor(parseInt(volume));
                }

                /*
                 ==========  Settings for smaller screens/mobile ================
                */
                var smallerScreen = ($(window).width() < 900 && $(window).width() > 500 && $(window).height() > 600);
                var smallScreen = ($(window).width() < 900 && $(window).width() > 500 && $(window).height() < 600);


                if (smallerScreen) {
                    pw = 480;
                } else if ($(window).width() < 500 || smallScreen) {
                    pw = 300;
                }
                /*
                 ==========  END: Settings for smaller screens/mobile ================
                */

                //setup player Object
                var playerSettings = {
                    'mp4Src': '//images.intellitxt.com/a/105671/20170227-mosaic/assets/BareMinerals-Emelyne-Natural.mp4', //-> mandarory
                    'playerW': pw,
                    //'name':ffVideo,
                    'autostart': as,
                    'mute': mute,
                    'volume': volume,
                    'vast': vast,
                    'controls': true
                };

                var vh = document.getElementById('videoHolder');
                cm.createJWPlayer(playerSettings, vh);
            } else {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .copy--secondary {
      font-size: 14px;
    }
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
      a {
        margin-top: -28px;
      }
    }
    .flex-start img {
      height: 100px;
      position: absolute;
      bottom: 5px;
      right: 20px;
    }
    @media (max-width: 666px) {
      .big--hidden {
        display: block;
        font-family:'PragmaticaW01-Condensed1061365';
        font-size: 20px;
        text-transform:uppercase;
        line-height: 1.1;
        padding-bottom: 12px;
        .green-text {
          font-family:'PragmaticaW01-Condensed1061365';
        }
      }
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
      order: -2;
      width: 190px;
    }
    .box:nth-of-type(5) {
      display: flex;
      order: -2;
    }
    }
</style>
