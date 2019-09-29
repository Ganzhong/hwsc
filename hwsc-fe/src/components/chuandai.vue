<template>
	<div class="shouji">
		<h3>智能穿戴</h3>
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
			<span>发现更多智能穿戴</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'华为儿童手表 3s',price:'￥638',src:'https://res4.vmallres.com/pimages//wapFrontLocation/content/ilrr8533IIwUGveO9QdP.jpg'},
					{name:'荣耀手表梦幻系列',price:'￥1099',src:'https://res4.vmallres.com/pimages//wapFrontLocation/content/XXh8ZKCB18lWjJKoaw0g.png'},
					{name:'HUAWEI WATCH GT 2',price:'￥暂无报价',src:'https://res4.vmallres.com/pimages//wapFrontLocation/content/GCPnLcZI0ce6YfQGW1OR.jpg'},
					{name:'荣耀手表魔法系列',price:'￥799',src:'https://res4.vmallres.com/pimages//wapFrontLocation/content/tBBZtc6FHS1VjfYv2ATV.png'},
				],
				imgs:[
					{name:'HUAWEI WATCH GT',price:'￥299',src:'https://res4.vmallres.com/pimages//product/6901443260607/428_428_1543910753321mp.png'},
					{name:'荣耀手环 5',price:'￥219',src:'https://res4.vmallres.com/pimages//product/6901443329892/428_428_8491DF4C1F686D6118DB6B57B9D3EA316A92B88DD08B29F8mp.png'},
					{name:'华为儿童手表 3 Pro',price:'￥988',src:'https://res4.vmallres.com/pimages//product/6901443254330/428_428_1553777154761mp.png'},
					{name:'华为手环 B5 运动版',price:'￥999',src:'https://res4.vmallres.com/pimages//product/6901443312320/428_428_1560738808266mp.png'},
					{name:'荣耀手环5 篮球版',price:'￥129',src:'https://res4.vmallres.com/pimages//product/6901443325030/428_428_81160976A0B737A72108BC3EF6E15139DB264D7D226211FAmp.png'},
					{name:'华为手环 4A 篮球精灵',price:'￥129',src:'https://res4.vmallres.com/pimages//product/6901443323067/428_428_5B93D612C43541963BFC70FB0DBB53FA4A7D01DD01C80454mp.png'},
					{name:'荣耀手环4',price:'￥169',src:'https://res4.vmallres.com/pimages//product/6901443262472/428_428_1540628828647mp.png'},
					{name:'华为儿童手表 3',price:'￥398',src:'https://res4.vmallres.com/pimages//product/6901443278374/428_428_1554811673276mp.png'},
					{name:'华为手环 3 Pro',price:'￥399',src:'https://res4.vmallres.com/pimages//product/6901443262311/428_428_1552011301146mp.png'},
					{name:'华为手环 3',price:'￥269',src:'https://res4.vmallres.com/pimages//product/6901443288502/428_428_1552011464465mp.png'},
					{name:'荣耀小K 2 儿童手表',price:'￥299',src:'https://res4.vmallres.com/pimages//product/6901443275663/428_428_1545200768218mp.png'},
					{name:'华为手环 B3 青春版',price:'￥499',src:'https://res4.vmallres.com/pimages//product/6901443197262/428_428_1542786877830mp.png'}
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