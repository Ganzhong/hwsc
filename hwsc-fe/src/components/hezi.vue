<template>
		<div class="hezi">
			<div v-for="tt of hezis"><img v-bind:src= "tt.pic"/>
			<p>{{tt.text}}</p>
			</div>
		</div>
</template>
<script>
	export default {
		data(){
			return {
				hezis:[
					{pic:'https://res.vmallres.com/pimages//pages/squaredInfo/Qad2X6jU9CCFJTIPKamA.png',text:'邀请有礼'},
					{pic:'https://res.vmallres.com/pimages//pages/squaredInfo/fmqAMGAsSJY2SiFc3u8Z.png',text:'会员领劵'},
					{pic:'https://res.vmallres.com/pimages//pages/squaredInfo/iDTusLopIM5waUh7leZO.png',text:'Mate30系列'},
					{pic:'https://res.vmallres.com/pimages//pages/squaredInfo/h88nvpbJne0GkgDCBu87.png',text:'以旧换新'},
					{pic:'https://res.vmallres.com/pimages//pages/squaredInfo/zTjR6lZajKs3EndXN6tu.png',text:'新品众测'}
				]
			}
		}
	}
</script>
<style scoped>
	.hezi{
		width:100%;
		height:1.4rem;
		display: flex;
		justify-content: space-around;
	}
	.hezi > div{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.hezi img{
		width:0.8rem;
		height:0.8rem;
	}
	.hezi p{
		font-size: 0.225rem;
	}
</style>