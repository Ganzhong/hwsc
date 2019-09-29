<template>
	<div class="big">
		<div class="box1">
			<p>￥{{pages[i].price}}</p>
			<p>{{pages[i].biaoti}}</p>
			<p>{{pages[i].biaoti2}}</p>
		</div>
		
		<div class="box2">
			<p><span>会员专享</span>{{pages[i].youhui}}</p>
			<p><span>商品赠券</span>{{pages[i].youhui2}}</p>
			<p><span>赠送积分</span>{{pages[i].youhui3}}</p>
			<span>促销</span><i class="iconfont icon-gengduo1"></i>
		</div>
	
		

	</div>
</template>

<script>
	export default {
	 		data() {
			return {
				i:0,
				pages: [
				{path: 'https://res.vmallres.com/pimages/cop/photo/AJ6md0joOgZ8DKQ58fYv.jpg',mas:'来自 HUAWEI P30 系列',
				 price:999,
				 biaoti:'荣耀Play3 6.39英寸魅眼全视屏 4000mAh大电池 真4800万AI三摄 麒麟710F自研芯片 全网通4GB+64GB （幻夜黑）',
				 biaoti2:'①V1-V5会员购机限量赠耳机！②晒单限量赠数据线和蓝牙音箱！③赢豪华迪拜游！',
				 youhui:'V1-V5会员赠AM115耳机',
				 youhui2:'购机赠衣食住行豪华券包',
				 youhui3:'购买即赠商城积分，积分可抵现',
				 id:'0'
				
			},
			{path: 'https://res.vmallres.com/pimages/cop/photo/AJ6md0joOgZ8DKQ58fYv.jpg',mas:'来自 HUAWEI P30 系列',
				 price:1000,
				 biaoti:'荣耀Play3 6.39英寸魅眼全视屏 4000mAh大电池 真4800万AI三摄 麒麟710F自研芯片 全网通4GB+64GB （幻夜黑）',
				 biaoti2:'①V1-V5会员购机限量赠耳机！②晒单限量赠数据线和蓝牙音箱！③赢豪华迪拜游！',
				 youhui:'V1-V5会员赠AM115耳机',
				 youhui2:'购机赠衣食住行豪华券包',
				 youhui3:'购买即赠商城积分，积分可抵现',
				 id:'1'
				
			},
			{path: 'https://res.vmallres.com/pimages/cop/photo/AJ6md0joOgZ8DKQ58fYv.jpg',mas:'来自 HUAWEI P30 系列',
				 price:10213200,
				 biaoti:'荣耀Play3 6.39英寸魅眼全视屏 4000mAh大电池 真4800万AI三摄 麒麟710F自研芯片 全网通4GB+64GB （幻夜黑）',
				 biaoti2:'①V1-V5会员购机限量赠耳机！②晒单限量赠数据线和蓝牙音箱！③赢豪华迪拜游！',
				 youhui:'V1-V5会员赠AM115耳机',
				 youhui2:'购机赠衣食住行豪华券包',
				 youhui3:'购买即赠商城积分，积分可抵现',
				 id:'1'
				
			},
			{path: 'https://res.vmallres.com/pimages/cop/photo/AJ6md0joOgZ8DKQ58fYv.jpg',mas:'来自 HUAWEI P30 系列',
				 price:102321300,
				 biaoti:'荣耀Play3 6.39英寸魅眼全视屏 4000mAh大电池 真4800万AI三摄 麒麟710F自研芯片 全网通4GB+64GB （幻夜黑）',
				 biaoti2:'①V1-V5会员购机限量赠耳机！②晒单限量赠数据线和蓝牙音箱！③赢豪华迪拜游！',
				 youhui:'V1-V5会员赠AM115耳机',
				 youhui2:'购机赠衣食住行豪华券包',
				 youhui3:'购买即赠商城积分，积分可抵现',
				 id:'1'
				
			},
			{path: 'https://res.vmallres.com/pimages/cop/photo/AJ6md0joOgZ8DKQ58fYv.jpg',mas:'来自 HUAWEI P30 系列',
				 price:102131200,
				 biaoti:'荣耀Play3 6.39英寸魅眼全视屏 4000mAh大电池 真4800万AI三摄 麒麟710F自研芯片 全网通4GB+64GB （幻夜黑）',
				 biaoti2:'①V1-V5会员购机限量赠耳机！②晒单限量赠数据线和蓝牙音箱！③赢豪华迪拜游！',
				 youhui:'V1-V5会员赠AM115耳机',
				 youhui2:'购机赠衣食住行豪华券包',
				 youhui3:'购买即赠商城积分，积分可抵现',
				 id:'1'
				
			},
			{path: 'https://res.vmallres.com/pimages/cop/photo/AJ6md0joOgZ8DKQ58fYv.jpg',mas:'来自 HUAWEI P30 系列',
				 price:102131200,
				 biaoti:'荣耀Play3 6.39英寸魅眼全视屏 4000mAh大电池 真4800万AI三摄 麒麟710F自研芯片 全网通4GB+64GB （幻夜黑）',
				 biaoti2:'①V1-V5会员购机限量赠耳机！②晒单限量赠数据线和蓝牙音箱！③赢豪华迪拜游！',
				 youhui:'V1-V5会员赠AM115耳机',
				 youhui2:'购机赠衣食住行豪华券包',
				 youhui3:'购买即赠商城积分，积分可抵现',
				 id:'1'
				
			}
					
					

				]

			}
		},
		mounted(){
//			this.$eventBus.$on('xiangqing',(event)=>{
//				this.i = event -1;
//				console.log('=======8888')
//				console.log(this.i)
//			})
			console.log(this.$route.query.id);
			this.i = this.$route.query.id - 1;
		},
		methods:{
			
		}
		
	 }
</script>

<style scoped>
	*{
		font-size: 0.3rem;
	}
	.big{
		width: 100%;
		height: 4.40rem;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
		box-sizing: border-box;
	}
	.box1{
		height:
		
	}
	.box1 p:first-child{
		color: rgb(202,20,29);
		font-size: 0.4rem;
		font-weight: 900;
		
		height: 0.8rem;
		line-height: 0.8rem;
	}
	.box1 p:nth-child(2){
		font-size: 0.32rem;
		text-overflow: -o-ellipsis-lastline;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  line-clamp: 2;
	  -webkit-box-orient: vertical;
	  font-weight: 600;
	}
	.box1 p:nth-child(3){
		color: rgb(202,21,30);
		font-size: 0.24rem;
		margin-top: 0.2rem;
	}
	
	
	.box2{
		text-align: center;
		margin-top: 0.4rem;
		position: relative;
	}
	.box2 p{
		line-height: 0.24rem;
		font-size: 0.24rem;
		color: rgb(51,51,51);
		margin-top: 0.22rem;
		float: left;
		margin-left: 1.1rem;
	}
	.box2  i{
		float: right;
		font-size: 0.48rem;
		color: #666;
		position: absolute;
		top: 0.1rem;
	}
	.box2>span{
		float: left;
		position:absolute;
		top: 0.23rem;
		left: 0.2rem;
		font-size: 0.24rem;
		color: #666;
	}
	.box2 p span:nth-last-child(1){
		color: rgb(239,90,98);
		font-size: 0.22rem;
		border: 1px solid rgb(239,90,98);
		padding: 0.02rem 0.2rem 0.04rem 0.2rem;
		border-radius: 0.19rem;
		margin-right: 0.1rem;
	}
</style>