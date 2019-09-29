<template>
	<div class="xinpin">
		<div class="pic1"><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/q9Fs1swTmk8qRWBy4OoJ.jpg"/></div>
		<div class="pic2"><img src="https://res.vmallres.com/pimages/pages/mobile/frontCategory/sfrvq7ZszYj68iTsa2x5.jpg"/></div>
		<div class="zhihui">
			<h3>智慧屏</h3>
			<div class="zhihui01">
				<dl v-for="pinbanpic of pinbanpics">
					<dt><img :src="pinbanpic.src" /></dt>
					<dd>{{pinbanpic.name}}</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				pinbanpics:[
					{name:'华为智慧屏',src:'https://res.vmallres.com/pimages/product/6901443331093/428_428_21EEE8FC1E9B970CAA527CC00F668B933528C62FBC4CD1E4mp.png'},
					{name:'荣耀智慧屏',src:'https://res.vmallres.com/pimages/product/6901443293209/428_428_5471E848D305257CAAF7E6DFAC9C9F5BF22A98D37BBDA2A6mp.png'}
				]
			}
		}
	}
</script>
<style scoped>
	.xinpin{
		width:4.8rem;
		height:12rem;
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
	.zhihui h3{
		font-size: 0.35rem;
		text-align: center;
		font-weight: normal;
		padding-top: 0.2rem;
	}
	.zhihui01{
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.3rem;
	}
	.zhihui01 dl{
		text-align: center;
		font-size: 0.2rem;
		margin: 0 0.2rem;
		margin-bottom: 0.2rem;
	}
	.zhihui01 dl dt{
		width:1.2rem;
		height:1.3rem;
	}
	.zhihui01 dl dt img{
		width:100%;
	}
	.zhihui01 dd{
		width:1.2rem;
	}
	
</style>