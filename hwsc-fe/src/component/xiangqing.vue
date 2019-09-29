<template>
<div class="x-big">
	
	<lb></lb>
	<wen></wen>
	
	<xuanze></xuanze>
	<transition>
		<toubu v-if="flag"></toubu>
	</transition>
	
	
	<xqt></xqt>
	
</div>
<!--<div>
	
</div>-->
	
</template>

<script>
	/*import Swiper from 'swiper';*/
	import toubu from '../xq/toubu.vue';
	import lb from '../xq/lunbo.vue';
	import wen from '../xq/wenzi.vue';
	import xuanze from '../xq/xuanze.vue';
	import xqt from  '../xq/xqt.vue';
	
	export default {
		name: 'xiangqing',
		data() {
			return {
				flag:false,
				msgs: [
				
				
				]
			}
		},
		mounted() {
			window.addEventListener('scroll', this.windowScroll);
		},
		methods: {
			windowScroll () {
			     // 滚动条距离页面顶部的距离
			     // 以下写法原生兼容
			     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop 
			      
			      if(scrollTop>150){
			      	this.flag=true;
			     
			      }
			       	if(scrollTop<150){
			      	this.flag=false;	
			      	}
			  }

			
		},
		components: {
		lb,
		wen,
		xuanze,
		toubu,
		xqt
		}
	}
</script>

<<style>
	.x-big{
		
		
	}
	.v-enter,
    .v-leave-to {
      opacity: 0;
      
    }

    /* v-enter-active 【入场动画的时间段】 */
    /* v-leave-active 【离场动画的时间段】 */
    .v-enter-active,
    .v-leave-active{
      transition: all 0.8s ease;
    }
</style>