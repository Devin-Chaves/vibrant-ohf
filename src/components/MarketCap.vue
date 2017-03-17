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
        <div class="copy">
          <span class="big"><span class="green-text">Challenge</span><br>old thinking.</span>
        </div>
        <div class="cta">

        </div>
      </div>

      <div class="box flex-start">
        <div class="copy">
          <span>“When you buy the S&P 500, you’re buying emotion and panic in what the marketplace reflects.”</span>
          <span class="green-text tiny">-Sharon French <br> Head of Beta Solutions</span>
        </div>
        <div class="cta">

        </div>
      </div>
      <div class="box box--wide">
        <div class="copy">
        </div>
        <div class="cta">

        </div>
      </div>
    <div class="box">
      <div class="copy">
        <span>Oppenheimer <br>Revenue Weighted ETFs</span><br><br>
        <span><span class="green-text">RWK</span> | <span class="green-text">RWL</span> | <span class="green-text">ESGL</span> <br> <span class="green-text">RDIV</span> | <span class="green-text">RWJ</span> | <span class="green-text">ESGF</span></span>
      </div>
      <div class="cta">

      </div>
    </div>
    <div class="box">
      <div class="image">
        <span class="tiny image-meta">Sharon French <br>Head of Beta <br> Solutions</span>
        <img src="static/img/sharon_french.jpg" alt="Sharon French">
      </div>
    </div>
    <div class="box">
      <div class="image">
        <span class="big challenge-index"><span class="green-text">challenge</span> <br> the index.</span>
        <img src="static/img/challenge_index.jpg" alt="Level II Tape">
      </div>
      <div class="cta">

      </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    .child {
      color: white;
    .box {
      display: flex;
      align-items: center;
      overflow: hidden;
        }
      }
    .box .copy {
      padding: 20px 20px;
    }
    .flex-start {
      display: flex;
      align-items: flex-start;
    }
    .image {
      position: relative;

      .image-meta {
        left: 10px;
        color: black;
        font-weight: 600;
      }
      span {
        position: absolute;
      }
      .challenge-index {
        padding: 20px 20px;
        top: 50%;
        transform: translateY(-50%);
      }
      img {
        width: 100%;
      }
    }
</style>
