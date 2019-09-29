<template>
	<div class="lie">
		<ul>
			<li @click="getcolor(id)" :class="{current: id.pp === currentid}" v-for="id of ids">{{id.name}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				currentid:'1',
				ids:[
					{pp:'1',name:'新品'},
					{pp:'2',name:'华为手机'},
					{pp:'3',name:'荣耀手机'},
					{pp:'4',name:'智慧屏'},
					{pp:'5',name:'笔记本&平板'},
					{pp:'6',name:'智能穿戴'},
					{pp:'7',name:'智能家居'},
					{pp:'8',name:'专属配件'},
					{pp:'9',name:'通用配件'},
					{pp:'10',name:'生态产品'},
					{pp:'11',name:'增值服务'},
					{pp:'12',name:'智能计算'},
				]
			}
		},
		methods:{
			getcolor(id){
				this.currentid = id.pp;
				this.$eventBus.$emit('chulaiba',id.pp);
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
	.current{
		color:red;
		border-right: 0.05rem red solid;
	}
</style>