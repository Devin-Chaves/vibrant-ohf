<template lang="html">
  <div class="developed-markets child">
    <div class="box-wrapper">

      <div class="box box--wide">
        <div class="copy">
          <div class="big">Reality:</div>
          <div>From São Paulo in Brazil to <br> Kenya’s Silicon Savannah, <br> countries are developing their <br> own tech hubs (with hundreds <br> of millions in VC, to boot).</div>
        </div>
      </div>
      <div class="box">
        <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
          <div class="copy challenge fat-child">
            <span class="big"><span class="green-text">Challenge</span><br>expectations.</span>
          </div></a>
      </div>

      <div class="box etf flex-start">
        <a href="https://ad.doubleclick.net/ddm/clk/320829616;149536111;d" target="_blank"><div class="copy">
            <span class="quote">“Countries that have <br> less wealth, have greater aspirations."</span><br>
            <span class="green-text tiny">-Hemant Baijal <br> Co-Head, Global Debt Team</span>
          </div></a>
      </div>
      <div class="box box--wide box--video">
        <div class="videoholder3" id="videoHolder">
        </div>
        <video id="myVideo" @click="playOrPause" src="static/videos/bond-retail.mp4" poster="static/img/bond_poster.jpg">
          <div class="play-button"></div>
        </video>
        <div class="cta">

        </div>
      </div>
    <div class="box etf">
      <a href="https://ad.doubleclick.net/ddm/clk/320520043;149536111;l" target="_blank">
        <div class="copy">
          <span>Oppenheimer International&nbsp;Bond&nbsp;Fund <br> <span class="green-text">(OIBYX)</span></span><br>
          <span class="green-text">
            <div class="star"></div>
          </span>
          <span class="exciting">Invest in countries with surprising opportunities.</span>
        </div>
      </a>
      <div class="disclosure" id="disclosure">
        <span>
          <span class="large">Carefully consider fund investment objectives, risks, charges and expenses. Visit oppenheimerfunds.com or call your advisor
            for a prospectus with this and other fund information. Read it carefully before investing.
          </span> <br>
          <span class="small">
            Fixed income investing entails credit and interest rate risks. When interest rates rise, bond prices generally fall, and the Fund's share prices can fall.
            Foreign investments may be volatile and involve additional expenses and special risks, including currency fluctuations, foreign taxes, regulatory and
            geopolitical risks. Emerging and developing market investments may be especially volatile. Small and mid-sized company stock is typically more
            volatile than that of larger company stock. It may take a substantial period of time to realize a gain on an investment if any gain is realized at all. <br><br>
            <strong>Class Y shares are not available to all investors. Please consult your financial advisor to determine if you are eligible to purchase.</strong>
            <br><br>©2017 OppenheimerFunds Distributor, Inc.
          </span>
        </span>
      </div>
      <div id="disclosure-buttons" class="disclosure-buttons">
        <div class="close" id="close" @click="closeDisclosure">
          <img src="static/img/close.png" alt="Close">
        </div>
        <div class="updown">
          <img src="static/img/up.png" alt="Scroll" @click="scrollUp">
          <img src="static/img/down.png" alt="Scroll" @click="scrollDown">
        </div>
      </div>
        <span class="disclosure-open" id="disclosure-open" @click="displayDisclosure">
          Disclosure >
        </span>
    </div>
    <div class="box">
    <a href="https://ad.doubleclick.net/ddm/clk/320829616;149536111;d" target="_blank">
      <div class="image hemant">
        <span class="tiny image-meta"><span class="name">Hemant&nbsp;Baijal</span> <br> Co-Head, <br> Global Debt Team</span>
        <img src="static/img/hemant_baijal.jpg" alt="George Evans">
      </div></a>
    </div>
    <div class="box">
      <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank"><div class="image challenge">
          <span class="big challenge-index"><span class="green-text">challenge</span> <br> the index.</span>
          <img src="static/img/challenge_index.jpg" alt="Level II Tape">
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
      },
      scrollUp() {
        $('#disclosure').animate({
          scrollTop: "-=40px"
        });
      },
  		scrollDown() {
        $('#disclosure').animate({
          scrollTop: "+=40px"
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hemant {
    background: #f3f3f3;
    img {
      margin-left: 10px;
      margin-top: 10px;
    }
    .image-meta {
      font-size: 10px;
      top: 15%;
      left: 10px;
      .name {
        line-height: .1;
      }
    }
  }
  .exciting {
    display: inline-block;
    font-size: 13px;
  }
  .fat-child {
    padding-left: 15px
  }
  .quote {
    font-family: 'PragmaticaW01-CondLight';
    font-size: 17px;
  }
  .etf {
    span {
      font-family: 'PragmaticaW01-CondLight'
    }
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
