<template>
	<div id="con">
		<div class="top-f" @click="testa">发现频道</div>
		<div class="big">
			
			<div class="box1">
				<img src="https://res.vmallres.com/pimages//pages/picImages/pPIyf3hlRUdD3Tg15P1x.jpg" class="top-img" />
			</div>
			<div class="box2">
				<ul>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_headline.png" />
							<p>商城公告</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages//cop/image/2019/tiHS593NPXbqgwfT47xk.png" />
							<p>商城公告</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_fans.png" />
							<p>商城公告</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages///cop/image/2019/nwylDYIPCm4pn2hNwA46.png" />
							<p>商城公告</p>
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/nwap/20190115/staticm/img/find/icon_public_surver.png" />
							<p>商城公告</p>
						</a>
					</li>

				</ul>
			</div>

			<div class="box3">
				<h1>商城头条</h1>
				<span>声明<i class="iconfont icon-toubaoshengming"></i></span>

				<ul>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages/cop/newType/92ME2SypV9gvDJPOsPH8.png" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages/cop/newType/YVZoCF8B6yp7t0AckfrY.png" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages/cop/newType/92ME2SypV9gvDJPOsPH8.png" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages/cop/newType/0JkZba0fXbu73EJDCKps.png" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages/cop/newType/YVZoCF8B6yp7t0AckfrY.png" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages/cop/newType/YVZoCF8B6yp7t0AckfrY.png" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="https://res.vmallres.com/pimages/cop/newType/YVZoCF8B6yp7t0AckfrY.png" />
						</a>
					</li>
				</ul>

			</div>

			<box4></box4>
			
			<div class="box5">
				<a href="#">发现更多商城头条 <i class="iconfont icon-youjiantou"></i></a>
			</div>
			
			<box6></box6>
			
			
			<div class="box7">
				<a href="#">发现更多新摄汇 <i class="iconfont icon-youjiantou"></i></a>
			</div>
			
			
			
			<box8></box8>
			
			
		</div>
	</div>
</template>

<script>
	
import box4 from '../find/findlist';
import box6 from '../find/tuce';
import box8 from '../find/dianzan';

	export default {
		name: 'contents',
	data(){
		return {
			msg:"",
		}
	},
		mounted() {

		},
		methods: {
		testa(){
			this.$router.push("testa");
		}
		},
		components:{
			box4,
			box6,
			box8
		}
	}
	
	
	
</script>

<style scoped>
	* {
		text-decoration: none;
		list-style: none;
		font-size: 0.36rem;
	}
	#con{
		height:11.14rem ;
		
	}
	.big{
		height:11.14rem ;
		overflow-y: auto;
		
		margin-top: 1rem;
		
	}
	
	.top-f {
		height: 1rem;
		font-size: 0.36rem;
		text-align: center;
		line-height: 1rem;
		font-weight: 900;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 99;
		background: #fff;
	}
	
	.box1 {
		width: 100%;
		text-align: center;
		margin-top: 0.1rem;
		height: 3.06rem;
	}
	
	.top-img {
		width: 7.25rem;
		border-radius: 0.15rem;
	}
	
	.box2 ul {
		height: 2rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		box-sizing: border-box;
	}
	
	.box2 ul li {
		height: 2rem;
		width: 25%;
	}
	
	.box2 ul li a {
		display: block;
		height: 2rem;
		width: 100%;
		text-align: center;
		overflow: hidden;
	}
	
	.box2 ul li a img {
		width: 0.84rem;
		display: block;
		display: block;
		margin: 0 auto;
		margin-top: 0.2rem;
	}
	
	.box2 ul li a p {
		font-size: 0.24rem;
		margin-top: 0.10rem;
		color: #9b9b9b;
	}
	
	.box3 {
		height: 1.88rem;
		position: relative;
		text-align: center;
	}
	.box3 h1{
		
	}
	.box3 span {
		float: right;
		font-size: 0.24rem;
		position: absolute;
		right: 0.3rem;
		top: 0.1rem;
		color: #8e8e8e;
	}
	
	.box3 span i {
		font-size: 0.24rem;
		margin-left: 0.1rem;
	}
	
	.box3 ul {
		width: 100%;
		overflow-x: auto;
		overflow-y:visible;
		white-space: nowrap;
		height: 1.04rem;
		margin-top: 0.2rem;
	}
	
	.box3 ul li {
		display: inline-block;
		width: 1.88rem;
		height: 1.04rem;
		margin-left: 0.04rem;
		margin-right: 0.04rem;
	}
	
	.box3 ul li a img {
		width: 1.88rem;
		height: 1.04rem;
	}
	.box5{
		width: 7.5rem;
		height: 1.2rem;
		line-height: 1.2rem;
		text-align: center;
		
	}
	
	.box5 a{
		display: inline-block;
		color: #4a4a4a;
		width: 7.5rem;
		height: 1.2rem;
		font-size:0.3rem ;
	}
	.box5 a i{
		font-size: 0.28rem;
	}
	
	
	.box7{
		width: 7.5rem;
		height: 1.2rem;
		line-height: 1.2rem;
		text-align: center;
		
	}
	
	.box7 a{
		display: inline-block;
		color: #4a4a4a;
		width: 7.5rem;
		height: 1.2rem;
		font-size:0.3rem ;
	}
	.box7 a i{
		font-size: 0.28rem;
	}
	
	
	
	
	
	
	
	
	
	
	
</style>