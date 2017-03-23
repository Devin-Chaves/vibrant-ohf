<template lang="html">
  <div class="default">
    <div class="box-wrapper">

      <div class="box box--primary">
        <div class="copy">
          <span>"Silicon Valley <br> is the future of tech."</span>
          <div class="cta">
            <router-link :to="{name: 'market-cap'}"><a class="Button Button--primary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Seniors are<br> a diminishing investment opportunity."</span>
          <div class="cta">
            <router-link :to="{name: 'savvy-investors'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--primary">
        <div class="copy">
          <span>"Savvy investors respond to <br> every headline."</span>
          <div class="cta">
            <router-link :to="{name: 'investment-opportunities'}"><a class="Button Button--primary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Emerging <br>Markets aren't <br> ready for <br> prime time."</span>
          <div class="cta">
            <router-link :to="{name: 'diminishing-investments'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy" style="align-self: end; margin-top: 8px;">
          <span class="big">Are you up for the <span class="green-text">challenge?</span></span>
          <span class="tiny" style="padding-bottom: 2rem;">Challenge these misconceptions in the market</span>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Investment opportunities disappear <br> during volatility"</span>
          <div class="cta">
            <router-link :to="{name: 'middle-class'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
          </div>
        </div>
      </div>
      <div class="box box--secondary">
        <div class="copy">
          <span>"Market cap <br> is reliable and dispassionate"</span>
          <div class="cta">
            <router-link :to="{name: 'emerging-markets'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
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
            <router-link :to="{name: 'silicon-valley'}"><a class="Button Button--secondary">CHALLENGE</a></router-link>
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
     .big {
       font-size: 22px;
     }
   }
 }
</style>
