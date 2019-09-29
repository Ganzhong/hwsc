<template>
	<div class="timer">
		<h3>
			<span>限时购</span>
			<i class="iconfont icon-shandian"></i>
			<span>{{hours}}:{{minutes}}:{{seconds}}</span>
			<span>后结束</span>
		</h3>
		<div class="shops">
			<dl v-for="shop of imgList">
				<dt><img :src="shop.src"/></dt>
				<dd>{{shop.name}}</dd>
				<dd style="color:red;">{{shop.info}}</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	function addNum(timer){
    return timer>=10 ? timer : "0"+timer
}
	export default {
		data(){
			return {
				hours:'',
				minutes:'',
				seconds:'',
				imgList:[
                {src:'https://res.vmallres.com/pimages//product/6901443309177/142_142_D6F5C5B6D22964AF9F6F9DFBE41D44C50423B42CE219D9A1mp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443280988/142_142_1545877216682mp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443319756/142_142_C1BD04C38EB887D9B1C911881CD34BAB44FF95CD90558E39mp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443329892/142_142_8491DF4C1F686D6118DB6B57B9D3EA316A92B88DD08B29F8mp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443332472/142_142_EFE8AD846A086E6C533A706ECDE560243B730E247BA9E04Emp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443253975/142_142_09C9E11CCB5B016D635E8958AB4D799FF03FDB678E25D4AAmp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443287987/142_142_BA7DE016E66676BEC449AEE43F67A9FBD5F2D61A8A11CEB4mp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443255696/142_142_1558941997467mp.png',name:'荣耀V20',info:'￥2099'},
                {src:'https://res.vmallres.com/pimages//product/6901443174256/142_142_1542854411097mp.png',name:'荣耀V20',info:'￥2099'},
                ]
			}
		},
		mounted(){
			let target = new Date("2019-10-1").getTime();
			setInterval(()=>{
				let shijian = new Date().getTime();
				let cha = target - shijian;
				let hours = Math.floor(cha/1000/60/60);
				let minutes = Math.floor(cha%(60*60*1000)/(1000*60));
				let seconds = Math.floor(cha%(60*1000)/1000); 
				this.hours = addNum(hours);
				this.minutes = addNum(minutes);
				this.seconds = addNum(seconds);
			},1000)
		}
	}
</script>
<style scoped>
	.timer{
		width:100%;
		height:3rem;
		background: #F4F4F4;
	}
	 h3{
		text-align: center;
		height:0.5rem;
		font-size: 0.35rem;
		padding-top: 0.15rem;
	}
	h3 i{
		font-size: 0.35rem;
		color:red;
		margin:0 0.15rem;
	}
	h3 span:nth-child(4){
		font-size:0.3rem ;
		color:gray;
		margin-left: 0.3rem;
	}
	.shops{
		display:flex;
		overflow-x: scroll;
		overflow-y: hidden;
		font-size: 0.25rem;
		text-align:center;
		margin: .18rem 0  0.2rem;
	}
	.shops::-webkit-scrollbar{
		display: none;
	} 
	.shops dl{
		background: white;
		margin:0 0.13rem;
		border-radius: 0.15rem;
	}
	.shops dt{
    width: 1.70rem;
	}
</style>