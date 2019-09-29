<template>
	<div class="xinpin">
		<div class="rongyao">
			<h3>荣耀系列</h3>
			<div class="rongyao01">
				<dl v-for="shop of shops">
					<dt><img :src="shop.src" /></dt>
					<dd>{{shop.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="rong">
			<h3>荣耀畅玩系列</h3>
			<div class="rong01">
				<dl v-for="q of qs">
					<dt><img :src="q.src" /></dt>
					<dd>{{q.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="yidong">
			<h3>移动4G+专区</h3>
			<div class="yidong01">
				<dl v-for="y of ys">
					<dt><img :src="y.src" /></dt>
					<dd>{{y.name}}</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				shops:[
					{name:'荣耀Play3',src:'https://res.vmallres.com/pimages/product/6901443333400/428_428_FFF52FC8300511223A30ED8401D76D30BCBDBC5A3F75596Amp.png'},
					{name:'荣耀20S',src:'https://res.vmallres.com/pimages/product/6901443323777/428_428_2F1BDEE1FA48AA45CEF803EA37F7EDE62A5F333E5AB30D20mp.png'},
					{name:'荣耀9X',src:'https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png'},
					{name:'荣耀20S',src:'https://res.vmallres.com/pimages/product/6901443320370/428_428_1562914659034mp.png'},
					{name:'荣耀9X PRO',src:'https://res.vmallres.com/pimages/product/6901443320394/428_428_1563504284133mp.png'},
					{name:'荣耀20 PRO',src:'https://res.vmallres.com/pimages/product/6901443315338/428_428_1559306427457mp.png'},
					{name:'荣耀20i',src:'https://res.vmallres.com/pimages/product/6901443298266/428_428_1560477702935mp.png'},
					{name:'荣耀V20',src:'https://res.vmallres.com/pimages/product/6901443280995/428_428_1545877507789mp.png'},
					{name:'荣耀Magic2',src:'https://res.vmallres.com/pimages/product/6901443269778/428_428_1540951264378mp.png'},
					{name:'荣耀8X',src:'https://res.vmallres.com/pimages/product/6901443261482/428_428_1550885454087mp.png'},
					{name:'荣耀10青春版',src:'https://res.vmallres.com/pimages/product/6901443273959/428_428_1555729935843mp.png'},
					{name:'荣耀Note10',src:'https://res.vmallres.com/pimages/product/6901443253975/428_428_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png'},
					{name:'荣耀8X Max',src:'https://res.vmallres.com/pimages/product/6901443258574/428_428_1550885810815mp.png'},
					{name:'荣耀Play3e',src:'https://res.vmallres.com/pimages/product/6901443329243/428_428_FADB1B48C9C92E3C47B8518FC93F9747F2D6549ACC4B1FD7mp.png'}
				],
				qs:[
					{name:'荣耀畅玩8',src:'https://res.vmallres.com/pimages/product/6901443310746/428_428_1562638774891mp.png'},
					{name:'荣耀畅玩8A',src:'https://res.vmallres.com/pimages/product/6901443277735/428_428_1546504342739mp.png'},
					{name:'荣耀畅玩7',src:'https://res.vmallres.com/pimages/product/6901443229857/428_428_1539912870678mp.png'}
				],
				ys:[
					{name:'荣耀8X',src:'https://res.vmallres.com/pimages/product/6901443261536/428_428_1551061924263mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.xinpin{
		width:4.8rem;
		height:18rem;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.rongyao h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.rongyao01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;

	}
	.rongyao01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.rongyao01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.rongyao01 dl dt img{
		width:100%;
	}
	.rongyao01 dd{
		width:1.2rem;
	}
	.rong h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.rong01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.rong01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.rong01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.rong01 dl dt img{
		width:100%;
	}
	.rong01 dd{
		width:1.2rem;
	}
	
	.yidong h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.yidong01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.yidong01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.yidong01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.yidong01 dl dt img{
		width:100%;
	}
	.yidong01 dd{
		width:1.2rem;
	}
</style>