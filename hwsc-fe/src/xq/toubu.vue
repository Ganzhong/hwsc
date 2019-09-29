<template>
		<div class="big">
			<i class="iconfont icon-zuojiantou1"></i>	
			<a href="#">商品</a>
			<a href="#">评价</a>
			<a href="#">参数</a>
			<a href="#">详情</a>
			
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