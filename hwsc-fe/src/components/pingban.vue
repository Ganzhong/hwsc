<template>
	<div class="shouji">
		<h3>精品平板</h3>
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
			<span>发现更多精品平板</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'华为平板 M6 10.8英寸',price:'￥2299',src:'https://res3.vmallres.com/pimages//wapFrontLocation/content/qNARvyLnQLpIdse8Md34.jpg'},
					{name:'荣耀平板5 10.1英寸',price:'￥1199',src:'https://res3.vmallres.com/pimages//wapFrontLocation/content/SvN76CIHyDW4auCOw9YU.jpg'},
					{name:'华为平板 M6 8.4英寸',price:'￥1999',src:'https://res3.vmallres.com/pimages//wapFrontLocation/content/6uPlp48EBktfyH8ty6Vj.png'},
					{name:'荣耀平板5 8英寸',price:'￥1099',src:'https://res3.vmallres.com/pimages//wapFrontLocation/content/JFu4M3fSLSZNbYwkuY0R.jpg'},
				],
				imgs:[
					{name:'华为平板 M5 青春版 10.1英寸',price:'￥1799',src:'https://res3.vmallres.com/pimages//product/6901443268023/428_428_1554811417873mp.png'},
					{name:'荣耀WaterPlay 10.1',price:'￥1599',src:'https://res3.vmallres.com/pimages//product/6901443323722/428_428_0995A4B43FFFF4E1E66A80F03220F9426C73002EFD0F9CDBmp.png'},
					{name:'华为平板 M5 青春版 8.0英寸',price:'￥1199',src:'https://res3.vmallres.com/pimages//product/6901443294763/428_428_1554811550801mp.png'},
					{name:'荣耀WaterPlay 8英寸',price:'￥1499',src:'https://res3.vmallres.com/pimages//product/6901443271146/428_428_1555379589432mp.png'},
					{name:'华为畅享平板 10.1英寸',price:'￥1299',src:'https://res3.vmallres.com/pimages//product/6901443267514/428_428_1554812127151mp.png'},
					{name:'荣耀畅玩平板2 9.6英寸',price:'￥1099',src:'https://res3.vmallres.com/pimages//product/6901443192458/428_428_1539913537863mp.png'},
					{name:'荣耀畅玩平板2.8英寸',price:'￥999',src:'https://res3.vmallres.com/pimages//product/6901443192441/428_428_1538991053843mp.png'},
					{name:'荣耀畅玩平板2.7英寸',price:'￥599',src:'https://res3.vmallres.com/pimages//product/6901443192434/428_428_1554944593452mp.png'}
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