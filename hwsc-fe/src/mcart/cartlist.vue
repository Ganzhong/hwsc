<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:01:11
 * @LastEditTime: 2019-09-28 20:17:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div>
      <div class="mheader clearfix">
        <p>购物车</p>
      </div>

      <div class="cartlist">
        <ul class="ul_list">
          <li class="clearfix" v-for="(mli,index) of list ">
            <input type="checkbox" v-model="datalist" :value="mli" />
            <img :src="mli.picUrl" />
            <div class="mid_div">
              <p>{{mli.desc}}</p>
              <div class="innerdiv">
                <span style="color:red">￥{{mli.price}}</span>
                <span style="text-decoration: line-through;  margin-left: 0.1rem;">￥{{mli.price}}</span>
                <div>
                  <button class="b1" @click="unadd(index)">-</button>
                  <span>{{mli.count}}</span>
                  <button class="b2" @click="add(index)">+</button>
                </div>
              </div>
            </div>
            <div style="float:left;font-size: 0.26rem; margin: 0.2rem 0 0 0.5rem;">
              <span>服务</span>
              <span style="margin-left: 0.5rem;">选购</span>
              <span style="border: 0.05rem solid #ccc;margin-left: 0.1rem;">无忧服务</span>
              <span style="border: 0.05rem solid #ccc;margin-left: 0.1rem;">碎屏宝</span>
              <span style="border: 0.05rem solid #ccc;margin-left: 0.1rem;">延长宝</span>
              <span style="margin-left: 0.1rem;">去选购</span>
              <span style="margin-left: 0.1rem;">...</span>
            </div>
            <div style="float:left;font-size: 0.26rem; margin: 0.1rem 0 0 0.5rem;">
              <span>配</span>
              <img
                style="margin: 0 0.1rem 0 0.8rem; width:0.36rem;height:0.36rem;"
                src="https://res.vmallres.com/pimages/product/6901443076529/428_428_1539762879083mp.png"
              />
              <span>华为小天鹅蓝牙免提音箱 ...</span>
              <span style="margin-left: 1rem;">x 1</span>
            </div>
            <div style="float:left;width: 100%;float: left;margin-top: 0.3rem; ">
              <p style="text-align: center;font-weight: bold;font-size: 0.5rem;">优惠搭配</p>
              <ul class="mul2" @click="mshow">
                <li>
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443277049/142_142_1552376324950mp.png"
                  />
                  <span class="sheng">省40</span>
                  <span>+</span>
                </li>
                <li>
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443174256/142_142_1542854411097mp.png"
                  />
                  <span class="sheng">省40</span>
                  <span>+</span>
                </li>
                <li>
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443252435/142_142_1552894370725mp.jpg"
                  />
                  <span class="sheng">省12</span>
                  <span>+</span>
                </li>
                <li>
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443288250/142_142_1556098192033mp.png"
                  />
                  <span class="sheng">省36</span>
                  <span>+</span>
                </li>
                <li>
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443172221/142_142_1542856308170mp.png"
                  />
                  <span class="sheng">省20</span>
                  <span>+</span>
                </li>
                <li>
                  <img
                    src="https://res.vmallres.com/pimages/product/6901443275465/142_142_1546411816762mp.png"
                  />
                  <span class="sheng">省10</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <footer>
          <input type="checkbox" @click="checkall($event)" :checked="all" style="float: left;" />
          <span style="float: left;">全选</span>
          <button @click="topay">结算</button>
          <span style="color:red;display: inline-block;float: right; width: 1.3rem;">￥{{allcost}}</span>
          <span style="display: inline-block;float: right;">总计:</span>
        </footer>
      </div>
    </div>
    <showdiv v-show="showdiv"></showdiv>
  </div>
</template>
<script>
import axios from "axios";
import { gettoken } from "../addgoods"; //导入数据存储的方法
import showdiv from "./showdiv";
export default {
  data() {
    return {
      showdiv: false,
      datalist: [],
      list: []
    };
  },
  updated(){
    axios
      .get("/goods/getlist2") //只显示增加到第六条的数据
      .then(res => {
        this.list = res.data.slice(6); //去掉前6个再显示
      })
      .catch(function(e) {
        console.log(e);
      });

  },
  mounted() {
        axios
      .get("/goods/getlist2") //只显示增加到第六条的数据
      .then(res => {
        this.list = res.data.slice(6); //去掉前6个再显示
      })
      .catch(function(e) {
        console.log(e);
      });

    this.$eventBus.$on("closeshowdiv", e => {
      //接收广播显示carlist
      this.showdiv = e.showdiv;
    });
  },
  methods: {
    // 拿到token判断有没有登录
    topay() {
      console.log(gettoken(document.cookie.substr(6)));
      if (gettoken(document.cookie.substr(6))) {
        this.$router.push("jiesuan");
      } else {
        this.$router.push("login");
      }
    },
    checkall(e) {
      this.datalist = [];
      if (e.target.checked) {
        for (const mli of this.list) {
          this.datalist.push(mli);
        }
      }
    },
    unadd(i) {
      if (this.list[i].count > 1) {
        this.list[i].count--;
      }
    },
    add(i) {
      this.list[i].count++;
    },
    mshow() {
      this.showdiv = !this.showdiv;
      
      this.$eventBus.$emit("closefooter", {
        //发广播让footer隐藏
        mclose: false
      });
    }
  },
  computed: {
    all() {
      return this.datalist.length === this.list.length;
    },
    allcost() {
      let j = 0;
      for (const i of this.datalist) {
        j += i.price * i.count;
      }
      return j;
    }
  },
  components: {
    showdiv
  }
};
</script>
<style  scoped>
.cartlist {
  font-size: 0.32rem;
  padding-top: 0.81rem;
  box-sizing: border-box;
}
.ul_list {
  padding-top: 0.01rem;
  background: #ccc;
  height: 10.3rem;
  overflow: auto;
}
.ul_list li {
  list-style: none;
  background: white;
  margin: 0.15rem 0.1rem;
  padding: 0.1rem 0.1rem;
  border-radius: 0.2rem;
}
.ul_list li input {
  height: 1.6rem;
  zoom: 350%;
  float: left;
  /* -webkit-appearance: radio; */
}
.cartlist ul li > img {
  width: 1.6rem;
  height: 1.6rem;
  float: left;
}
.mid_div {
  height: 1.6rem;
  float: left;
  overflow: hidden;
  /* display: inline-block; */
}

.mid_div > p {
  width: 4.5rem;
  font-size: 0.28rem;
}
.innerdiv {
  width: 4.5rem;
  margin-top: 0.3rem;
}
.innerdiv > div {
  float: right;
  text-align: end;
}
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
  background: white;
  width: 100%;
  height: 0.81rem;
  font-size: 0.36rem;
}
.b1,
.b2 {
  width: 0.48rem;
  border-radius: 50%;
  height: 0.48rem;
  font-size: 0.48rem;
  line-height: 0.48rem;
  margin: 0 0.2rem;
}

footer {
  position: fixed;
  padding: 0 0.2rem;
  bottom: 0rem;
  width: 100%;
  height: 1rem;
  background: white;
  box-sizing: border-box;
  text-align: left;
  line-height: 1rem;
  margin-bottom: 1.2rem;
}
footer > input {
  zoom: 350%;
  height: 1rem;
}
footer > button {
  width: 1.8rem;
  height: 0.76rem;
  border-radius: 3.1rem;
  float: right;
  margin: 0.1rem;
  color: red;
  font-size: 0.38rem;
}
.mul2 {
  width: auto;
  overflow-x: auto;
  white-space: nowrap;
}
.mul2 li {
  /* float: left; */
  display: inline-block;
}
.mul2 img {
  width: 0.8rem;
  height: 0.8rem;
}
.mul2 span {
  box-sizing: border-box;
  padding-top: 0.4rem;
  float: left;
}
.mul2 .sheng {
  display: inline-block;
  position: absolute;
  top: 1.1rem;
  left: 0.4rem;
  width: 1rem;
  height: 0.45rem;
  background: #ccc;
  padding-top: 0;
  text-align: center;
}
</style>