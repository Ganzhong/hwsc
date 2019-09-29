<template>
	<div class="xinpin">
		<div class="pic1"><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/eUpzv8uxAWPXmKgLSukB.jpg"/></div>
		<div class="pic2"><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/20trF7KG0Bvs5IRE4zB3.jpg"/></div>
		<div class="hezi">
			<div><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/4BypjqT2vl73hGpyNDSe.png"/></div>
			<div><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/tz59lQfBTJhOFzPBnJzT.png"/></div>
			<div><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/LiUP5PWupx2zr71l73Vj.png"/></div>
			<div><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/f9izYS4lPGwuwlYURu8M.png"/></div>
			<div><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/0GVOeFmRKIANQvkt9dUs.png"/></div>
		</div>
		<div class="shouji">
			<h3>智能家居分类</h3>
			<div class="shouji01">
				<dl v-for="shoupic of shoupics">
					<dt><img :src="shoupic.src" /></dt>
					<dd>{{shoupic.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="bijiben">
			<h3>智慧屏&笔记本</h3>
			<div class="bijiben01">
				<dl v-for="pinbanpic of pinbanpics">
					<dt><img :src="pinbanpic.src" /></dt>
					<dd>{{pinbanpic.name}}</dd>
				</dl>
			</div>
		</div>
		<div class="chuandai">
			<h3>平板&穿戴</h3>
			<div class="chuandai01">
				<dl v-for="chuandaipic of chuandaipics">
					<dt><img :src="chuandaipic.src" /></dt>
					<dd>{{chuandaipic.name}}</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				shoupics:[
					{name:'HUAWEI Mate30',src:'https://res.vmallres.com/pimages/product/6901443331116/428_428_53700717ABF3AC923E6F287B643C236E7732FD9C964FAE1Bmp.png'},
					{name:'荣耀Play3',src:'https://res.vmallres.com/pimages/product/6901443333400/428_428_FFF52FC8300511223A30ED8401D76D30BCBDBC5A3F75596Amp.png'},
					{name:'荣耀20S',src:'https://res.vmallres.com/pimages/pages/mobile/frontCategory/1SyGasPAHgSa4TrEoNnb.jpg'},
					{name:'HUAWEI Mate30...',src:'https://res.vmallres.com/pimages/product/6901443331376/428_428_FAF5BBAB67C16D7426B5B1A2A38F9001DED6D011A0EE9977mp.png'},
					{name:'HUAWEI',src:'https://res.vmallres.com/pimages/product/6901443316489/428_428_1563781560971mp.png'},
					{name:'荣耀20',src:'https://res.vmallres.com/pimages/product/6901443304332/428_428_1558244819612mp.png'},
					{name:'HUAWEI',src:'https://res.vmallres.com/pimages/product/6901443316168/428_428_1561435068797mp.png'},
					{name:'荣耀9X',src:'https://res.vmallres.com/pimages/product/6901443321339/428_428_1563503515663mp.png'}
				],
				pinbanpics:[
					{name:'华为智慧屏',src:'https://res.vmallres.com/pimages/product/6901443331093/428_428_21EEE8FC1E9B970CAA527CC00F668B933528C62FBC4CD1E4mp.png'},
					{name:'荣耀智慧屏',src:'https://res.vmallres.com/pimages/product/6901443293209/428_428_5471E848D305257CAAF7E6DFAC9C9F5BF22A98D37BBDA2A6mp.png'},
					{name:'HUAWEI Mate...',src:'https://res.vmallres.com/pimages/product/6901443297962/428_428_1555752016264mp.png'}
				],
				chuandaipics:[
					{name:'华为平板M6 10.8英寸',src:'https://res.vmallres.com/pimages/product/6901443332472/428_428_EFE8AD846A086E6C533A706ECDE560243B730E247BA9E04Emp.png'},
					{name:'荣耀平板5 8英寸',src:'https://res.vmallres.com/pimages/product/6901443288359/428_428_1552053266691mp.png'},
					{name:'华为平板M6 8.4英寸',src:'https://res.vmallres.com/pimages/product/6901443319886/428_428_1560822806587mp.png'},
					{name:'荣耀手环5',src:'https://res.vmallres.com/pimages/product/6901443310593/428_428_1562750353603mp.png'},
					{name:'HUAWEI WATCH...',src:'https://res.vmallres.com/pimages/product/6901443320202/428_428_9F646DC4DD50AD8591CE902EB3438CCFD551FD9D5311E3E9mp.png'},
					{name:'荣耀手表魔法系列',src:'https://res.vmallres.com/pimages/product/6901443267248/428_428_1540544249192mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.xinpin{
		width:4.8rem;
		height:22rem;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.pic1{
		width:4.7rem;
		height:1.4rem;
		margin: 0 0.05rem;
		overflow: hidden;
	}
	.pic1 img{
		width:100%;
		padding-top: 0.1rem;
		border-radius: 0.3rem;
	}
	.pic2{
		width:4.7rem;
		height:1.4rem;
		margin: 0 0.05rem;
		overflow: hidden;
	}
	.pic2 img{
		width:100%;
		padding-top: 0.2rem;
		border-radius: 0.3rem;
	}
	.hezi{
		width:4.8rem;
		height:1rem;
		margin-top: 0.2rem;
		display: flex;
		overflow-x: auto;
		overflow-y: hidden;
	}
	.hezi::-webkit-scrollbar{
		display: none;
	} 
	.hezi>div{
		width:1.5rem;
		height:0.8rem;
		font-size: 0.16rem;
		margin-top: 0.1rem;
		margin-left: 0.1rem;
	}
	.hezi>div img{
		width:1.5rem;
		border-radius: 0.2rem;
	}
	.shouji h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.shouji01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;

	}
	.shouji01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.shouji01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.shouji01 dl dt img{
		width:100%;
	}
	.shouji01 dd{
		width:1.2rem;
	}
	.bijiben h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.bijiben01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.bijiben01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.bijiben01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.bijiben01 dl dt img{
		width:100%;
	}
	.bijiben01 dd{
		width:1.2rem;
	}
	
	.chuandai h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.chuandai01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.chuandai01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.chuandai01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.chuandai01 dl dt img{
		width:100%;
	}
	.chuandai01 dd{
		width:1.2rem;
	}
</style>