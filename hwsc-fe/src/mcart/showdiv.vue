<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-26 20:28:39
 * @LastEditTime: 2019-09-29 17:45:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="mdiv">
    <div class="d1"></div>
    <div class="d2">
      <div>
        <span
          style="display: inline-block;padding: 0.2rem 0.5rem;font-weight: bold;font-size: 0.36rem;"
        >选择搭配商品</span>
        <span
          @click="closelog"
          style="text-align: right;width: 53%;font-size: 0.36rem;display: inline-block;color:#ccc"
        >x</span>
      </div>
      <p
        style="color: red;border-bottom: 0.05rem solid red;width: 1.3rem;padding-bottom: 0.1rem;margin: 0.2rem 0.5rem;"
      >超值搭配</p> 
      <div class="ullist">
        <ul>
          <li v-for="list of mlist">
            <input type="checkbox" v-model="datalist" :value="list" />
            <img :src="list.picUrl" />
            <div class="middiv">
              <!-- <p>荣耀移动电源2 10000mAh(Max 18W) Type-c快充...</p> -->
              <p>{{list.name}}</p>
              <span class="s1">白色</span>
              <span class="s2">￥{{list.price}}</span>
              <span class="s3">￥149</span>
            </div>
          </li>
          <div style=" width: 100%;"></div>
          <p class="mp" @click="addlist">确定</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { addAddress2 } from "../addgoods";
import axios from 'axios';
export default {
  data() {
    return {
      mlist: [],
      datalist: []
    };
  },
  mounted() {
    this.$eventBus.$emit("closefooter", {
      //发广播让footer隐藏
      mclose: false
    });
    //存数据

    const goods = [
      {
        name: "荣耀二合一数据线",
        picUrl:
          "https://res.vmallres.com/pimages/product/GB3102030009801/428_428_1561617948285mp.png",
        desc: "荣耀二合一数据线",
        price: 49,
        count: 1
      },
      {
        name: "荣耀手环 5 标准版(陨石黑)",
        picUrl:
          "https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png",
        desc: "荣耀手环 5 标准版(陨石黑)",
        price: 179,
        count: 1
      },
      {
        name: "荣耀移动电源2 10000mAh(Max 18W) Type-c快充...",
        picUrl:
          "https://res.vmallres.com/pimages/product/6901443293995/142_142_1553656554405mp.png",
        desc: "荣耀移动电源2 10000mAh(Max 18W) Type-c快充...",
        price: 100,
        count: 1
      },
      {
        name: "荣耀xSport动蓝牙耳机(魅焰红)",
        picUrl:
          "https://res.vmallres.com/pimages/product/6901443174256/428_428_1542854411097mp.png",
        desc: "荣耀xSport动蓝牙耳机(魅焰红)",
        price: 179,
        count: 1
      },
      {
        name: "荣耀FlyPods青春版 真无线耳机(铃兰白)",
        picUrl:
          "https://res.vmallres.com/pimages/product/6901443185191/428_428_1553940469245mp.png",
        desc: "荣耀FlyPods青春版 真无线耳机(铃兰白)",
        price: 349,
        count: 1
      },
      {
        name: "荣耀三脚架自拍杆 无线版(黑色)",
        picUrl:
          "https://res.vmallres.com/pimages/product/6901443172221/428_428_1542856308170mp.png",
        desc: "荣耀三脚架自拍杆 无线版(黑色)",
        price: 79,
        count: 1
      }
    ];

    //存本地
    // addAddress2(goods);
    this.mlist = goods;
    console.log("--------");
    console.log(goods);
    //从本取出
    let addressStr = localStorage.getItem("goods_list_fujia");
    console.log(addressStr);
  },
  methods: {
    closelog() {
      this.$eventBus.$emit("closeshowdiv", {
        //发广播让footer隐藏
        showdiv: false
      });
      this.$eventBus.$emit("closefooter", {
        //发广播让footer显示
        mclose: true
      });
    },
    addlist() {
      const _this =this;
      this.$eventBus.$emit("closeshowdiv", {
        //发广播让footer隐藏
        showdiv: false
      });
      this.$eventBus.$emit("closefooter", {
        //发广播让footer显示
        mclose: true
      });
     
            axios
        .post("/goods/insertgoodslist2", _this.datalist) //这个是以数组的方式加入 所以必须传数组
        .then(function(s) {

        })
        .catch(function(e) {
          console.log(e);
        });

    }
  }
  // beforeDestroy: function() {
  //   //销毁后
  //   this.$eventBus.$emit("closefooter", {
  //     //发广播让footer显示
  //     mclose: true
  //   });
  // }
};
</script>
<style  scoped>
.mp {
  width: 80%;
  height: 0.8rem;
  background: red;
  border-radius: 0.8rem;
  margin: 0 auto;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.5rem;
}
.mdiv {
  width: 100%;
  position: absolute;
  top: 0rem;
  left: 0rem;
  height: 13.34rem;
  font-size: 0.32rem;
  overflow: hidden;
}
.d1 {
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.7;
}
.d2 {
  position: absolute;
  top: 5rem;
  height: 9.55rem;
  width: 100%;
  border-radius: 0.3rem 0.3rem 0 0;
  background: white;
}
.ullist {
  height: 8.11rem;
}
.ullist ul {
  height: 6.41rem;
  overflow: auto;
}
.ullist ul li {
  padding: 0.2rem 0.2rem;
  height: 2.5rem;
  font-size: 0.26rem;
}
.ullist ul li input {
  height: 2rem;
  zoom: 300%;
}
.ullist ul li img {
  height: 2rem;
  width: 2rem;
}
.middiv {
  vertical-align: top;
  display: inline-block;
  width: 4.6rem;
  height: 1.8rem;
}
.middiv p {
  display: inline-block;
  margin-bottom: 0.1rem;
}
.middiv .s1 {
  display: block;
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top: 0.2rm;
  text-align: center;
  border: solid red 0.02rem;
  border-radius: 1.2rem;
}
.middiv .s2 {
  color: red;
  font-size: 0.32rem;
  line-height: 0.5rem;
  margin-right: 0.2rem;
}
.middiv .s3 {
  font-size: 0.32rem;
  line-height: 0.5rem;
  text-decoration: line-through;
}
</style>