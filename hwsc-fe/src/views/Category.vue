<template>
    <div id="fenlei">
			<header>
				<div class="swip">
					<div class="a1 iconfont icon-sousuo"></div>
					<div class="swiper01"><p :style="{color:placeholders[index].color}">{{placeholders[index].name}}</p></div>
				</div>
				<div class="denglu"><span class="iconfont icon-xinxi"></span></div>
			</header>
			<div class="liebiao">
				<liebiao></liebiao>
			</div>
			<div class="bigbox">
				<xinpin></xinpin>
				<huawei style="display: none;"></huawei>
			</div>
		</div>
</template>
<script>
	import liebiao from '../components/liebiao.vue';
	import xinpin from '../components/xinpin.vue';
	import huawei from '../components/huawei.vue';
	export default {
		data(){
			return {
			  index : 0,
				placeholders: [
					{name:'Mate 30',color:'red'},
					{name:'荣耀Play3',color:'red'},
					{name:'畅享10 Plus',color:'red'},
					{name:'荣耀20S',color:'red'},
					{name:'HUAWEI P30',color:'red'},
					{name:'荣耀20',color:'black'},
					{name:'荣耀9X',color:'black'},
					{name:'nova 5i Pro',color:'black'},
					{name:'荣耀20i',color:'black'},
					{name:'5G',color:'black'},
					{name:'Mate 20X(5G)',color:'red'},
					{name:'nova 5i',color:'black'}
				]
			}
		},
		mounted(){
			setInterval(()=>{
				this.index++;
				if(this.index>=this.placeholders.length){
					this.index = 0;
				}
			},2000);
		},
		components:{
			liebiao,
			xinpin,
			huawei
		}
		}
</script>
<style scoped>
	#fenlei{
		width:100%;
		height:100%;
	}
	header{
		width:100%;
		height:0.8rem;
		display: flex;
		justify-content: space-around;
	}
	.swip{
		width:6rem;
		height:0.7rem;
		background: #f5f5f5;
		border: none;
		margin: 0.05rem 0;
		border-radius: 0.1rem;
		overflow: hidden;
	}
	.a1{
		font-size: 0.3rem;
		margin-top: 0.15rem;
		margin-left: 0.12rem;
		float: left;
		}
	.swiper01{
		float: left;
		margin-top: 0.1rem;
		margin-left: 0.25rem;
		font-size: 0.3rem;
		}
	.denglu {
		width:1rem;
		height:0.8rem;
		}
	.denglu span{
		font-size: 0.6rem;
		display: block;
		padding: 0.07rem 0.2rem;
		}
	.liebiao{
		width:2.5rem;
		height:100%;
		position: fixed;
		margin-top: 0.2rem;
	}
	.bigbox{
		width:4.8rem;
		height:100%;
		position: fixed;
		right:0;
		overflow-y: scroll;
	}
</style>