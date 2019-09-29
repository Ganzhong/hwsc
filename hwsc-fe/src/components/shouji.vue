<template>
	<div class="shouji">
		<h3>手机</h3>
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
			<span>发现更多手机</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'华为畅享9S',price:'￥1489',src:'https://res0.vmallres.com/pimages//wapFrontLocation/content/xTxwj6kTHgqrjf49PgHa.jpg'},
					{name:'荣耀8X',price:'￥999',src:'https://res0.vmallres.com/pimages//wapFrontLocation/content/v1BmJuEyOv4itg4jwoTv.jpg'},
					{name:'华为畅享9 Plus',price:'￥1789',src:'https://res0.vmallres.com/pimages//wapFrontLocation/content/y0aZzofSAhUQRkedYkq3.jpg'},
					{name:'荣耀Note10',price:'￥1799',src:'https://res0.vmallres.com/pimages//wapFrontLocation/content/h6OXsIBJCoz1hVaVPSPj.jpg'},
				],
				imgs:[
					{name:'华为麦芒8',price:'￥1699',src:'https://res0.vmallres.com/pimages//product/6901443323340/428_428_7C1CB8972D5541B58EAD394BB2686BE3897353C35C1603FFmp.png'},
					{name:'荣耀畅玩7',price:'￥599',src:'https://res0.vmallres.com/pimages//product/6901443229864/428_428_1539913051506mp.png'},
					{name:'华为畅享Max',price:'￥1699',src:'https://res0.vmallres.com/pimages//wapFrontLocation/content/Je894n0JDpZ8TnUYK436.png'},
					{name:'华为畅享 9e',price:'￥799',src:'https://res0.vmallres.com/pimages//product/6901443289998/428_428_1553486430599mp.png'},
					{name:'荣耀10青春版',price:'￥999',src:'https://res0.vmallres.com/pimages//product/6901443273959/428_428_1555729935843mp.png'},
					{name:'HUAWEI nova5',price:'￥2799',src:'https://res0.vmallres.com/pimages//product/6901443316373/428_428_1561434028202mp.png'},
					{name:'HUAWEI nova4',price:'￥2689',src:'https://res0.vmallres.com/pimages//product/6901443278138/428_428_1544693593610mp.png'},
					{name:'荣耀畅玩8A',price:'￥699',src:'https://res0.vmallres.com/pimages//product/6901443277735/428_428_1546504342739mp.png'},
					{name:'荣耀畅玩8',price:'￥599',src:'https://res0.vmallres.com/pimages//product/6901443310746/428_428_1562638774891mp.png'},
					{name:'荣耀Play3e',price:'￥899',src:'https://res0.vmallres.com/pimages//product/6901443329243/428_428_FADB1B48C9C92E3C47B8518FC93F9747F2D6549ACC4B1FD7mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.shouji{
		height:15rem;
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