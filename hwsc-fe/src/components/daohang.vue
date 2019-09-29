<template>
	<div class="daohang">
	 <ul>
		 <li style="color:#a1070f;border-bottom:solid 0.03rem #a1070f;">推荐</li>
		 <li>华为</li>
		 <li>荣耀新品</li>
		 <li>Mate 30系列</li>
		 <li>数码惠</li>
	 </ul>
	</div>
</template>
<script>
	export default {
	}
</script>
<style scoped>
	.daohang{
		height:0.8rem;
		width:auto;
		overflow-x: auto;
		white-space: nowrap;
	}
	.daohang ul{
		list-style: none;
	}
	.daohang ul li{
		display:inline-block;
		font-size: 0.3rem;
		line-height: 0.6rem;
		margin: 0 0.3rem;
		margin-top: 0.1rem;
		color:black;
	}

</style>