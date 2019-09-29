<template>
	<div class="zhihui">
		<h3>智慧屏</h3>
		<div class="pics">
			<dl v-for="box of boxs">
				<dt><img :src="box.src"/></dt>
				<dd>{{box.name}}</dd>
				<dd style="color:red;">{{box.price}}</dd>
			</dl>
		</div>
		<div class="shuoming">
			<span>发现更多智慧屏</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'华为智慧屏',price:'暂无报价',src:'https://res1.vmallres.com/pimages//wapFrontLocation/content/I4KFr3aGrghn2MhnffJk.jpg'},
					{name:'荣耀智慧屏Pro',price:'￥4799',src:'https://res1.vmallres.com/pimages//wapFrontLocation/content/XpADCJYcIjbXosVe9uZF.jpg'}
				]
				}
			}
		}	
</script>
<style scoped>
	.zhihui{
		height:7rem;
		border-bottom: #eeeeee solid 0.2rem;
	}
	h3{
		text-align: center;
		font-weight: normal;
		padding: 0.25rem 0;
		font-size: 0.45rem;
	}
	.pics{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.pics dl{
		width:3.4rem;
		text-align: center;
		margin:0 0.175rem;
	}
	.pics  img{
		height:100%;
	
	}
	.pics dt{
		width:3.4rem;
		height:3.4rem;
		border-radius: 0.2rem;
		overflow: hidden;
	}
	.pics dd{
		font-size:0.26rem;
		line-height: 0.5rem;
	}
		.shuoming {
		text-align: center;
		font-size: 0.3rem;
		margin-top: 0.3rem;
	}
	.shuoming i {
		font-size: 0.3rem;
	}
</style>