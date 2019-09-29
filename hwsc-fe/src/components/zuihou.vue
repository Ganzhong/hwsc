<template>
	<div class="shouji">
		<h3>精选配件</h3>
		<div class="chatu"><img src="https://res.vmallres.com/pimages//pages/picImages/GVovN0kUXHt9wTXJfbuy.jpg"/></div>
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
			<span>发现更多精选配件</span>
			<i class="iconfont icon-youjiantou"></i>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				boxs:[
					{name:'海备思高清无线投屏器',price:'￥229',src:'https://res8.vmallres.com/pimages//wapFrontLocation/content/tsI6EWRh6cVIZJWuIMOy.jpg'},
					{name:'手游游戏手柄',price:'￥212',src:'https://res8.vmallres.com/pimages//wapFrontLocation/content/TezAsdkWjpfjv7tvbgbv.jpg'},
					{name:'科大讯飞翻译器',price:'￥2399',src:'https://res8.vmallres.com/pimages//wapFrontLocation/content/hnwE5NUO60rEFZYCeFWy.jpg'},
					{name:'锐舞物理灭蚊器',price:'￥155',src:'https://res8.vmallres.com/pimages//wapFrontLocation/content/BbjoUBfvXBVSCx5xsxja.jpg'},
				],
				imgs:[
					{name:'青稞智能指纹锁',price:'￥1799',src:'https://res8.vmallres.com/pimages//product/GB3102150087901/428_428_1563349439570mp.png'},
					{name:'舒华A9跑步机',price:'￥2999',src:'https://res8.vmallres.com/pimages//product/6927819509002/428_428_1562547834122mp.png'},
					{name:'贝克巴斯垃圾处理器厨房厨余粉碎机',price:'￥1699',src:'https://res8.vmallres.com/pimages//product/6970750404005/428_428_B61B15CFA5513376481D1445B5334117D39336D2BF806455mp.png'},
					{name:'扫拖一体扫地机器人',price:'￥1599',src:'https://res8.vmallres.com/pimages//product/GB3102150074701/428_428_1556001406596mp.png'},
					{name:'锐舞车载活性炭甲醛捕捉植物香膏',price:'￥156',src:'https://res8.vmallres.com/pimages//product/6938208241670/428_428_1563356375482mp.png'},
					{name:'便携式折叠电水壶',price:'￥269',src:'https://res8.vmallres.com/pimages//product/6953349827972/428_428_B5641A47E54A2AD11C9DD6A055746EF9BD27A2B5C0C72DC7mp.png'},
					{name:'傅龙 复古早餐系列 多土炉',price:'￥519',src:'https://res8.vmallres.com/pimages//product/8004399761162/428_428_DB3931B7011AC94A120E87677A5D76811185E94E76F0EA8Emp.png'},
					{name:'家用小型手持料理机',price:'￥299',src:'https://res8.vmallres.com/pimages//product/8021098770448/428_428_F4D95A02207088F31A22B8E088368DF73D8BD8C2FA676EFEmp.png'},
					{name:'罗技无线蓝牙键盘',price:'￥159',src:'https://res8.vmallres.com/pimages//product/6920377904210/428_428_80E44ABA57114FA68566834AF9B9B92B14090237954F4311mp.png'},
					{name:'佑美家用静音跑步机',price:'￥1999',src:'https://res8.vmallres.com/pimages//product/6972480870005/428_428_1559804765264mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.shouji{
		height:18rem;
		border-bottom: #eeeeee solid 0.2rem;
	}
	.chatu{
		width:96%;
		height:2rem;
		background: #000088;
		overflow: hidden;
		border-radius: 0.2rem;
		margin-left: 0.15rem;
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