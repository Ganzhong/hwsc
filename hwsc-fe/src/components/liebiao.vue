<template>
	<div class="lie">
		<ul>
			<li v-for="id of ids">{{id.name}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				ids:[
					{name:'新品'},
					{name:'华为手机'},
					{name:'荣耀手机'},
					{name:'智慧屏'},
					{name:'笔记本&平板'},
					{name:'智能穿戴'},
					{name:'智能家居'},
					{name:'专属配件'},
					{name:'通用配件'},
					{name:'生态产品'},
					{name:'增值服务'},
					{name:'智能计算'},
				]
			}
		}
	}
</script>
<style scoped>
	.lie{
		width:2.5rem;
		height:13rem;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.lie::-webkit-scrollbar{
		display: none;
	} 
	ul{
		height:14rem;
	}
	ul li{
		font-size: 0.3rem;
		padding-left: 0.2rem;
		margin-bottom: 0.6rem;
		margin-top: 0.1rem;
	}
</style>