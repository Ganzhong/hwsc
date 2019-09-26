<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 21:07:47
 * @LastEditTime: 2019-09-26 16:48:39
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
          </li>
        </ul>
      </section>
    </div>
    <cartlist v-show="!show"></cartlist>
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
      show: true,
      datalist: []
    };
  },
  mounted() {
    axios
      .get("/goods/getlist")
      .then(res => {
        this.datalist = res.data;
      })
      .catch(function(e) {
        console.log(e);
      });
  },
  methods: {
    joincart(i) {
      // 点击后隐藏当前显示另一个
      this.show = !this.show;
      console.log(this.show);
      const goods =[ {
        name: this.$refs.name[i].innerText,
        picUrl: this.$refs.pic[i].src,
        desc: "华为,中华有为",
        price: this.$refs.price[i].innerText.substr(1) * 1,
        count: 1
      }];

      //存本地
      // addAddress(goods);

      //从本取出
      // let addressStr = localStorage.getItem('goods_list');
      
      // axios
      //   // .post("/goods/insertgoodslist2", JSON.parse(addressStr))
      //   .post("/goods/insertgoodslist2", goods) //这个是以数组的方式加入 所以必须传数组
      //   .then(function(s) {
      //     if (!s.data.success) {
      //       alert("对不起,您无权操作....");
      //     }
      //   })
      //   .catch(function(e) {
      //     console.log(e);
      //   });
    }
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