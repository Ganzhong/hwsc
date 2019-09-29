<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-27 09:10:54
 * @LastEditTime: 2019-09-29 08:33:03
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div style="font-size:0.32rem;background: #F7F7F7;overflow-x: hidden;height: 270%;
">
    <div class="mh0">
      <div :style="{'visibility':mh0show?'visible':'hidden'}">
        <img
          src="https://res.vmallres.com/nwap/20190730/staticm/img/personal/defaultface_user_after.png"
        />
        <span>登录/注册</span>
      </div>
      <p>
        <span class="p1 iconfont icon-shezhi"></span>
        <span class="p2 iconfont icon-xinxi"></span>
      </p>
    </div>
    <div class="mh">
      <img
        class="img1"
        src="https://res.vmallres.com/nwap/20190730/staticm/img/personal/defaultface_user_after.png"
      />
      <div class="mh2">
        <p class="pname">+86 137****28</p>
        <p class="pqiandao">
          <i class="iconfont icon-changyongicon-"></i>
          <span>签到领积分</span>
        </p>
      </div>
      <p class="pimg2">
        <img
          class="img2"
          src="https://res.vmallres.com/pimages//pages/adsImages/oqypn1fumnZ2OBsZh8EY.png"
        />
      </p>
    </div>
    <div class="msection">
      <ul>
        <li>
          <span>0</span>
          <span>积分</span>
        </li>
        <li>
          <span>0</span>
          <span>优惠劵</span>
        </li>
        <li>
          <span>0</span>
          <span>代金劵</span>
        </li>
      </ul>
    </div>
    <div class="myorder clearfix">
      <div>
        <span class="span1">我的订单</span>
        <span class="span2">全部订单 &gt;</span>
      </div>
      <ul class="orderul">
        <li>
          <span>
            <i class="iconfont icon-daifukuan"></i>
          </span>
          <span>待付款</span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-daifukuan"></i>
          </span>
          <span>待收货</span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-daipingjia"></i>
          </span>
          <span>待评价</span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-daituikuan"></i>
          </span>

          <span style="font-size: 0.3rem;">退换/退款</span>
        </li>
        <li>
          <span>
            <i class="iconfont icon-shouhuohuishou"></i>
          </span>
          <span>待付款</span>
        </li>
      </ul>
    </div>
    <div class="lbdiv clearfix">
      <p>{{msg[index].s}}</p>
    </div>
    <div class="lbimg swiper-container">
      <div class="udiv swiper-wrapper">
        <div class="lidiv swiper-slide">
          <img src="https://res.vmallres.com/pimages//pages/picImages/BnM8TY3yBakRmutiebSU.jpg" />
        </div>
        <div class="lidiv swiper-slide">
          <img src="https://res.vmallres.com/pimages//pages/picImages/g4infEKh8znVbfvfcwFt.jpg" />
        </div>
      </div>
    </div>

    <div class="myhuiyuan">
      <div>
        <span class="span1">会员专享</span>
        <span class="span2">更多会员权益 &gt;</span>
      </div>
      <ul class="huiyuanul">
        <li>
          <div>
            <p
              style="color: red;font-size: 0.5rem;font-weight: bold;margin: 0.3rem 0 0.1rem 0.2rem;"
            >￥50</p>
            <span>【会员】华为nova5i Pro50元优惠券</span>
          </div>
          <p class="rp">
            <span>领取</span>
          </p>
        </li>
        <li>
          <div>
            <p
              style="color: red;font-size: 0.5rem;font-weight: bold;margin: 0.3rem 0 0.1rem 0.2rem;"
            >￥200</p>
            <span>【礼券】荣耀10青春版200元优惠券</span>
          </div>
          <p class="rp">
            <span>领取</span>
          </p>
        </li>
        <li>
          <div>
            <p
              style="color: red;font-size: 0.5rem;font-weight: bold;margin: 0.3rem 0 0.1rem 0.2rem;"
            >￥200</p>
            <span>【会员】华为nova5i Pro200元优惠券</span>
          </div>
          <p class="rp">
            <span>领取</span>
          </p>
        </li>
        <li>
          <div>
            <p
              style="color: red;font-size: 0.5rem;font-weight: bold;margin: 0.3rem 0 0.1rem 0.2rem;"
            >￥20</p>
            <span>【会员】华为nova5i Pro50元优惠券</span>
          </div>
          <p class="rp">
            <span>领取</span>
          </p>
        </li>
      </ul>
    </div>

    <div class="myvmal clearfix">
      <div>
        <span class="span1">我的VMAL</span>
      </div>
      <ul class="vmalul">
        <li>
          <span>
            <i class="iconfont icon-huiyuanguanli" style=" color: #FE9C68;"></i>
          </span>
          <span>会员频道</span>
        </li>
        <li>
          <span>
            <i style="color:#F8928C;" class="iconfont icon-changyongicon-"></i>
          </span>
          <span>邀请有礼</span>
        </li>
        <li>
          <span>
            <i style="color:FE9C68;" class="iconfont icon-daifukuan"></i>
          </span>
          <span>优享购</span>
        </li>

        <li>
          <span>
            <i style="color:#60D0C9;" class="iconfont icon-shouhuohuishou"></i>
          </span>
          <span>优购码</span>
        </li>
      </ul>
      <ul class="vmalul">
        <li>
          <span>
            <i style="color:#F77971" class="iconfont icon-daifukuan"></i>
          </span>
          <span>我的拼团</span>
        </li>
        <li>
          <span>
            <i style="color:#D5EBFF;" class="iconfont icon-shouhuodizhi1" ></i>
          </span>
          <span>收货地址</span>
        </li>
        <li>
          <span>
            <i style="color:#D5EBFF;" class="iconfont icon-daipingjia"></i>
          </span>
          <span>实名认证</span>
        </li>

        <li>
          <span>
            <i style="color:#D5EBFF;"class="iconfont icon-xinxi"></i>
          </span>
          <span>预约记录</span>
        </li>
      </ul>
    </div>

    <div class="myvmal clearfix">
      <div>
        <span class="span1">我的服务</span>
        <span class="span2">服务中心 &gt;</span>
      </div>
      <ul class="vmalul">
        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-shouhuohuishou-copy"></i>
          </span>
          <span>以旧换新</span>
        </li>
        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-iconfontzhizuobiaozhun023109"></i>
          </span>
          <span>线下门店</span>
        </li>
        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-daipingjia"></i>
          </span>
          <span>补购保障</span>
        </li>

        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-iconfont-zhutizuizhong_huaban"></i>
          </span>
          <span>手机充值</span>
        </li>
      </ul>
      <ul class="vmalul">
        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-icon_kefu"></i>
          </span>
          <span>在线客服</span>
        </li>
        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-wenti-m"></i>
          </span>
          <span>常见问题</span>
        </li>
        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-shandian1"></i>
          </span>
          <span style="font-size: 0.28rem;">一口价换电池</span>
        </li>

        <li>
          <span>
            <i style="color: #989898;" class="iconfont icon-toubaoshengming"></i>
          </span>
          <span>意见反馈</span>
        </li>
      </ul>
    </div>

    <div class="hw">
      <div>
        <span class="span1">华为生活</span>
      </div>
      <ul class="hwul">
        <li>
          <img src="https://res.vmallres.com/pimages//sale/2019-01/vbWjbV8qDpMZAEfVG6Rr.png" />
        </li>
        <li>
          <img src="https://res.vmallres.com/pimages//sale/2019-01/SsPo08I0eVbYcxkbU6tP.png" />
        </li>
        <li>
          <img src="https://res.vmallres.com/pimages//sale/2019-01/P4QEfc9ja3ryXeUhWskN.png" />
        </li>
      </ul>
    </div>
    <p class="wntj">为您推荐</p>

    <div class="endul">
      <ul>
        <li>
          <img src="https://res.vmallres.com/pimages/pages/dynamicMsg/GNKWIPCG0c3KLjbaqkY8.jpg" />
        </li>
        <li>
          <img src="https://res.vmallres.com/pimages/pages/dynamicMsg/tHDZ1sYKjadPVRF0WLnJ.jpg" />
        </li>
        <li>
          <img src="https://res.vmallres.com/pimages/pages/dynamicMsg/hkYjvNO1ykDulDBndCCu.jpg" />
        </li>
      </ul>
    </div>

    <fankui></fankui>
  </div>
</template>
<script>
import fankui from "../components/fankui";
export default {
  data() {
    return {
      mh0show: false,
      show: true,
      index: 0,
      msg: [{ s: "这是一条广告" }, { s: "你有一条新的消息" }]
    };
  },
  mounted() {
    setInterval(() => {
      this.index++;
      if (this.index == this.msg.length) {
        this.index = 0;
      }
    }, 2000);

    var mySwiper = new Swiper(".swiper-container", {
      autoplay: 1, //自动滚动
      loop: true, //循环
      speed: 1800, //滚动速度
      slidesPerView: 1, //slide可见数量
      spaceBetween: 0 //slide之间的距离（单位px）
    });

    window.addEventListener("scroll", this.getScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScroll);
  },
  methods: {
    //监听滚动
    getScroll() {
      // this.indexNumTop = $("#index_num").offset().top;
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop >= 300
      ) {
        // 设置滚动大于300时的执行内容
        console.log("大于300时的执行内容");
        this.mh0show = true;
      } else {
        this.mh0show = false;
      }
    }
  },

  components: {
    fankui
  }
};
</script>
<style  scoped>
       .swiper-container{
            width: 7.12rem;
            height: 1.8rem;
            border: solid 1px black;
        }
.mh0 {
  width: 100%;
  height: 1rem;
  background: #e22d2f;
  position: fixed;
  top: 0rem;
  left: 0rem;
  z-index: 99;
}
.mh0 div {
  display: inline-block;
  width: 50%;
}
.mh0 div img {
  width: 0.64rem;
  height: 0.64rem;
  vertical-align: middle;
  padding: 0.1rem;
}
.mh0 div span {
  color: white;
}

.mh0 > p {
  text-align: right;
  display: inline-block;
  width: 50%;
}
.mh0 > p .p1 {
  display: inline-block;
  font-size: 0.4rem;
  margin: 0.2rem 0.1rem;
  color: white;
  box-sizing: border-box;
}
.mh0 > p .p2 {
  display: inline-block;
  font-size: 0.4rem;
  margin: 0.2rem 0.2rem;
  color: white;
  box-sizing: border-box;
}
.mh {
  width: 100%;
  height: 2.6rem;
  margin-top: 0.84rem;
  background: #e22d2f;
  border-radius: 0 0 0.5rem 0.5rem;
}
.img1 {
  width: 1.3rem;
  height: 1.3rem;
  margin: 0.25rem;
  box-sizing: border-box;
}
.mh2 {
  padding: 0.45rem 0rem;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
}
.pname {
  width: 2.95rem;
  height: 0.52rem;
  line-height: 0.52rem;
}
.pqiandao {
  width: 2.95rem;
  height: 0.4rem;
}
.pqiandao i {
  font-size: 0.4rem;
  color: yellow;
}
.pimg2 {
  width: 36%;
  display: inline-block;
  vertical-align: top;
  padding-top: 0.7rem;
  text-align: right;
}
.img2 {
  width: 1.9rem;
  height: 0.66rem;
}
.msection {
  width: 7.12rem;
  height: 1.4rem;
  background: white;
  border-radius: 0.4rem;
  position: absolute;
  top: 3rem;
  left: 0.2rem;
}

.msection ul li {
  display: inline-block;
  text-align: center;
  line-height: 0.6rem;
  width: 33%;
}
.msection ul li span {
  display: block;
}

.myorder {
  position: relative;
  top: 1rem;
  left: 0.2rem;
  margin-top: 0.2rem;
  height: 2rem;
  background: white;
  width: 7.12rem;
  border-radius: 0.2rem;
}
.myorder > div {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
}
.myorder > div .span1 {
  width: 50%;
  padding-left: 0.2rem;
  box-sizing: border-box;
  display: inline-block;
}
.myorder > div .span2 {
  display: inline-block;
  text-align: right;
  padding-right: 0.2rem;
  box-sizing: border-box;
  width: 50%;
}
.orderul {
  margin-top: 0.2rem;
  text-align: center;
}
.orderul li {
  width: 20%;
  display: inline-block;
}
.orderul li i {
  font-size: 0.5rem;
}
.orderul li span {
  display: block;
}
.lbdiv {
  width: 100%;
  height: 0.66rem;
  padding-top: 1rem;
  box-sizing: border-box;
  margin: 0.1rem 0.8rem;
}
.lbimg {
  margin-top: 0.42rem;
  /* height: 1.86rem; */
  /* width: 7.12rem; */
  /* padding: 0 0.2rem; */
  /* box-sizing: border-box; */
}
/* .lbimg .udiv {
  width: 7.12rem;
  overflow-x: auto;
  border-radius: 0.2rem;
  white-space: nowrap;
} */
/* .lbimg .udiv .lidiv {
  display: inline-block;
  height: 1.86rem;
  width: 7.12rem;
}  */

.myhuiyuan {
  background: #ffffff;
  width: 7.12rem;
  border-radius: 0.2rem;
  margin: 0.4rem 0.2rem;
}
.myhuiyuan > div {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
}
.myhuiyuan > div .span1 {
  width: 50%;
  padding-left: 0.2rem;
  box-sizing: border-box;
  display: inline-block;
}
.myhuiyuan > div .span2 {
  display: inline-block;
  text-align: right;
  padding-right: 0.2rem;
  box-sizing: border-box;
  width: 50%;
}
.huiyuanul {
  white-space: nowrap;
  overflow-x: auto;
  width: auto;
}
.huiyuanul li {
  display: inline-block;
  overflow: hidden;
  margin: 0 0.1rem;
}
.huiyuanul li div {
  display: inline-block;
  background: white;
  width: 2.4rem;
  height: 2.2rem;
}
.huiyuanul span {
  width: 2.4rem;
  display: inline-block;
  white-space: pre-wrap;
  font-size: 0.26rem;
  margin: 0.05rem;
}
.rp {
  display: inline-block;
  width: 0.7rem;
  height: 2.2rem;
  border-radius: 0.1rem;
  background: red;
  line-height: 2.2rem;
  color: white;
  border-left: dotted 0.1rem red;
  background-clip: padding-box;
  vertical-align: top;
  margin-left: 0.1rem;
}

.myvmal {
  margin: 0.2rem;
  /* height: 2rem; */
  background: white;
  width: 7.12rem;
  border-radius: 0.2rem;
 
}
.myvmal > div {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
}
.myvmal > div .span1 {
  width: 50%;
  padding-left: 0.2rem;
  box-sizing: border-box;
  display: inline-block;
}
.myvmal > div .span2 {
  display: inline-block;
  text-align: right;
  padding-right: 0.2rem;
  box-sizing: border-box;
  width: 50%;
}

.vmalul {
  margin-top: 0.2rem;
  text-align: center;
}

.vmalul li {
  width: 25%;
  display: inline-block;
}
.vmalul li i {
  font-size: 0.5rem;
}
.vmalul li span {
  display: block;
}

.hw > div .span1 {
  width: 50%;
  padding-left: 0.2rem;
  box-sizing: border-box;
  display: inline-block;
}
.hwul {
  white-space: nowrap;
  overflow-x: auto;
  width: auto;
}
.hwul li {
  display: inline-block;
  overflow: hidden;
  margin: 0 0.1rem;
}
.hwul li img {
  width: 3rem;
  height: 1.8rem;
}
.wntj {
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  font-weight: bold;
  margin: 0.3rem 0;
}

.endul ul {
  border-radius: 0.3rem;
  width: 7.12rem;
  height: auto;
}
.endul li {
  list-style: none;
  margin: 0.5rem 0.15rem;
  width: 7.12rem;
  height: 1.8rem;
}
</style>