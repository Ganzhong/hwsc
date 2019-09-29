<template>
	<div class="huawei">
		<div class="huaweip">
			<h3>HUAWEI P系列</h3>
			<div class="huaweip01">
				<dl v-for="p of ps">
					<dt><img :src="p.src" /></dt>
					<dd>{{p.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="mate">
			<h3>HUAWEI Mate系列</h3>
			<div class="mate01">
				<dl v-for="m of ms">
					<dt><img :src="m.src" /></dt>
					<dd>{{m.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="nova">
			<h3>HUAWEI nova系列</h3>
			<div class="nova01">
				<dl v-for="n of ns">
					<dt><img :src="n.src" /></dt>
					<dd>{{n.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="changxiang">
			<h3>华为畅享系列</h3>
			<div class="changxiang01">
				<dl v-for="c of cs">
					<dt><img :src="c.src" /></dt>
					<dd>{{c.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="mai">
			<h3>华为麦芒系列</h3>
			<div class="mai01">
				<dl v-for="mai of mais">
					<dt><img :src="mai.src" /></dt>
					<dd>{{mai.name}}</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				ps:[
					{name:'HUAWEI P30',src:'https://res.vmallres.com/pimages/product/6901443293735/428_428_1555465064246mp.png'},
					{name:'HUAWEI P30 Pro',src:'https://res.vmallres.com/pimages/product/6901443293490/428_428_1553080852384mp.png'},
					{name:'HUAWEI P20 Pro',src:'https://res.vmallres.com/pimages/product/6901443227907/428_428_1542767389853mp.png'}
				],
				ms:[
					{name:'HUAWEI Mate30',src:'https://res.vmallres.com/pimages/product/6901443331116/428_428_53700717ABF3AC923E6F287B643C236E7732FD9C964FAE1Bmp.png'},
					{name:'HUAWEI Mate30...',src:'https://res.vmallres.com/pimages/product/6901443331376/428_428_FAF5BBAB67C16D7426B5B1A2A38F9001DED6D011A0EE9977mp.png'},
					{name:'HUAWEI Mate20',src:'https://res.vmallres.com/pimages/product/6901443321315/428_428_1563353009647mp.png'},
					{name:'HUAWEI Mate20...',src:'https://res.vmallres.com/pimages/product/6901443281251/428_428_1546486176415mp.png'},
					{name:'HUAWEI Mate20',src:'https://res.vmallres.com/pimages/product/6901443260263/428_428_1542770851457mp.png'},
					{name:'HUAWEI Mate20 X',src:'https://res.vmallres.com/pimages/product/6901443262182/428_428_1542769704670mp.png'},
					{name:'HUAWEI Mate20...',src:'https://res.vmallres.com/pimages/product/6901443264780/428_428_1539244238246mp.png'}
				],
				ns:[
					{name:'HUAWEI nova 5i Pro',src:'https://res.vmallres.com/pimages/product/6901443316489/428_428_1563781560971mp.png'},
					{name:'HUAWEI nova 5 Pro',src:'https://res.vmallres.com/pimages/product/6901443316168/428_428_1561435068797mp.png'},
					{name:'HUAWEI nova 5i',src:'https://res.vmallres.com/pimages/product/6901443315901/428_428_1560916037515mp.png'},
					{name:'HUAWEI nova 5',src:'https://res.vmallres.com/pimages/product/6901443316373/428_428_1561434028202mp.png'},
					{name:'HUAWEI nova 4',src:'https://res.vmallres.com/pimages/product/6901443278176/428_428_1544693959065mp.png'},
					{name:'HUAWEI nova 4e',src:'https://res.vmallres.com/pimages/product/6901443292110/428_428_1552440645488mp.png'}
				],
				cs:[
					{name:'华为畅享10Plus',src:'https://res.vmallres.com/pimages/product/6901443327690/428_428_C78DF51A34E136BFAAB2BB2EE11B1ED70D235D0C34865586mp.png'},
					{name:'华为畅享9Plus',src:'https://res.vmallres.com/pimages/product/6901443263752/428_428_1542853081338mp.png'},
					{name:'华为畅享9e',src:'https://res.vmallres.com/pimages/product/6901443290031/428_428_1553486414972mp.png'},
					{name:'华为畅享9s',src:'https://res.vmallres.com/pimages/product/6901443290437/428_428_1553051766797mp.png'},
					{name:'华为畅享9',src:'https://res.vmallres.com/pimages/product/6901443272778/428_428_1543457356005mp.png'},
					{name:'华为畅享9e 青春版',src:'https://res.vmallres.com/pimages/product/6901443229918/428_428_1540629967045mp.png'},
					{name:'华为畅享 Max',src:'https://res.vmallres.com/pimages/product/6901443265084/428_428_1542852832819mp.png'}
				],
				mais:[
					{name:'华为麦芒8',src:'https://res.vmallres.com/pimages/product/6901443315307/428_428_1559035092483mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.huawei{
		width:4.8rem;
		height:29rem;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.huaweip h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.huaweip01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;

	}
	.huaweip01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.huaweip01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.huaweip01 dl dt img{
		width:100%;
	}
	.huaweip01 dd{
		width:1.2rem;
	}
	.mate h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.mate01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.mate01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.mate01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.mate01 dl dt img{
		width:100%;
	}
	.mate01 dd{
		width:1.2rem;
	}
	
	.nova h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.nova01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.nova01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.nova01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.nova01 dl dt img{
		width:100%;
	}
	.nova01 dd{
		width:1.2rem;
	}
	.changxiang h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.changxiang01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	
	}
	.changxiang01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.changxiang01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.changxiang01 dl dt img{
		width:100%;
	}
	.changxiang01 dd{
		width:1.2rem;
	}
	.mai h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.mai01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	
	}
	.mai01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.mai01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.mai01 dl dt img{
		width:100%;
	}
	.mai01 dd{
		width:1.2rem;
	}
</style>