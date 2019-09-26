<template>
	<div class="box6">
		<p>新摄汇</p>
		<div class="tc-big">
			<div class="top-tc">
				<div class="top-tc-l">
					<img v-bind:src="pages[0].path"  />
					<i>{{pages[0].mas}}</i>
				</div>
				<div class="top-tc-r">
					<div class="top-tc-r-1">
						<img v-bind:src="pages[1].path"  />
						<i>{{pages[1].mas}}</i>
					</div>
					<div class="top-tc-r-2">
						<img v-bind:src="pages[2].path"  />
						<i>{{pages[2].mas}}</i>
					</div>
				</div>
			</div>
			<div class="but-tc">
				<div class="but-tc-l">
					<img v-bind:src="pages[3].path"  />
					<i>{{pages[3].mas}}</i>
				</div>
				<div class="but-tc-r">
					<img v-bind:src="pages[4].path"  />
					<i>{{pages[4].mas}}</i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	 		data() {
			return {
				pages: [
				{path: 'https://res.vmallres.com/pimages/cop/photo/AJ6md0joOgZ8DKQ58fYv.jpg',mas:'来自 HUAWEI P30 系列'},
				{path: 'https://res.vmallres.com/pimages/cop/photo/u3d10HNUIaPeai5xQ1vi.jpg',mas:'来自 荣耀20 系列'},
				{path: 'https://res.vmallres.com/pimages/cop/photo/ruLLXtQQ8NegAEVbmJkm.jpg',mas:'来自 nova 5系列'},
				{path: 'https://res.vmallres.com/pimages/cop/photo/kRg2iZ6dWBJDv4pXQZ5y.jpg',mas:'来自 HUAWEI Mate 20 系列'},
				{path: 'https://res.vmallres.com/pimages/cop/photo/PMdsUY2vQYm7naN0GJbx.jpg',mas:'来自 荣耀20 系列'},
					
					

				]

			}
		},
		
	 }
</script>

<style scoped>
	.box6{
		width: 100%;
		text-align: center;
		margin-top: 0.3rem;
	}
	.box6 img{
		width: 100%;
	}
	.box6 div{
		text-overflow:ellipsis;
		overflow:hidden;
		white-space: nowrap;
	}
	.tc-big{
		width: 7.2506rem;
		height: 5.8332rem;
		margin: 0 auto;
		border-radius: 0.3rem;
		overflow: hidden;
		margin-top: 0.3rem;
	}
	.top-tc{
		width: 7.2506rem;
		height: 3.8746rem;
		
		margin: 0 auto;
		
	}
	.top-tc-l{
		width: 4.4954rem;
		height: 3.8746rem;
		position: relative;
		float: left;
		
	}
	.box6 i{
		position: absolute;
		bottom: 0;
		left: 0;
		color: #fff;
		font-size: 0.22rem;
		font-style: normal;
		margin-bottom: 0.22rem;
		margin-left: 0.3rem;
		text-overflow:ellipsis;
		overflow:hidden;
		
	}
	
	.top-tc-l img{
		height: 100%;
		width: none;
	}
	.top-tc-r{
		height: 3.8746rem;
		width: 2.6826rem;
		margin-right: 0.02rem;
		float: right;
		position: relative;
	}
	.top-tc-r img{
		width: 100%;
	}
	.top-tc-r-1{
		width: 2.6826rem;
		height: 1.9166rem;
		position: relative;
		
	}
	.top-tc-r-2{
		width: 2.6826rem;
		height: 1.9166rem;
		margin-top: 0.03rem;
		position: relative;
		
	}
	.but-tc{
		height: 1.9166rem;
		width: 7.2506rem;
		margin-top: 0.05rem;
	}
	.but-tc-l{
		height: 1.9166rem;
		width: 2.6826rem;
		float: left;
		position: relative;
		
	}
	.but-tc-r{
		height: 1.9166rem;
		width:4.4954rem;
		float: right;
		
		position: relative;
	}
</style>