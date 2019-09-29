<template>
		<div class="big">
				<div class="yanse">
					<i>颜色</i>
					<a >幻夜黑</a>
					<a >极光蓝</a>
					<a >媚焰红</a>
				
				</div>
				
				
				<div class="banben">
					<i>版本</i>
					<a >全网通 4GB+64GB</a>
					<a >全网通 6GB+64GB</a>
					<a class="ggg">全网通 6GB+128GB</a>
				</div>
				<div class="taocan">
					<i>套餐</i>
					<a >单品</a>
					<a >套餐一</a>
					<a >套餐二</a>
				</div>
				<div class="shuliang">
					<i>数量</i>
					<p><span class="iconfont icon-jian" @click="jian"></span>{{count}}<span class="iconfont icon-jia2" @click="jia"></span></p>
					
				</div>
				
				<div class="baozhang">
					<i>保障</i>
					<a >选购</a>
					<a >碎屏保</a>
					<a >延长宝</a>
					<span class="iconfont icon-gengduo1"></span>
					
				</div>
				<div class="dapei">
					<i>搭配</i>
					<img src="https://res.vmallres.com/pimages//product/6901443310593/142_142_1562750353603mp.png" /><span class="iconfont icon-jia2"></span>
					<img src="https://res.vmallres.com/pimages//product/6901443225897/142_142_1554949161238mp.png" /><span class="iconfont icon-jia2"></span>
					<img src="https://res.vmallres.com/pimages//product/6901443172221/142_142_1542856308170mp.png" /><span class="iconfont icon-jia2"></span>
					<img src="https://res.vmallres.com/pimages//product/6901443232208/142_142_1542961154080mp.png" />
					<em class="iconfont icon-gengduo1"></em>
				</div>
				<div class="songzhi">
					<i>送至</i>
					<p>北京&nbsp;北京市&nbsp;朝阳区</p><br />
					<p>现货</p>
					
					<span class="iconfont icon-gengduo1"></span>
				</div>
				<div class="fuwu">
					<i>服务</i>
					<p><em class="iconfont icon-gouhao"></em>已满48元包邮</p><br />
					<p><em class="iconfont icon-gouhao"></em>由华为终端提供商品、发货开票及售后服务</p>
					
					<!--<span class="iconfont icon-gengduo1"></span>-->
				</div>
				
				
				<div class="huanxin">
					<i class="iconfont icon-shouhuohuishou"></i>
					<p><i>以旧换新</i>限时领券，享回收加价补贴</p>
					
					
					<!--<span class="iconfont icon-gengduo1"></span>-->
				</div>
				
				
				<div class="pingjia">
					
					<span class="aaaa">用户评价  （ 3211条）</span>
					
					<div class="pingjia-box">
						<div>
							<img src="../../public/img/1.jpg" />
						</div>
						<div>
							<img src="../../public/img/2.jpg" />
						</div>
						<div>
							<img src="../../public/img/1.jpg" />
						</div>
						<div>
							<img src="../../public/img/2.jpg" />
						</div>
						<div>
							<img src="../../public/img/1.jpg" />
						</div>
						<div>
							<img src="../../public/img/2.jpg" />
						</div>
					</div>
					<span class="quanbuc1 bbbbb">
						查看全部评论
						
					</span>
					<span class="quanbuc1">
						购买咨询 (32)
						
					</span>
				</div>
				
				
				
				
				<div class="canshu">
					
					<p>规格参数</p>
					
					<div class="img-box">
						
					</div>
					<span class="quanbuc">
						查看全部参数
						
					</span>
					
				</div>
				
				
				
				
				
		</div>
</template>

<script>
	export default {
	 		data() {
			return {
				count:0
			
					
					

				

			}
		},
		methods: {
			jian(){
				if(this.count>0){
					this.count--;
					
				}
				
			},
			jia(){
				this.count++;
				
			}
		}
		
	 }
</script>

<style scoped>
	.big .pingjia{
		margin-top: 0.4rem;
		height: 4.7754rem;
		overflow: hidden;
		position: relative;
		
		text-align: left;
		
	}	
	
	.big .aaaa{
		
		float: left;
		margin-left:0.3rem ;
		font-size: 0.26rem;
		font-weight: 600;
		position: absolute;
		left: 0.1rem;
		
		
	}
	
	.big .quanbuc1{
		border: 1px solid rgb(136, 136, 136);;
		display: inline-block;
		padding: 0.14rem 0.5rem;
		padding-top: 0.13rem;
		font-size: 0.28rem;
		margin-top: 0.4rem;
		border-radius: 0.3rem;
		color: #333;
		cursor: pointer;
		margin-left: 0.3rem;
		
	}
	
	.big .pingjia .bbbbb{
		margin-left: 0.9rem;
	}
	
	.big .pingjia-box{
		height: 2.5826rem;
		
		
		
		margin-top: 0.6rem;
		overflow-x: auto;
		
		
	}
	.big .pingjia-box div{
		display: inline-block;
		
		height: 2.5826rem;
		width:6.4994rem ;
		
	}
	
	.big .pingjia-box div img{
		width: 100%;
	}
	
	
	
	
	
	.big .canshu{
		margin-top: 0.4rem;
		height: 4.7754rem;
		overflow: hidden;
		position: relative;
		
	}
	.canshu>p{
		float: left;
		margin-left:0.3rem ;
		font-size: 0.26rem;
		font-weight: 600;
		position: absolute;
		left: 0.1rem;
		
	}
	
	.big .img-box{
		height: 2.4582rem;
		width: 100%;
		background: url(../../public/img/0.jpg) no-repeat;
		background-size:cover;
		background-position-y:-4rem ;
		box-shadow:0 0 30px 10px rgba(255,255,255,.7) inset;
		margin-top: 0.6rem;
		
		
	}
	
	.big .quanbuc{
		border: 1px solid rgb(136, 136, 136);;
		display: inline-block;
		padding: 0.14rem 0.8rem;
		padding-top: 0.13rem;
		font-size: 0.26rem;
		margin-top: 0.4rem;
		border-radius: 0.3rem;
		color: #333;
		cursor: pointer;
	}
	
	
	
	
	*{
		font-size: 0.32rem;
		text-decoration: none;
	}
	.big{
		width: 100%;
		
		margin-top: 0.4rem;
	}
	.big div{
		text-align: center;
		height:0.9rem
	}
	.big .banben{
		height: 1.4rem;
	}
	.big div>i{
		float: left;
		position:absolute;
		top: 0.23rem;
		left: 0.43rem;
		font-size: 0.24rem;
		color: #666;
		font-style: normal;
	}
	.big div a{
		margin-right: 0.1rem;
		color: rgb(51, 51, 51);
		font-size: 0.24rem;
		border: 1px solid #666;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
		padding-top: 0.06rem;
		padding-bottom: 0.06rem;
		border-radius: 0.22rem;
		display: inline-block;
		margin-top: 0.2rem;
		float: left;
		
	}
	.big div a:first-of-type{
		margin-left: 1.3rem;
	}
	.ggg{
		margin-left: 1.282rem;
	}
	
	.shuliang>p{
		float: left;
		margin-left: 1.3rem;
		margin-top: 0.1rem;
		line-height:0.42rem ;
		height: 0.9rem;
		position: relative;
		font-size: 0.38rem;
		
	}
	.shuliang>p>span:first-of-type{
		font-size: 0.55rem;
		margin-right: 0.2rem;
		display: inline-block;
		margin-top: 0.1rem;
		position: relative;
		top: 0.03rem;
		color: #666;
	}
	.shuliang>p>span:nth-of-type(2){
		font-size: 0.48rem;
		margin-left: 0.2rem;
		display: inline-block;
		color: #666;
		position: relative;
		top: 0.01rem;
		
	}
	.big .baozhang{
		margin-top: 0.1rem;
		position: relative;
	}
	.big .baozhang span{
		position: absolute;
		font-size: 0.45rem;
		right: 0.6rem;
		top:0.24rem;
		
	}
	.dapei{
		height: 0.9372rem;
		position: relative;
		margin-top:0.6rem ;
	}
	.dapei span{
		position: relative;
		top: -0.3rem;
		font-size: 0.26rem;
	}
	.dapei img{
		width:0.9372rem;
	}
	.dapei em{
		position: absolute;
		font-size: 0.45rem;
		right: 0.6rem;
		top:0.24rem;
	}
	.songzhi{
		margin-top:0.8rem ;
		position: relative;
	}
	.songzhi p:first-of-type{
		font-size: 0.26rem;
		float: left;
		margin-left: 1.4rem;
		
	}
	.songzhi p:nth-of-type(2){
		font-size: 0.24rem;
		float: left;
		color: red;
		margin-left: 1.4rem;
	}
	.songzhi span{
		position: absolute;
		font-size: 0.45rem;
		right: 0.6rem;
		top:0.24rem;
	}
	
	
	
	.fuwu em{
		font-size: 0.2rem;
	}
	.fuwu p{
		font-size: 0.24rem;
		float: left;
		margin-left: 1.2rem;
	}
	.fuwu p em{
		color: red;
		margin-right: 0.1rem;
	}
	.big .huanxin>i{
		font-size: 0.46rem;
	
	}
	
	.huanxin p{
		float: left;
		margin-left: 1.3rem;
		margin-top: 0.28rem;
		font-size: 0.22rem;
	}
	.huanxin p i{
		color: #333;
		font-size: 0.24rem;
		font-style: normal;
		margin-right: 0.3rem;
		
	}
</style>