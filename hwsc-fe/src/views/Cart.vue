<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 21:07:47
 * @LastEditTime: 2019-10-05 18:12:35
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="mc">
    <div class="m" v-show="show">
      <hcart></hcart>
      <section>
        <p>热销推荐</p>
        <ul>
          <li v-for=" (mlist,index) of datalist">
            <p>
              <img ref="pic" :src="mlist.picUrl" />
            </p>
            <i class="cart iconfont icon-gouwuche" @click="joincart(index)"></i>
            <p ref="name">{{mlist.name}}</p>
            <p ref="price" style="color:red">￥{{mlist.price}}</p>
            <p ref="desc" style="display: none;">{{mlist.desc}}</p>
            <!-- <p ref="desc" >{{mlist.desc}}</p> -->
          </li>
        </ul>
      </section>
    </div>

    <cartlist v-if="!show" @cartlistshow = "getclshow"></cartlist>
    <!-- 接到子组件的值 @cartlistshow (这个是频道) = "getclshow"(这个是方法)  -->
  </div>
</template>
<script>
import axios from "axios";
import hcart from "../components/Hcart";
import cartlist from "../mcart/cartlist";
import { addAddress } from "../addgoods"; //导入数据存储的方法(本地)

export default {
  data() {
    return {
      show: true, //默认不显示购物车list
      datalist: []
    };
  },
  mounted() {
    const _this = this;
    axios
      .get("/goods/getlist2")
      .then(res => {
        this.datalist = res.data;

        _this.show = res.data.length > 6 ? false : true; //查看有没有数据有就显示列表没有就显示空购物车
        console.log("====>");
        console.log(_this.show);
        console.log(res.data.length);
      })
      .catch(function(e) {
        console.log(e);
      });
  },
  beforeDestroy: function() {
    //销毁后
    this.$eventBus.$emit("closefooter", {
      //发广播让footer显示
      mclose: true
    });
    // this.$eventBus.$off("closefooter",null)
  },
  methods: {
    joincart(i) {
      const _this = this;
      // 点击后隐藏当前显示另一个
      const goods = [
        {
          name: this.$refs.name[i].innerText,
          picUrl: this.$refs.pic[i].src,
          desc: this.$refs.desc[i].innerText,
          price: this.$refs.price[i].innerText.substr(1) * 1,
          count: 1
        }
      ];

      console.log("--------");
      console.log(this.$refs);
      console.log(this.$refs.desc[i].desc);
      //存本地
      // addAddress(goods);

      //从本取出
      // let addressStr = localStorage.getItem('goods_list');

      axios
        .post("/goods/insertgoodslist2", goods) //这个是以数组的方式加入 所以必须传数组
        .then(function(s) {
          _this.show = !_this.show;
        })
        .catch(function(e) {
          console.log(e);
        });
    },
    getclshow(d){
      this.show = d.clshow;
      console.log('--.')
      console.log(d)
    }
  },
  beforeCreate() {
    console.log("=====beforeCreate==...=====");
  },
  created() {
    console.log("=====created=...====");
  },
  beforeMount() {
    console.log("=====beforeMount==...===");
  },
  beforeUpdate() {
    console.log("=====beforeUpdate==...===");
  },
  updated() {
    console.log("=====updated==...===");
  },
  beforeDestroy() {
    console.log("=====beforeDestroy==...===");
  },
  destroyed() {
    console.log("=====destroyed==...===");
  },
  components: {
    hcart,
    cartlist
  }
};
</script>
<style  scoped>
.mc {
  position: absolute;
  height: 100%;
  width: 100%;
}

.m {
  background: #f9f9f9;
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
  position: absolute;
  overflow: auto;
}

section {
  position: absolute;
  margin-top: 0.4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1.3rem;
}
section > p {
  text-align: center;
  font-weight: bold;
  font-size: 0.36rem;
  margin-bottom: 0.4rem;
}
section ul {
  width: 100%;
  white-space: wrap;
}
section ul li {
  width: 3.5rem;
  height: 4.8rem;
  display: inline-block;
  background: white;
  margin: 0.1rem 0.08rem;
  border-radius: 0.2rem;
}
section ul li img {
  width: 2.7rem;
  height: 2.7rem;
}
.cart {
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.06rem;
  font-size: 0.4rem;
  background: rgb(209, 205, 205);
  position: absolute;
  top: 0.05rem;
  right: 0.05rem;
  border-radius: 50%;
}
section ul li p {
  margin: 0.2rem 0;
}
</style>