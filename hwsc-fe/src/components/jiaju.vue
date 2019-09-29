<template>
	<div class="shouji">
		<h3>智能家居</h3>
		<div class="pics">
			<dl v-for="box of boxs">
				<dt><img :src="box.src"/></dt>
				<dd>{{box.name}}</dd>
				<dd>{{box.price}}</dd>
			</dl>
		</div>
		<div class="shops">
			<dl v-for="img of imgs">
				<dt><img :src="img.src"/></dt>
				<dd>{{img.name}}</dd>
				<dd style="color:red;">{{img.price}}</dd>
			</dl>
		</div>
		<div class="shuoming">
			<span>发现更多智能家居</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'华为AI音箱',price:'￥399',src:'https://res5.vmallres.com/pimages//wapFrontLocation/content/ziH4pdPVCxDy85kHOnHu.png'},
					{name:'荣耀路由Pro 2',price:'￥289',src:'https://res5.vmallres.com/pimages//wapFrontLocation/content/IQDvTS0UAP6YjSZukmxz.png'},
					{name:'华为4G路由2 Pro',price:'￥499',src:'https://res5.vmallres.com/pimages//wapFrontLocation/content/aKTHISKrq6hM9Z7flyo6.png'},
					{name:'荣耀YOYO之智能音箱',price:'￥199',src:'https://res5.vmallres.com/pimages//wapFrontLocation/content/pxF7gYVXPxwFCEV06Yzl.png'},
				],
				imgs:[
					{name:'华为子母路由Q2 Pro',price:'￥799',src:'https://res5.vmallres.com/pimages//product/6901443273324/428_428_1554109398579mp.png'},
					{name:'荣耀路由2S',price:'￥199',src:'https://res5.vmallres.com/pimages//product/6901443257485/428_428_1542765330080mp.png'},
					{name:'华为路由WS52004核版',price:'￥249',src:'https://res5.vmallres.com/pimages//product/6901443303915/428_428_1557974810213mp.png'},
					{name:'荣耀路由 X2',price:'￥149',src:'https://res5.vmallres.com/pimages//product/6901443258871/428_428_1539912533064mp.png'},
					{name:'华为路由 5G CPE Pro',price:'￥2499',src:'https://res5.vmallres.com/pimages//product/6901443324965/428_428_1563154544230mp.png'},
					{name:'荣耀盒子Pro',price:'￥419',src:'https://res5.vmallres.com/pimages//product/6901443135615/428_428_1538969920769mp.png'},
					{name:'华为路由 WS5200 增强版',price:'￥199',src:'https://res5.vmallres.com/pimages//product/6901443274819/428_428_1545220584404mp.png'},
					{name:'荣耀路由X1 增强版',price:'￥139',src:'https://res5.vmallres.com/pimages//product/6901443181803/428_428_1538985163609mp.png'},
					{name:'华为备咖存储',price:'￥699',src:'https://res5.vmallres.com/pimages//product/6901443261123/428_428_1539160414229mp.png'},
					{name:'荣耀分布式路由',price:'￥799',src:'https://res5.vmallres.com/pimages//product/6901443280063/428_428_1550540838052mp.png'},
					{name:'华为路由器WS5102',price:'￥139',src:'https://res5.vmallres.com/pimages//product/6901443238613/428_428_1542787251423mp.png'},
					{name:'荣耀存储',price:'￥699',src:'https://res5.vmallres.com/pimages//product/6901443280636/428_428_1545200416146mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.shouji{
		height:16rem;
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
	.shops{
		text-align: center;
		display:flex;
		overflow-x: scroll;
		overflow-y: hidden;
		font-size: 0.25rem;
		margin-top: 0.2rem;
	}
	.shops::-webkit-scrollbar{
		display: none;
	} 
	.shops img{
		width:2rem;
		margin-top: 0.2rem;
	}
	.shops dl {
		margin-left: 0.2rem;
	}
	.shops dt{
	width: 2.5rem;
	height:2.6rem;
	background:#eeeeee;
	border-radius: 0.15rem;
	}
	.shops dd{
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