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
        <a href="http://www.oppenheimerfunds.com/ico/challengetheindex" target="_blank">
          <div class="copy challenge fat-child">
            <span class="big"><span class="green-text">Challenge</span><br>old&nbsp;thinking.</span>
          </div></a>
      </div>

      <div class="box etf flex-start">
        <a href="http://www.oppenheimerfunds.com/advisors/article/the-smarter-way-toweight-theindex" target="_blank">
          <div class="copy copy--secondary">
            <span>“When you buy the S&P 500, you’re buying emotion and panic in what the marketplace reflects.”</span><br>
            <span class="green-text tiny">-Sharon French <br> Head of Beta Solutions</span>
            <img src="static/img/wisdom_man.png" alt="Wise Little Guy">
          </div></a>
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
      <a href="http://www.oppenheimerfunds.com/advisors/etfs" target="_blank">
        <div class="copy">
          <span>Oppenheimer <br>Revenue&nbsp;Weighted&nbsp;ETFs</span> <br>
          <span class="instruments"><span class="green-text">RWK</span> | <span class="green-text">RWL</span> | <span class="green-text">ESGL</span> <br> <span class="green-text">RDIV</span> | <span class="green-text">RWJ</span> | <span class="green-text">ESGF</span></span>
        </div></a>
        <div class="disclosure" id="disclosure">
          <span>
            <span class="large">Carefully consider fund investment objectives, risks, charges and expenses. Visit oppenheimerfunds.com or
              call your advisor for a prospectus with this and other fund information. Read it carefully before investing
            </span> <br>
            <span class="small">
              Foreign investments may be volatile and involve additional expenses and special risks including currency fluctuations, foreign taxes
              and political and economic uncertainties. Emerging and developing market investments may be especially volatile.
              <strong>Class Y shares are not available to all investors. Please consult your financial advisor to determine if you are eligible to purchase.</strong>
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
      <a href="http://www.oppenheimerfunds.com/advisors/etfs" target="_blank"><div class="image sharon">
          <span class="image-meta"><span class="name">Sharon&nbsp;French</span> <br><span class="tiny">Head&nbsp;of&nbsp;Beta <br> Solutions</span></span>
          <img src="static/img/sharon_french.jpg" alt="Sharon French">
        </div></a>
    </div>
    <div class="box">
      <a href="http://www.oppenheimerfunds.com/ico/challengetheindex" target="_blank"><div class="image challenge">
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
</style>
