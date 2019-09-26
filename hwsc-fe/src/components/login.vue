<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 17:19:12
 * @LastEditTime: 2019-09-26 15:04:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div style="font-size: 0.32rem;">
    <header>
      <img src="https://hwid1.vmall.com/CAS/up/idmw_rss_41/css/mobile/images/wap_login_logo.png" />
      <p>华为帐号</p>
    </header>
    <div class="logindiv">
      <input type="text" ref="hwname" placeholder="手机号/邮件地址/华为号" />
      <div>
        <input type="password" ref="hwpw" placeholder="密码" />
        <img
          @touchstart="showpw" @touchend="hidepw"
          src="https://hwid1.vmall.com/CAS/up/idmw_rss_41/css/mobile/images/eyeoff_wap_ui9.png?cas20190804"
        />
      </div>
    </div>
    <div class="mdiv">
      <span class="msgspan" @click="msglogin">短信验证码登录</span>
      <input type="checkbox" />
      <span class="mspan">记住帐号</span>
    </div>
    <div class="ldiv">
      <p class="p1" @click="login">登录</p>
      <p class="p2">注册帐号</p>
      <p class="p3">忘记密码</p>
    </div>
    <div class="divpic">
      <div>
        <img
          src="https://hwid1.vmall.com/CAS/up/idmw_rss_41/css/mobile/images/wap_qq_emui9.png?cas20190804"
        />
        <img
          src="https://hwid1.vmall.com/CAS/up/idmw_rss_41/css/mobile/images/wap_alipay_emui9.png?cas20190804"
        />
      </div>
    </div>
    <p class="more">更多</p>
    <p class="bp">
      继续访问即代表您已同意
      <a href="#">华为商城服务协议</a>和
      <a href="#">华为隐私政策</a>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.$eventBus.$emit("closefooter", {
      //发广播让footer隐藏
      mclose: false
    });
  },
  beforeDestroy: function() {
    //销毁后
    this.$eventBus.$emit("closefooter", {
      //发广播让footer显示
      mclose: true
    });
  },
  methods: {
    msglogin() {
      // console.log('13714723728');
      this.$router.push("msglogin");
    },
    login() {
      console.log("=login=");
      let user = {
        nickname: this.$refs.hwname.value,
        username: this.$refs.hwname.value,
        pw: this.$refs.hwpw.value
      };
      axios.post("/goods/login", user).then(function(s) {
        console.log(s.data);
      });
    },
    showpw(e) {
      e.target.src =
        "https://hwid1.vmall.com/CAS/up/idmw_rss_41/css/mobile/images/eyeon_wap_ui9.png?cas20190804";
      e.target.previousElementSibling.type = "text";
    },
    hidepw(e) {
      e.target.src =
        "https://hwid1.vmall.com/CAS/up/idmw_rss_41/css/mobile/images/eyeoff_wap_ui9.png?cas20190804";
      e.target.previousElementSibling.type = "password";
    }
  }
};
</script>
<style  scoped>
header {
  padding-top: 1rem;
  width: 100%;
}
header img {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 auto;
  text-align: center;
}
header p {
  font-size: 0.5rem;
  text-align: center;
  font-weight: bold;
  margin-top: 0.2rem;
}
.logindiv {
  margin-top: 1rem;
}
.logindiv > input {
  width: 85%;
  height: 0.7rem;
  border: none;
  outline: medium;
  margin: 0 0.5rem;
  border-bottom: 0.02rem solid #ccc;
  font-size: 0.4rem;
}
.logindiv > div {
  padding-top: 0.4rem;
  margin: 0 0.5rem;
  width: 85%;
  border-bottom: 0.02rem solid #ccc;
}
.logindiv > div > input {
  width: 75%;
  height: 0.7rem;
  display: inline-block;
  border: none;
  outline: medium;
  font-size: 0.4rem;
}
.logindiv > div > img {
  width: 0.48rem;
  height: 0.48rem;
  line-height: 0.7rem;
  margin-top: 0.2rem;
  float: right;
}
.mdiv {
  width: 100%;
  height: 0.7rem;
  margin-top: 0.2rem;
  line-height: 0.7rem;
}
.msgspan {
  color: blue;
  display: inline-block;
  margin-left: 0.4rem;
  margin-top: 0.05rem;
}
.mdiv input {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  zoom: 250%;
  margin-left: 2rem;
}
.mspan {
  display: inline-block;
  padding-bottom: 0.1rem;
  vertical-align: top;
}
.mspan:hover {
  cursor: pointer;
}
.ldiv {
  padding-top: 0.2rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.p1 {
  width: 6.54rem;
  border-radius: 0.4rem;
  background: blue;
  height: 0.72rem;
  margin: 0 auto;
  line-height: 0.72rem;
}
.p2,
.p3 {
  width: 6.54rem;
  border-radius: 0.4rem;
  line-height: 0.72rem;
  height: 0.72rem;
  margin: 0 auto;
}
.divpic {
  width: 100%;
  text-align: center;
  margin-top: 0.6rem;
}
.divpic div {
  margin: 0 auto;
  width: 5.2rem;
}
.divpic img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 0.4rem;
}
.more {
  padding-top: 0.4rem;
  width: 100%;
  text-align: center;
}
.bp {
  padding-top: 0.6rem;
  width: 100%;
  font-size: 0.26rem;
  text-align: center;
}
</style>