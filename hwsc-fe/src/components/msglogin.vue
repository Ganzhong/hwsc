<!--
 * @Description: In User Settings Editd
 * @Author: your name
 * @Date: 2019-09-25 20:20:29
 * @LastEditTime: 2019-09-28 17:47:37
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div style="font-size: 0.32rem;">
    <div class="mh">短信验证码登录</div>
    <div class="logindiv">
      <div style="border:none; margin-bottom: 0.4rem;">
        <input style="background: white;" type="text" disabled="disabled" placeholder="国家/地区" />
        <span style="color: black;">中国 +86 &gt;</span>
      </div>
      <input type="text" ref="hwname" placeholder="手机号" />
      <div>
        <input type="text" ref="hwmsg" placeholder="短信验证码" />
        <span @click="send">{{msg}}</span>
      </div>
    </div>
    <div class="mdiv">
      <span class="msgspan" @click="mimalogin">密码登录</span>
      <input type="checkbox" />
      <span class="mspan">记住帐号</span>
    </div>
    <div class="ldiv">
      <p class="p1" @click="login">登录</p>
    </div>
    <p class="bp">
      继续访问即代表您已同意
      <a href="#">华为商城服务协议</a>和
      <a href="#">华为隐私政策</a>
    </p>
  </div>
</template>
<script>
import axios from "axios";
import {Toast} from '../toast';
export default {
  data() {
    return {
      msg: "获取短信"
    };
  },
  mounted() {
    this.$eventBus.$emit("closefooter", {
      //发送广播让footer隐藏
      mclose: false
    });
  },
  beforeDestroy: function() {
    //销毁后
    this.$eventBus.$emit("closefooter", {
      //发送广播让footer显示
      mclose: true
    });
  },
  methods: {
    mimalogin() {
      this.$router.push("login");
    },
    send(e) {
      e.target.style.color = '#ccc'; //点击后设置颜色
      let code = Math.floor(Math.random() * 9000) + 1000;
      let user = {
        nickname: this.$refs.hwname.value,
        username: this.$refs.hwname.value,
        pw: code + ""
      };
      axios.post("/goods/registe", user).then(function(s) {
        console.log(user);
        console.log(s.data);
      });
      var i = 10;
      var timer = setInterval(() => {
        i--;
        this.msg = `重新获取 (${i})`;
        if (i <= 0) {
          clearInterval(timer);
          this.msg = `  重新获取`;
          e.target.style.color = 'blue'; //设置颜色复原
        }
      }, 1000);
    },
    login() {
      const _this = this;
      let user = {
        nickname: this.$refs.hwname.value,
        username: this.$refs.hwname.value,
        pw: this.$refs.hwmsg.value
      };
      axios.post("/goods/login", user).then(function(s) {
        console.log(s.data);
             if (s.data.msg =="登录失败") {
          Toast('登录失败...',1500);
        }
        if (s.data.msg =="登录成功") {
          Toast('登录成功...',1500);
          _this.$router.push('cart')
        }
      });
    }
  }
};
</script>
<style  scoped>
.mh {
  font-size: 0.4rem;
  padding: 0.2rem 0.4rem;
}
.logindiv {
  /* margin-top: 1rem; */
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
  width: 70%;
  height: 0.7rem;
  display: inline-block;
  border: none;
  outline: medium;
  font-size: 0.4rem;
}
.logindiv > div > span {
  font-size: 0.28rem;
  width: 1.9rem;
  color: blue;
  height: 0.48rem;
  line-height: 0.7rem;
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
  margin-left: 3rem;
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
.bp {
  padding-top: 0.6rem;
  width: 100%;
  font-size: 0.26rem;
  text-align: center;
  margin-top: 5rem;
}
</style>