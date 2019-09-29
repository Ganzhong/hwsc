<template>
	<div class="big">
		<ul>
			<li v-for="picc of piccs">
				<img v-bind:src="picc.path" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				piccs: [{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/19/355D2BEBA4B31A7083CB9B8901A5C60D933A39D1A07C8B77.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/B8A865019C9984F64592249CBF302E2D9EA50C5F818F6164.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/17FD5656FD0DC677A77E9ED9476A322FB466340C02DF4389.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/7AD8168B54B55575AB4CA17A39922F3074B0427CD4F69B27.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/F4A0B4DBF0FEE9C5994E4A39C46EC9C0237CDD6ECDA1ED90.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/E67B1AA16C38540320DD5E77CA24AB4F5B5DEDDBD25459FC.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/9DBF99B472F3032F4CCF8B1CFC4241CC4330A06F3F4A1B1E.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/803ADB3D921C3930F97DE66FA7FC53123B11D4D1D69C00BA.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/87F19E0C0C771411892E908A26F6DD7474D556B8C3E98E3C.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/F7DF3FA1371D81E6B9ABA0616BC16DC787B6FDCFE1AEA9F2.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/DB9AAD1930C2D2509181387566C6E1C97DB883C91DF373BB.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/75C3155CF9CE045B159345CAD5539D5B4C9B7CD19A1CEA99.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/964A8239DEC2A5D4A477FBC569FA86BA65B07E513F22F70D.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/231F66F24D510752DEBF190AE17C6C532A8E3EF2377216D6.jpg',

					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/666B6FAD406962547D73BB59BD20C7E7B132F5562B286830.jpg'
					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/E900E0D1A2299B03D98D991DE95EF94CA43709B0EA872663.jpg'
					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/3A0E4C1B930336C63E5077CE1E8F38737DD62CD848642A46.jpg'
					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/183332AA2CDF6314050EC7EF38CD587728B495A6A476AA78.jpg'
					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/294DA4884B87081FC8E412032029E368C9589912273F7C9F.jpg'
					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/159AA6649A459DC4AA98710E4A3AD5E59F48499B4890F966.jpg'
					},
					{
						path: 'https://res.vmallres.com/pimages/detailImg/2019/09/23/60F14FD6FCE0552D3566003DE19E80E3D12F1689706C06AE.jpg'
					}
					



				]

			}
		},

	}
</script>

<style scoped>
	* {}
	
	.big {
		width: 100%;
		
	}
	
	.big ul li {
		width: 100%;
	}
	.big ul li img{
		width: 100%;
	}
</style>