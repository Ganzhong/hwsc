<template>
		<div class="box4">
			<h1 class="hh1">口碑好货</h1>
				<ul>
					<li v-for="mas of pages">
						<img v-bind:src="mas.path" />
						<p>{{mas.name}}</p>
						<p>{{mas.name1}}</p>
						<p><span>{{mas.data}}</span><span>来自{{mas.read}}推荐</span></p>
						<div><i class="iconfont icon-dianzan">&nbsp;</i>{{mas.dianzan}}</div>
					</li>
						
						
						
					
				</ul>
			</div>
		
</template>

<script>
	 export default {
	 		data() {
			return {
				pages: [{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					{
						name: '华为P30 Pro玩游戏杠杠的，拍照很赞，电池也耐',
						path: 'https://res.vmallres.com/pimages//cop/goodRepute/JKDNJKQXBlaZZswHgOOC.jpg',
						name1: '太完美了！拿到手真惊艳到了，980玩游戏杠杠的，拍照简直是我用过最好的手机，电池也耐用！这次感觉到华为真崛起了！',
						data: '2019-9-24',
						read: '183***8875',
						dianzan:121

					},
					{
						name: '重磅发布！HUAWEI Mate30系列亮点解读',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YMT8gWa9wL9SD6ucZ1z5.jpg',
						name1: 'HUAWEI Mate 30系列，突破手机设计与科技的可能',
						data: '3019-9-24',
						read: 'bu**k',
						dianzan:121

					},
					
					{
						name: '参与互动赢荣耀20 PRO联名闪电鞋，快来参与！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/h2IGz12rKjv2Iz4kFrD1.jpg',
						name1: '极具冰岛幻境色彩标识的闪电鞋，搭配同款荣耀20 PRO，轻松“型”走街头！',
						data: '2019-8-24',
						read: 'zll**ff',
						dianzan:121

					},
					{
						name: '用一杯健康水，为你开启健康生活',
						path: 'https://res.vmallres.com/pimages//cop/topNews/jsDi30YM75RJ9QUcFvuP.jpg',
						name1: '目前这款产品正在参与华为商城折扣活动，原价2399元，现仅1799元。',
						data: '2019-8-24',
						read: '55655***yyy',
						dianzan:121

					},
					{
						name: '麒麟990内部是什么样的？这个漫画带你看懂',
						path: 'https://res.vmallres.com/pimages//cop/topNews/Vg2oclDozhzLNsJR7p1E.jpg',
						name1: '如果麒麟990 5G是一座工厂，也许就是这个样子的',
						data: '2019-9-5	4',
						read: '44***555',
						dianzan:121

					},
					{
						name: '你是个成熟的Mate30，该学会自己变大了！',
						path: 'https://res.vmallres.com/pimages//cop/topNews/YjuwljaYlTdeJB2HaJJO.jpg',
						name1: '关于华为智慧屏的更多秘密，9月26日等你一起探寻！',
						data: '2019-9-14',
						read: '俏皮**',
						dianzan:121

					},
					

				]

			}
		},
		
	 }
</script>

<style scoped>
	
	.box4 ul{
		
	}
	.hh1{
		font-size: 0.4rem;
		text-align: center;
	}
	.box4 ul li {
		text-align: center;
		height: auto;
		overflow: hidden;
		margin-top: 0.3rem;
		position: relative;
	}
	.box4 ul li div{
		position: absolute;
		bottom: 1.88rem;
		right: 0.32rem;
		width: 1.1rem;
		height: 0.4rem;
		background-color: rgba(0,0,0,0.5);
		color: #fff;
		font-size: 0.24rem;
		border-radius: 0.2rem;
		line-height: 0.4rem;
	}
	.box4 ul li div i{
		font-size: 0.3rem;
		color: #fff;
	}
	.box4 ul li img {
		width: 6.5rem;
	}
	.box4 ul li p:nth-child(2){
		font-size: 0.30rem;
		color: #333;
		text-align: left;
		text-indent: 0.3rem;
		margin-top: 0.1rem;
		height: 0.45rem;
		width: 100%;
	}
	.box4 ul li p:nth-child(3){
		font-size: 0.23rem;
		color: #666;
		text-align: left;
		padding-left: 0.3rem;
		width: 100%;
		height: 0.4rem;
		margin-top: 0.1rem;
		box-sizing: border-box;
	}
	.box4 ul li p:nth-child(4){
		width: 100%;
		height: 0.4rem;
		line-height: 0.4rem;
	}
	.box4 ul li p:nth-child(4) span:first-child{
		font-size: 0.2rem;
		float: left;
		margin-top: 0.2rem;
		margin-left: 0.3rem;
	}
	
.box4 ul li p:nth-child(4) span:last-child{
		float: right;
		font-size: 0.24rem;
		margin-top: 0.2rem;
		color: #999;
		margin-right: 0.4rem;
	}
	
</style>