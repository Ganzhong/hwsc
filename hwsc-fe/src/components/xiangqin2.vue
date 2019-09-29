<template>
	<div class="xiangqin2">
		<div class="box1" v-for="box of boxs">
			<dl>
				<dt><img :src="box.src"/></dt>
				<dd>{{box.name}}</dd>
				<dd>{{box.des}}</dd>
				<dd>{{box.price}}</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				boxs:[
					{name:'HUAWEI Mate 20 X (5G)',des:'5G双模全网通',price:'￥6199',src:'https://res.vmallres.com/pimages//product/6901443331635/428_428_8B3334C6C3CF84495775E9D6CFFFF15D2AD64AA924A09AB5mp.png'},
					{name:'荣耀20S',des:'荣耀最强自拍手机',price:'￥1899',src:'https://res.vmallres.com/pimages//product/6901443323753/428_428_189FA79392B572C21EE009917E689200B6B6089FEB1C4ED9mp.png'},
					{name:'nova 5i Pro',des:'赠好礼|享6期免息',price:'￥2199',src:'https://res.vmallres.com/pimages//product/6901443316496/428_428_1563762865294mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.xiangqin2{
		width:100%;
		height:4rem;
		display: flex;
		justify-content: space-around;
	}
	.box1{
		width:30%;
		height:3.65rem;
		text-align: center;
		margin-top: 0.1rem;
		background: #f9f9f9;
	}
	.box1 dt{
		width:1.5rem;
		height:1.5rem;
		padding-top: 0.2rem;
		padding-left: 0.39rem;
		padding-bottom: 0.4rem;
	}
	.box1 dt img{
		width:100%;
	}
	.box1 dd{
		font-size: 0.25rem;
		color:gray;
	}

</style>