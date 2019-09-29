<template>
	<div class="shouji">
		<h3>热销配件</h3>
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
			<span>发现更多热销配件</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'HUAWEI X Gentle Monster Eyewear智能眼镜',price:'￥2499',src:'https://res6.vmallres.com/pimages//wapFrontLocation/content/wRpp1XxD3AVsQbNJ3R56.jpg'},
					{name:'HUAWEI FreeLace无线耳机',price:'￥499',src:'https://res6.vmallres.com/pimages//wapFrontLocation/content/B2OWHnlaFHGweMMAQxvG.jpg'},
					{name:'FlyPods系列无线耳机',price:'￥399',src:'https://res6.vmallres.com/pimages//wapFrontLocation/content/X0niKvNuvzN1oLzQ0cqC.png'},
					{name:'[拼团]荣耀智能体脂秤',price:'￥169',src:'https://res6.vmallres.com/pimages//wapFrontLocation/content/lOlQgoWHfuHDmoVD2U4B.jpg'},
				],
				imgs:[
					{name:'荣耀魔方蓝牙音箱',price:'￥99',src:'https://res6.vmallres.com/pimages//product/6901443313730/428_428_A44AD9D162330FD948D6E57E58011E0AB6C06964D363DE78mp.png'},
					{name:'星钻保护壳',price:'￥599',src:'https://res6.vmallres.com/pimages//product/6901443305032/428_428_1557286194345mp.png'},
					{name:'华为无线充电器',price:'￥99',src:'https://res6.vmallres.com/pimages//product/6901443259298/428_428_1554811299622mp.png'},
					{name:'荣耀MINI照片打印机',price:'￥599',src:'https://res6.vmallres.com/pimages//product/6901443269686/428_428_1553568411577mp.png'},
					{name:'华为安居智能摄像机',price:'￥299',src:'https://res6.vmallres.com/pimages//product/6901443252824/428_428_1543305800521mp.png'},
					{name:'HUAWEI FreePods 2 Pro',price:'￥999',src:'https://res6.vmallres.com/pimages//product/6901443257911/428_428_1554944660621mp.png'},
					{name:'FlyPods无线耳机',price:'￥799',src:'https://res6.vmallres.com/pimages//product/6901443270521/428_428_1540862995742mp.png'},
					{name:'华为智能体脂秤',price:'￥129',src:'https://res6.vmallres.com/pimages//product/6901443288267/428_428_1557478924284mp.png'},
					{name:'荣耀sport运动蓝牙耳机',price:'￥229',src:'https://res6.vmallres.com/pimages//product/6901443174256/428_428_1542854411097mp.png'},
					{name:'华为40W超级快充移动电源',price:'￥369',src:'https://res6.vmallres.com/pimages//product/6901443281398/428_428_1553601190793mp.png'},
					{name:'荣耀移动电源',price:'￥99',src:'https://res6.vmallres.com/pimages//product/6901443277056/428_428_1552375698410mp.png'},
					{name:'华为快充移动电源',price:'￥99',src:'https://res6.vmallres.com/pimages//product/6901443277032/428_428_1552381448062mp.png'}
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