<template>
	<div class="shouji">
		<h3>笔记本</h3>
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
			<span>发现更多笔记本</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'HUAWEI Matebook E 20 19款',price:'￥4999',src:'https://res2.vmallres.com/pimages//product/6901443297801/428_428_1555904957186mp.png'},
					{name:'HUAWEI Matebook X Pro 2019款',price:'￥7999',src:'https://res2.vmallres.com/pimages//product/6901443297962/428_428_1555752016264mp.png'},
					{name:'[锐龙版] 荣耀 MagicBook Pro',price:'￥4699',src:'https://res2.vmallres.com/pimages//product/6901443330744/428_428_52F045B3A4ADEA60CD2CB0B1E1A203FE6A34A56891A300CDmp.png'},
					{name:'[新品] 荣耀 MagicBook 2019',price:'￥3999',src:'https://res2.vmallres.com/pimages//product/6901443313198/428_428_1563350288356mp.png'},
				],
				imgs:[
					{name:'HUAWEI Matebook D',price:'￥4988',src:'https://res2.vmallres.com/pimages//product/6901443333523/428_428_C6929357169D6798A25B33ADBC6672CAEAA0D4A9C5359BB6mp.png'},
					{name:'HUAWEI Matebook 2019 锐龙版',price:'￥3999',src:'https://res2.vmallres.com/pimages//product/6901443298204/428_428_1554717601507mp.png'},
					{name:'HUAWEI Matebook 14',price:'￥5999',src:'https://res2.vmallres.com/pimages//product/6901443292417/428_428_1555751874478mp.png'},
					{name:'HUAWEI Matebook 13',price:'￥5699',src:'https://res2.vmallres.com/pimages//product/6901443304400/428_428_1556179745736mp.png'},
					{name:'荣耀MagicBook',price:'￥4699',src:'https://res2.vmallres.com/pimages//product/6901443233182/428_428_1538989301892mp.png'},
					{name:'HUAWEI Matebook X Pro',price:'￥8688',src:'https://res2.vmallres.com/pimages//product/6901443227822/428_428_1539915473579mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.shouji{
		height:17rem;
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