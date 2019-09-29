<<<<<<< HEAD
<!--
 * @Description: In User Settings Editim
 * @Author: your name
 * @Date: 2019-09-27 09:10:54
 * @LastEditTime: 2019-09-27 09:57:49
 * @LastEditors: Please set LastEditors
 -->
=======
>>>>>>> 78119503f28b4d0f6477de5ccaa442fc4bda53d1
<template>
	<div class="tupian" @click="goto01">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="pic of pics"><img v-bind:src="pic.src"></div>
		  </div>
		  <div class="swiper-pagination" slot="pagination"></div>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	import 'swiper/css/swiper.css';
	export default{
		data(){
			return {
				pics:[
					{src:'https://res.vmallres.com/pimages//pages/picImages/IS1W4CW57PWsVzhHZcw0.jpg'},
					{src:'https://res.vmallres.com/pimages//pages/picImages/HG6bBYyKAGKfzhmBqNXZ.jpg'},
					{src:'https://res.vmallres.com/pimages//pages/picImages/gO4yYgxlAADW7FZmxyck.jpg'},
					{src:'https://res.vmallres.com/pimages//pages/picImages/CwvvAYfwNkApqxiuJDXY.jpg'},
					{src:'https://res.vmallres.com/pimages//pages/picImages/9PYmIgEmnBvDD9tHzX8d.jpg'},
					{src:'https://res.vmallres.com/pimages//pages/picImages/p08CeBuLkJXehg8QZIQP.jpg'}
				]
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container', {
			  spaceBetween: 30,
			  centeredSlides: true,
			  autoplay: {
			    delay: 4000,
			    disableOnInteraction: false,
			  },
			  pagination: {
			    el: '.swiper-pagination',
			    clickable: true,
			  },
			});
		},
		methods:{
			goto01(){
				this.$router.push({path:'/category'});
			}
		}
	}
</script>

<style scoped>
	.tupian{
		width:100%;
		height:3.4rem;
		box-shadow: 0.1rem 0.1rem 0.1rem #eeeeee;
	}
	 html, body {
	  position: relative;
	  height: 100%;
	}
	body {
	  background: #eee;
	  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	  font-size: 14px;
	  color:#000;
	  margin: 0;
	  padding: 0;
	}
	.swiper-container {
	  width: 100%;
	  height: 100%;
	   border-radius: 0.7rem;
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
	.swiper-container-horizontal>.swiper-pagination-bullets{
		left:2.8rem;
	}
	.wenzi{
		width:100%;
		height:1rem;
		background: red;
	}
</style>