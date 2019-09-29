<template>
	<div class="jingpin">
		<h3>
			精品推荐
		</h3>
		<div class="shops">
			<dl v-for="img of imgs">
				<dt><img :src="img.src"/></dt>
				<dd>{{img.name}}</dd>
				<dd style="color:red;">{{img.price}}</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				imgs:[
					{name:'华为畅享10 Plus',price:'￥1499',src:'https://res.vmallres.com/pimages//product/6901443327690/428_428_C78DF51A34E136BFAAB2BB2EE11B1ED70D235D0C34865586mp.png'},
					{name:'荣耀20i',price:'￥1299',src:'https://res.vmallres.com/pimages//product/6901443298259/428_428_E6504A85DA0DF00A352F8C0995FDABD97F3CE5AA390EFDFBmp.png'},
					{name:'华为智慧屏',price:'暂无报价',src:'https://res.vmallres.com/pimages//product/3001090002201/428_428_0B00B18FCA0BA136347E1D99EB6F008990A8688B49B3EF37mp.png'},
					{name:'荣耀9X Pro',price:'￥2199',src:'https://res.vmallres.com/pimages//product/6901443320394/428_428_1563504284133mp.png'},
					{name:'nova 5i Pro',price:'￥2199',src:'https://res.vmallres.com/pimages//product/6901443316496/428_428_1563762865294mp.png'},
					{name:'荣耀Magic2',price:'￥2299',src:'https://res.vmallres.com/pimages//product/6901443269723/428_428_1540895297253mp.png'},
					{name:'HUAWEI nova 5i',price:'￥1999',src:'https://res.vmallres.com/pimages//product/6901443258574/428_428_1550885810815mp.png'},
					{name:'荣耀8X Max',price:'￥1199',src:'https://res.vmallres.com/pimages//product/6901443258574/428_428_1550885810815mp.png'},
					{name:'华为 nova 4e',price:'￥1789',src:'https://res.vmallres.com/pimages//product/6901443292189/428_428_1552440582581mp.png'},
					{name:'荣耀平板5 10.1英寸',price:'￥1199',src:'https://res.vmallres.com/pimages//product/6901443265206/428_428_1539243364035mp.png'},
					{name:'HUAWEI P20 Pro',price:'￥3488',src:'https://res.vmallres.com/pimages//product/6901443227907/428_428_1542767389853mp.png'},
					{name:'荣耀FlyPods青春版真无线耳机',price:'￥399',src:'https://res.vmallres.com/pimages//product/6901443270385/428_428_1545268730575mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.jingpin{
		width:100%;
		height:5.4rem;
		border-bottom: #eeeeee solid 0.2rem;
	}
	h3{
		text-align: center;
		font-weight: normal;
		padding: 0.25rem 0;
		font-size: 0.45rem;
	}
	.shops{
		text-align: center;
		display:flex;
		overflow-x: scroll;
		overflow-y: hidden;
		font-size: 0.25rem;
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
</style>