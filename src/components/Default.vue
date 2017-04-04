<template lang="html">
  <div class="default">
    <div class="box-wrapper">

      <div class="box box--primary">
        <div class="copy">
          <span>"Silicon Valley <br> is the future of tech."</span>
          <div class="cta">
            <router-link :to="{name: 'silicon-valley'}"><a class="Button Button--primary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Seniors are<br> a diminishing investment opportunity."</span>
          <div class="cta">
            <router-link :to="{name: 'diminishing-investments'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--primary">
        <div class="copy">
          <span>"Savvy investors respond to <br> every headline."</span>
          <div class="cta">
            <router-link :to="{name: 'savvy-investors'}"><a class="Button Button--primary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Emerging <br>markets aren't <br> ready for <br> prime time."</span>
          <div class="cta">
            <router-link :to="{name: 'emerging-markets'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy" style="padding-left: 18px;">
          <span class="big">Are you up for the <span class="green-text">challenge?</span></span>
          <span class="tiny">Challenge&nbsp;these&nbsp;misconceptions in the market.</span>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Investment opportunities disappear <br> during volatility."</span>
          <div class="cta">
            <router-link :to="{name: 'investment-opportunities'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Market cap <br> is reliable and dispassionate."</span>
          <div class="cta">
            <router-link :to="{name: 'market-cap'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--primary">
        <div class="copy">
          <span>"Developed markets are reliable. Emerging markets are risky."</span>
          <div class="cta">
            <router-link :to="{name: 'developed-markets'}"><a class="Button Button--primary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"The middle <br> class is shrinking globally."</span>
          <div class="cta">
            <router-link :to="{name: 'middle-class'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
 .default {
   .copy {
     font-size: 19px;
     line-height: 1.2;
     .big {
       font-size: 27px;
     }
   }
   .tiny {
     font-size: 12px;
     letter-spacing: .6px;
     font-family:'PragmaticaW01-CondExtra1061383';
   }
 }
 @media (max-width: 666px) {

    .box {
      display: none;
      position: relative;
      .copy {
        position: absolute;
        bottom: 0
      }
    }

   .box:nth-of-type(2) {
     display:block;
     background: white;
     color: black;
     .cta {
       .Button {
         background: black;
         color: #bad61e;
       }
     }
   }
   .box:nth-of-type(4) {
     display: block;
     background: white;
     color: black;
     .cta {
       .Button {
         background: black;
         color: #bad61e;
       }
     }
   }
   .box:nth-of-type(5) {
     order: -3;
     display: block;
   }
   .box:nth-of-type(7) {
     display: block;
   }
 }
</style>
