<template>
  <div id="zhuye">
		<div id="jiantou" @click="goto()" ref="tutu">
			<span class="iconfont icon-dingbu" style="font-size: 0.7rem;"></span>
		</div>
  <header>
		<div><img class="logo" src="https://res.vmallres.com/nwap/20190715/images/echannelWap/logo/logo_vmall.png"/></div>
		<div class="lunbo1"><div class="a1 iconfont icon-sousuo"></div>
		<div class="swiper01"><p :style="{color:placeholders[index].color}">{{placeholders[index].name}}</p></div>
		</div>
		<div class="denglu"><span class="iconfont icon-xinxi"></span></div>
		<div @click="todenglu"><span class="text01">登录</span></div>
	</header>
	<daohang></daohang>
	<tupian></tupian>
	<wenzi></wenzi>
	<hezi></hezi>
	<toutiao></toutiao>
	<timer></timer>
	<xiangqin></xiangqin>
	<xiangqin2></xiangqin2>
	<jingpin></jingpin>
	<shouji></shouji>
	<zhihui></zhihui>
	<bijiben></bijiben>
	<pingban></pingban>
	<chuandai></chuandai>
	<jiaju></jiaju>
	<peijian></peijian>
	<shengtai></shengtai>
	<zuihou></zuihou>
	<fankui></fankui>
  </div>
</template>
<script>
	import daohang from '../components/daohang.vue';
	import tupian from '../components/tupian.vue';
	import wenzi from '../components/wenzi.vue';
	import hezi from '../components/hezi.vue';
	import toutiao from '../components/toutiao.vue';
	import timer from '../components/timer.vue';
	import xiangqin from '../components/xiangqin.vue';
	import xiangqin2 from '../components/xiangqin2.vue';
	import jingpin from '../components/jingpin.vue';
	import shouji from '../components/shouji.vue';
	import zhihui from '../components/zhihui.vue';
	import bijiben from '../components/bijiben.vue';
	import pingban from '../components/pingban.vue';
	import chuandai from '../components/chuandai.vue';
	import jiaju from '../components/jiaju.vue';
	import peijian from '../components/peijian.vue';
	import shengtai from '../components/shengtai.vue';
	import zuihou from '../components/zuihou.vue';
	import fankui from '../components/fankui.vue';
		export default {
			data(){
				return {
				  index : 0,
					placeholders: [
						{name:'Mate 30',color:'red'},
						{name:'荣耀Play3',color:'red'},
						{name:'畅享10 Plus',color:'red'},
						{name:'荣耀20S',color:'red'},
						{name:'HUAWEI P30',color:'red'},
						{name:'荣耀20',color:'black'},
						{name:'荣耀9X',color:'black'},
						{name:'nova 5i Pro',color:'black'},
						{name:'荣耀20i',color:'black'},
						{name:'5G',color:'black'},
						{name:'Mate 20X(5G)',color:'red'},
						{name:'nova 5i',color:'black'}
					]
				}
			},
			mounted(){
				setInterval(()=>{
					this.index++;
					if(this.index>=this.placeholders.length){
						this.index = 0;
					}
				},2000);
				let that  = this;
				window.onscroll = ()=>{
					// var jiantou = document.getElementById('jiantou');
					const scrollTop = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
					if(scrollTop <= 400){
						that.$refs.tutu.style.display = 'none';
					}else{
						that.$refs.tutu.style.display = 'block';
					}
				}
			},
			methods:{
				goto(){
					document.documentElement.scrollTop  = 0;
				},
				todenglu(){
					this.$router.push({name:'login'});
				}
			},
			beforeDestroy(){
				window.onscroll = undefined;
			},
			components:{
				daohang,
				tupian,
				wenzi,
				hezi,
				toutiao,
				timer,
				xiangqin,
				xiangqin2,
				jingpin,
				shouji,
				zhihui,
				bijiben,
				pingban,
				chuandai,
				jiaju,
				peijian,
				shengtai,
				zuihou,
				fankui
			}
		}
</script>
<style scoped>
		#zhuye{
			font-size:0.4rem;
			width:100%;
			height:100%;
			position: relative;
		}
		#jiantou{
			width:1rem;
			height:1rem;
			background: white;
			position: fixed;
			bottom:2rem;
			right:0.8rem;
			border-radius: 100%;
			z-index: 999;
			text-align: center;
		}
		#jiantou span{
			display: block;
			padding-top: 0.15rem;
		}
		header{
			width:100%;
			top:0;
			height:0.8rem;
			display: flex;
			justify-content: space-around;
		}
		.logo{
			margin-top: 0.29rem;
		}
		.lunbo1{
			width:4rem;
			height:0.7rem;
			background: #f5f5f5;
			border: none;
			margin: 0.05rem 0;
			border-radius: 0.1rem;
			overflow: hidden;
		}
		.a1{
			font-size: 0.3rem;
			margin-top: 0.15rem;
			margin-left: 0.12rem;
			float: left;
		}
		.swiper01{
			float: left;
			margin-top: 0.1rem;
			margin-left: 0.25rem;
			font-size: 0.3rem;
		}
		.denglu {
			margin-top: 0.025rem;
		}
		.denglu span{
			display: inline-block;
			font-size: 0.6rem;
			margin:0.05rem 0.2rem; 
		}
		.text01{
			font-size: 0.3rem;
			line-height: 0.8rem;
		}
</style>