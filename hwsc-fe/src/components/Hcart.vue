<!--
 * @Description: In User Settings 
 * @Author: your name
 * @Date: 2019-09-23 22:14:38
 * @LastEditTime: 2019-09-28 17:52:06
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div class="mheader">
      <p>购物车</p>
    </div>
    <!-- 去购物 -->
    <!-- <toshop style=" margin-top: 0.81rem;"></toshop> -->
    <div style=" margin-top: 0.81rem;">
      <div class="mcontent">
        <i class="cart iconfont icon-gouwuche"></i>
        <p>您的购物车没有商品</p>
        <div class="toshop">
          <button @click="tohome">去购物</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    tohome() {
      this.$router.push("/");
    }
  }
};
</script>
<style  scoped>
.mheader {
  position: fixed;
  top: 0;
  z-index: 999;
  background: white;
  width: 7.5rem;
  height: 0.81rem;
  text-align: center;
  line-height: 0.81rem;
}
.mheader p {
  /* background: white; */
  width: 100%;
  height: 0.81rem;
  font-size: 0.36rem;
}

.cart {
  display: block;
  width: 2.08rem;
  height: 2.08rem;
  margin: 0 auto;
  font-size: 2.08rem;
  color: #dddddd;
  content: "";
}
.mcontent {
  text-align: center;
  padding: 0.66rem 0 0.32rem 0;
}
.mcontent > p {
  font-size: 0.28rem;
  margin-top: 0.4rem;
}
.toshop {
  border-radius: 0.5rem;
  width: 100%;
  height: 0.7rem;
  font-size: 0.28rem;
  margin-top: 0.2rem;
}
.toshop button {
  background: transparent;
  border-radius: 0.5rem;
  width: 2rem;
  height: 0.7rem;
  font-size: 0.28rem;
  margin: 0 auto;
  border: 0.02rem solid #ccc;
}
</style>