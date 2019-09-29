<template>
	<div class="xinpin">
		<div class="bi">
			<h3>笔记本电脑</h3>
			<div class="bi01">
				<dl v-for="b of bs">
					<dt><img :src="b.src" /></dt>
					<dd>{{b.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="ping">
			<h3>平板电脑</h3>
			<div class="ping01">
				<dl v-for="a of ls">
					<dt><img :src="a.src" /></dt>
					<dd>{{a.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="pei">
			<h3>笔记本配件</h3>
			<div class="pei01">
				<dl v-for="w of ws">
					<dt><img :src="w.src" /></dt>
					<dd>{{w.name}}</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				bs:[
					{name:'MagicBook Pro',src:'https://res.vmallres.com/pimages/product/6901443313112/428_428_1563869539329mp.png'},
					{name:'HUAWEIBOOK M...',src:'https://res.vmallres.com/pimages/product/6901443297726/428_428_1555752034219mp.png'},
					{name:'MagicBook 2019...',src:'https://res.vmallres.com/pimages/product/6901443298228/428_428_1554717442802mp.png'},
					{name:'HUAWEI MateB...',src:'https://res.vmallres.com/pimages/product/6901443292448/428_428_1556004770031mp.png'},
					{name:'HUAWEI MateB...',src:'https://res.vmallres.com/pimages/product/6901443297771/428_428_1555904746689mp.png'},
					{name:'荣耀MagicBook 2019',src:'https://res.vmallres.com/pimages/product/6901443313198/428_428_1563350288356mp.png'},
					{name:'HUAWEIMate B...',src:'https://res.vmallres.com/pimages/product/6901443300914/428_428_1556179920783mp.png'},
					{name:'HUAWEIMate B...',src:'https://res.vmallres.com/pimages/product/6901443209439/428_428_1542768417288mp.png'}
				],
				ls:[
					{name:'荣耀平板5 10.1英寸',src:'https://res.vmallres.com/pimages/product/6901443265206/428_428_1539243364035mp.png'},
					{name:'华为平板6 10.8英寸',src:'https://res.vmallres.com/pimages/product/6901443315826/428_428_1560758954741mp.png'},
					{name:'荣耀平板5 8英寸',src:'https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png'},
					{name:'华为平板M6 8英寸',src:'https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png'},
					{name:'荣耀WaterPlay 8英寸',src:'https://res.vmallres.com/pimages/product/6901443271146/428_428_1555379589432mp.png'},
					{name:'华为平板 M5 青春版',src:'https://res.vmallres.com/pimages/product/6901443294763/428_428_1554811550801mp.png'},
					{name:'荣耀平板5',src:'https://res.vmallres.com/pimages/product/6901443265213/428_428_1539243116157mp.png'},
					{name:'华为平板',src:'https://res.vmallres.com/pimages/product/6901443268023/428_428_1554811417873mp.png'},
					{name:'荣耀畅玩平板',src:'https://res.vmallres.com/pimages/product/6901443192458/428_428_1539913537863mp.png'},
					{name:'华为畅享平板',src:'https://res.vmallres.com/pimages/product/6901443267514/428_428_1554812127151mp.png'},
					{name:'荣耀Water',src:'https://res.vmallres.com/pimages/product/6901443204519/428_428_1542765671403mp.png'},
					{name:'华为平板 M5 青春版',src:'https://res.vmallres.com/pimages/product/6901443294763/428_428_1554811550801mp.png'},
					{name:'荣耀平板5',src:'https://res.vmallres.com/pimages/product/6901443265213/428_428_1539243116157mp.png'}
				],
				ws:[
					{name:'笔记本配件',src:'https://res.vmallres.com/pimages/common/mobile/frontCategory/1542612193434.jpg'}
				]
			}
		}
	}
</script>
<style scoped>
	.xinpin{
		width:4.8rem;
		height:24rem;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.bi h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.bi01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;

	}
	.bi01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.bi01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.bi01 dl dt img{
		width:100%;
	}
	.bi01 dd{
		width:1.2rem;
	}
	.ping h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.ping01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.ping01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.ping01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.ping01 dl dt img{
		width:100%;
	}
	.ping01 dd{
		width:1.2rem;
	}
	
	.pei h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.pei01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.pei01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.pei01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.pei01 dl dt img{
		width:100%;
	}
	.pei01 dd{
		width:1.2rem;
	}
</style>