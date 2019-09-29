<template>
		<div class="big">
			<i class="iconfont icon-zuojiantou1" @click="goback"></i>	
			<a @click="aaaaa">商品</a>
			<a @click="bbbbb">评价</a>
			<a @click="ccccc">参数</a>
			<a @click="ddddd">详情</a>
			
			<span class="iconfont icon-gengduo1"></span>
		</div>
</template>

<script>
	export default {
	 		data() {
			return {
				pages: [
				{
				
				}
			
					
					

				]

			}
		},
		mounted() {
			window.addEventListener('scroll', this.windowScroll)
			
		},
		methods: {
			windowScroll () {
			     // 滚动条距离页面顶部的距离
			     // 以下写法原生兼容
			     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop 
			      
			     /* if(scrollTop>150){
			      	this.flag=true;
			     
			      }
			       	if(scrollTop<150){
			      	this.flag=false;	
			      	}*/
			  
			  },
			  aaaaa(){
			  	document.documentElement.scrollTop=0;
			  },
			  bbbbb(){
			  	document.documentElement.scrollTop=2100;
			  },
			  ccccc(){
			  	document.documentElement.scrollTop=2650;
			  },
			  ddddd(){
			  	document.documentElement.scrollTop=3150;
			  },
			  goback(){
			  	this.$router.back();
			  }

			
		}
		
	 }
</script>

<style scoped>
	.big{
		width: 100%;
		height: 1rem;
		background: #fff;
		text-align: center;
		position: fixed;
		top: 0;
		z-index: 999;
		font-size: 0.32rem;
	}
	.big>i{
		float: left;
		font-size: 0.32rem;
		margin-top: 0.28rem;
		margin-left: 0.4rem;
	}
	.big>span{
		float: right;
		font-size: 0.6rem;
		margin-right: 0.4rem;
		margin-top: 0.16rem;
	}
	.big a{
		display: inline-block;
		font-size: 0.32rem;
		text-decoration: none;
		color:#191919;
		margin-left: 0.34rem;
		margin-right: 0.2rem;
		margin-top: 0.22rem;
	}
</style>