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
					{name:'力博得智能声波牙刷',price:'￥169',src:'https://res7.vmallres.com/pimages//wapFrontLocation/content/71LSMQ0l1CeFNVHrKrrd.jpg'},
					{name:'欧瑞博智能插座',price:'￥49',src:'https://res7.vmallres.com/pimages//wapFrontLocation/content/rUqQxYFYdBTJU4g8TaqK.jpg'},
					{name:'海雀AI全景摄像头',price:'￥299',src:'https://res7.vmallres.com/pimages//wapFrontLocation/content/ZvR4fpwdiQ90cl3BF9JU.jpg'},
					{name:'720全效空气净化器',price:'￥1299',src:'https://res7.vmallres.com/pimages//wapFrontLocation/content/PJ6Xm4sL413iuUln09Ze.jpg'},
				],
				imgs:[
					{name:'绵小掌舒压随身按摩贴',price:'￥129',src:'https://res7.vmallres.com/pimages//product/GB3102150092701/428_428_306BB9055AD4BA8B3404623B09DF413D07A7430D7DA4C349mp.png'},
					{name:'欧普读写灯台',price:'￥169',src:'https://res7.vmallres.com/pimages//product/GB3102150039901/428_428_1540952549939mp.png'},
					{name:'遥控大师空调伴侣',price:'￥99',src:'https://res7.vmallres.com/pimages//product/6972039900016/428_428_1558582363049mp.png'},
					{name:'nimova 智能护眼台灯',price:'￥399',src:'https://res7.vmallres.com/pimages//product/6972440620817/428_428_1560511136275mp.png'},
					{name:'科沃斯智能扫地机器人吸尘器',price:'￥2799',src:'https://res7.vmallres.com/pimages//product/GB3102150017201/428_428_1541384405122mp.png'},
					{name:'海雀AI全景摄像头H1',price:'￥245',src:'https://res7.vmallres.com/pimages//product/GB3102150043501/428_428_1541644086994mp.png'},
					{name:'指思双接口手机U盘H1',price:'￥79',src:'https://res7.vmallres.com/pimages//product/GB3102150093001/428_428_1563258229746mp.png'},
					{name:'iateey智能即热饮水台',price:'￥699',src:'https://res7.vmallres.com/pimages//product/6972190230014/428_428_1555467589045mp.png'},
					{name:'品多全自动智能指纹门锁M1',price:'￥2999',src:'https://res7.vmallres.com/pimages//product/GB3102150020601/428_428_1539591607300mp.png'},
					{name:'三思全彩灯泡',price:'￥99',src:'https://res7.vmallres.com/pimages//product/GB3102150038801/428_428_1540951967494mp.png'},
					{name:'720空气质量监测仪',price:'￥429',src:'https://res7.vmallres.com/pimages//product/GB3102150002401/428_428_1539940731174mp.png'},
					{name:'一奎防盗双肩包',price:'￥199',src:'https://res7.vmallres.com/pimages//product/GB3102150092902/428_428_1563261423570mp.png'}
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