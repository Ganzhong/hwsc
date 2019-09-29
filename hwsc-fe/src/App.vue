<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 15:19:03
 * @LastEditTime: 2019-09-26 22:15:13
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app">
    <router-view />
    <footer v-show="mclose">
      <div v-for="page of pages" @click="gotoPage(page)" :class="{current:page === currentPage }">
        <span style="font-size: 0.5rem;" v-bind:class="page.icon"></span>
        {{page.text}}
      </div>
    </footer>
  </div>
</template>
<script>
	export default {
		name:'app',
		data(){
      return {
      mclose: true,
				currentPage : undefined,
				pages: [
					{name:'home',text:'首页',path:'/',icon:'iconfont icon-shouye'},
					{name:'category',text:'分类',path:'/category',icon:'iconfont icon-leimupinleifenleileibie'},
					{name:'content',text:'发现',path:'/contents',icon:'iconfont icon-faxian'},
					{name:'cart',text:'购物车',path:'/cart',icon:'iconfont icon-gouwuche'},
					{name:'personal',text:'我的',path:'/personal',icon:'iconfont icon-wode'}
				]
			}
		},
		
  mounted() {
    for (let page of this.pages) {
      let pathname;
      if (location.hash.startsWith("#")) {
        pathname = location.hash.substr(1);
      } else {
        pathname = location.pathname;
      }
      if (page.path === pathname) {
        this.currentPage = page;
        break;
      }
    }

    this.$eventBus.$on("closefooter", e => {
      console.log("--------appvue mounted-233-");
      console.log(e.mclose);
      this.mclose = e.mclose
    });
  },
  methods: {
    gotoPage(page) {
      this.currentPage = page;
      this.$router.push({ name: page.name });
    }
  }
};
</script>
<style scoped>
	#app{
		width:100%;
		height:100%;
		position: relative;
	}
	footer {
		position: fixed;
		width:100%;
		height:1.2rem;
		bottom: 0rem;
		display: flex;
		font-size: 0.25rem;
		font-weight: bold;
		box-shadow: -1px -1px 5px lightgray;
		justify-content: space-around;
    background:white;
    z-index:999;
	}
	footer > div {
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.current{
		color:#a1070f;
	}
</style>
