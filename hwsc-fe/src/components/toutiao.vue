<template>
	<div class="toutiao">
			<span class="q1">商城头条</span>
			<div class="lb01">
<<<<<<< HEAD
				<ul :style="nums[index]">
					<li v-for="msg of msgs"><span class="q3"></span>{{msg.text}}</li>
				</ul>	
=======
				<ul>
					<!-- <transition-group name='fadeitem'> -->
					<li v-for="msg of msgs"><span class="q3"></span>{{msg.text}}</li>
					<!-- </transition-group> -->
				</ul>
>>>>>>> 499a1a6ae3b261ae926a9794947b2b6636dca7a2
			</div>
			<span class="q2" @click="tofaxian">更多</span>
	</div>
</template>
<script>
	export default {
			data(){
			return {
				index:0,
<<<<<<< HEAD
				nums:[
					{marginTop: '0rem'},
					{marginTop: '-1.81rem', transition: 'all 1.5s'},
					{marginTop: '-3.62rem', transition: 'all 1.5s'},
					{marginTop: '-5.43rem', transition: 'all 1.5s'},
					{marginTop: '-7.24rem', transition: 'all 1.5s'},
					
					
				],
=======
>>>>>>> 499a1a6ae3b261ae926a9794947b2b6636dca7a2
				msgs:[
					{text:'年度美学巨作丨HUAWEI Mate 30 系列官方主题重磅上线'},
					{text:'荣耀20S评测丨4800万像素遇上麒麟810会有怎么的新体验'},
					{text:'参与互动赢荣耀20 PRO联名闪电鞋，快来参与！'},
<<<<<<< HEAD
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
=======
					{text:'新品众测：三思全彩智能筒灯，流光溢彩智能生活'}
				]
			}
		},
>>>>>>> 499a1a6ae3b261ae926a9794947b2b6636dca7a2
		methods:{
			tofaxian(){
				this.$router.push({name:"content"});
			}
		}
<<<<<<< HEAD
=======
// 		mounted(){
// 			setInterval(()=>{
// 				this.index++;
// 				if(this.index>=3){
// 					this.index = 0;
// 				}
// 			},4000)
// 		}
>>>>>>> 499a1a6ae3b261ae926a9794947b2b6636dca7a2
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
<<<<<<< HEAD
		margin-bottom: 1rem;
=======
>>>>>>> 499a1a6ae3b261ae926a9794947b2b6636dca7a2
	}
	.q2{
		line-height: 0.8rem;
		font-size: 0.28rem;
		float: left;
		margin-left: 0.3rem;
		color:gray;
	}
<<<<<<< HEAD
	
=======
/* 	.fadeitem-li{
		position:relative;
	}
	.fadeitem-enter-active,.fadeitem-leave-active{
		transition:top 0.5s;
	}
	.fadeitem-enter,.fadeitem-leave-to{
		top:-100px;
	}
	.fadeitem-enter-to,.fadeitem-leave{
		top:0px;
	} */
>>>>>>> 499a1a6ae3b261ae926a9794947b2b6636dca7a2
</style>