<template>
	
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="msg of msgs"><img v-bind:src="msg.src" /></div>

			</div>
			<i class="iconfont icon-zuojiantou-tianchong " @click="goback"></i><span class="iconfont icon-iconfontgengduo"></span>
		</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/css/swiper.css';
	export default {
		
		data() {
			return {
				msgs: [{
						src: 'https://res.vmallres.com/pimages//product/6901443333400//428_428_FFF52FC8300511223A30ED8401D76D30BCBDBC5A3F75596Amp.png'
					},
					{
						src: 'https://res.vmallres.com/pimages//display/10086693893548/428_428_a_mobile08799420689FA9FD0309E619C88A3E3C8F0B2E14DDC00CF7.jpg'
					},
					{
						src: 'https://res.vmallres.com/pimages//product/6901443333400/group//428_428_0AF75F240E0EDDA6D2EC27958B0F5C71CC1673D7B7904757.png'
					},
					{
						src: 'https://res.vmallres.com/pimages//product/6901443333400/group//428_428_6183E1D983653A28905EABF6E5E0981AB2E7F7F7BA81833D.png'
					},
					{
						src: 'https://res.vmallres.com/pimages//product/6901443333400/group//428_428_7106F37047FD4F938CCA28C8AD1C7047AA68760B79150F01.png'
					},
					{
						src: 'https://res.vmallres.com/pimages//product/6901443333400/group//428_428_240FF84FFC11FF076DDAE74408DA1572D6AD7AFD6AD2510F.png'
					},
					{
						src: 'https://res.vmallres.com/pimages//product/6901443333400/group//428_428_0AF75F240E0EDDA6D2EC27958B0F5C71CC1673D7B7904757.png'
					},
					{
						src: 'https://res.vmallres.com/pimages//product/6901443333400//428_428_FFF52FC8300511223A30ED8401D76D30BCBDBC5A3F75596Amp.png'
					}
				]
			}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
            delay: 2000,//1秒切换一次
  },

			});
		},
		methods: {
		 goback(){
			  	this.$router.back();
			  }
		},
		components: {

		}
	}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: 7.0828rem;
		position: relative;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.swiper-slide img {
		height: 100%;
	}
	.swiper-container>i{
		position: absolute;
		left: 0.4rem;
		top: 0.2rem;
		font-size: 0.5rem;
		z-index: 999;
		color: #8e8e8e;
	}
	.swiper-container>span{
		position: absolute;
		right: 0.4rem;
		top: 0.18rem;
		font-size: 0.56rem;
		z-index: 999;
		color: #8e8e8e;
		
	}
</style>