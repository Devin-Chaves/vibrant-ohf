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
        <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
          <div class="copy challenge fat-child">
            <span class="big"><span class="green-text">Challenge</span><br>stereotypes.</span>
          </div></a>
      </div>

      <div class="box etf flex-start">
        <a href="https://ad.doubleclick.net/ddm/clk/320829617;149536111;e" target="_blank">
          <div class="copy">
            <span class="quote">“Ignore the short-term noise, because <br> when you invest for <br> the long-term, you <br> see it through.” </span><br>
            <span class="green-text tiny">-George Evans <br> CIO of Equities</span>
          </div></a>
      </div>
      <div class="box box--wide box--video">
        <div class="videoholder2" id="videoHolder">
        </div>
        <!-- <video id="myVideo" @click="playOrPause" src="static/videos/growth-retail.mp4" poster="static/img/growth_poster.png">
          <div class="play-button"></div>
        </video> -->
        <div class="cta">

        </div>
      </div>
      <div class="box etf">
        <a href="https://ad.doubleclick.net/ddm/clk/320520042;149536111;k">
          <div class="copy">
            <span class="big big--hidden"><span class="green-text">challenge</span> <br>stereotypes.</span>
            <span>Oppenheimer International&nbsp;Growth&nbsp;Fund <br> <span class="green-text">(OIGYX)</span></span><br>
            <img class="stars" src="static/img/stars.png" alt="Stars">
            <span class="morningstar">Class Y shares rated 4 stars overall by Morningstar among 312 funds in the Foreign Large Growth category for the 3-, 5- and 10-Year periods ended 12/31/16 based on risk-adjusted performance.</span>
          </div>
        </a>
        <div class="disclosure" id="disclosure">
          <span>
            <span class="large">Carefully consider fund investment objectives, risks, charges and expenses. Visit oppenheimerfunds.com or
  call your advisor for a prospectus with this and other fund information. Read it carefully before investing
            </span> <br>
            <span class="small">
              Foreign investments may be volatile and involve additional expenses and special risks including currency fluctuations, foreign taxes
              and political and economic uncertainties. Emerging and developing market investments may be especially volatile. <br> <br>
              <strong>Class Y shares are not available to all investors. Please consult your financial advisor to determine if you are eligible to purchase.</strong> <br> <br>
              The Morningstar Rating™ for funds, or "star rating", is calculated for managed products (including mutual funds, variable annuity and
              variable life subaccounts, exchange-traded funds, closed-end funds, and separate accounts) with at least a three year history.
              Exchange-traded funds and open-ended mutual funds are considered a single population for comparative purposes. It is calculated
              based on a Morningstar Risk-Adjusted Return measure that accounts for variation in a managed product's monthly excess
              performance, placing more emphasis on downward variations and rewarding consistent performance. The top 10% of products in
              each product category receive 5 stars, the next 22.5% receive 4 stars, the next 35% receive 3 stars, the next 22.5% receive 2 stars,
              and the bottom 10% receive 1 star.
              <strong>The Overall Morningstar Rating for a managed product is derived from a weighted average of
              the performance figures associated with its three-, five-, and 10-year (if applicable) Morningstar Rating metrics.</strong>
              The weights are:
              100% three-year rating for 36-59 months of total returns, 60% five-year rating/40% three-year rating for 60-119 months of total
              returns, and 50% 10-year rating/30% five-year rating/20% three-year rating for 120 or more months of total returns. While the 10-
              year overall star rating formula seems to give the most weight to the 10-year period, the most recent three-year period actually has
              the greatest impact because it is included in all three rating periods. Oppenheimer International Growth Class Y shares was rated
              against the following numbers of Foreign Large Growth funds over the following time periods: 312 funds in the last three years, 260
              funds in the last five years, and 182 funds in the last ten years. Morningstar Rating is for the Y share class only; other classes may
              have different performance characteristics. <strong>Past performance does not guarantee future results.</strong>
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
      <a href="https://ad.doubleclick.net/ddm/clk/320829617;149536111;e" target="_blank">
        <div class="image george">
          <span class="tiny image-meta"><span class="name">George&nbsp;Evans</span> <br> CIO of Equities</span>
          <img src="static/img/george_evans.jpg" alt="George Evans">
        </div>
      </a>
    </div>
    <div class="box">
      <a href="https://ad.doubleclick.net/ddm/clk/320520044;149536111;m" target="_blank">
        <div class="image challenge">
          <span class="big challenge-index"><span class="green-text">challenge</span> <br> the index.</span>
          <img src="static/img/challenge_index.jpg" alt="Level II Tape">
        </div>
      </a>
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
  @media (max-width: 666px) {

    .big--hidden {
      display: block;
      font-family:'PragmaticaW01-Condensed1061365';
      font-size: 18px;
      text-transform:uppercase;
      line-height: .9;
      padding-bottom: 5px;
      .green-text {
        font-family:'PragmaticaW01-Condensed1061365';
      }
    }
    .copy {
      font-size: 12px;
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
