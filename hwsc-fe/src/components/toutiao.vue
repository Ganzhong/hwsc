<template>
	<div class="toutiao">
			<span class="q1">商城头条</span>
			<div class="lb01">
				<ul :style="nums[index]">
					<li v-for="msg of msgs"><span class="q3"></span>{{msg.text}}</li>
				</ul>	
			</div>
			<span class="q2" @click="tofaxian">更多</span>
	</div>
</template>
<script>
	export default {
			data(){
			return {
				index:0,
				nums:[
					{marginTop: '0rem'},
					{marginTop: '-1.81rem', transition: 'all 1.5s'},
					{marginTop: '-3.62rem', transition: 'all 1.5s'},
					{marginTop: '-5.43rem', transition: 'all 1.5s'},
					{marginTop: '-7.24rem', transition: 'all 1.5s'},
					
					
				],
				msgs:[
					{text:'年度美学巨作丨HUAWEI Mate 30 系列官方主题重磅上线'},
					{text:'荣耀20S评测丨4800万像素遇上麒麟810会有怎么的新体验'},
					{text:'参与互动赢荣耀20 PRO联名闪电鞋，快来参与！'},
					{text:'新品众测：三思全彩智能筒灯，流光溢彩智能生活'},
					{text:'年度美学巨作丨HUAWEI Mate 30 系列官方主题重磅上线'},
				]
			}
		},
		mounted(){
			setInterval(()=>{
				this.index = (this.index + 1) % this.msgs.length;
			},2500);
		},
		methods:{
			tofaxian(){
				this.$router.push({name:"content"});
			}
		}
	}
</script>
<style scoped>
	.toutiao{
		width:100%;
		height:0.8rem;
	}
	.q1{
		line-height: 0.8rem;
		color:black;
		font-size: 0.35rem;
		font-weight: bold;
		margin-left: 0.3rem;
		float:left;
	}
	.q3{
		display: inline-block;
		width:0.12rem;
		height:0.12rem;
		background: gray;
		margin-right: 0.2rem;
		border-radius: 100%;
	}
	.lb01{
		float: left;
		line-height: 0.8rem;
		font-size: 0.28rem;
		width:4rem;
		height:0.8rem;
		padding-left: 0.2rem;
		overflow: hidden;
	}
	.lb01 ul li{
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin-bottom: 1rem;
	}
	.q2{
		line-height: 0.8rem;
		font-size: 0.28rem;
		float: left;
		margin-left: 0.3rem;
		color:gray;
	}
	
</style>