<template>
  <!-- <router-view/> -->
  <div class="app">
	<div class="hrlogo"></div>
	<div class="outlineBox">
		<div>
			<Nav></Nav>
			<Card></Card>
		</div>
		<index></index>
	</div>
  </div>
</template>
<script type="text/javascript">
import Nav from "./components/Nav/nav.vue"
import Card from "./components/Card/card.vue"
import index from "./views/index.vue"
export default {
  name: 'app',
  components: {
	Nav,Card,index
  },
  data() {
	return{
		mockData:[{
				content: "<p>Welcome to the NexT documentation site! NexT is a high quality elegant theme for Hexo. It is crafted from scratch, with love.</p><p><br></p><p><br></p><h3 class=\"ql-align-justify\">User Guide</h3><p><br></p><p><br></p><h3 class=\"ql-align-justify\">It's easy to set up NexT theme. Just follow documentation and create your personal website!</h3><p class=\"ql-align-justify\"><br></p><h3 class=\"ql-align-justify\">Feedback</h3><ul><li class=\"ql-align-justify\">Visit the Awesome NexT list to share plugins and tutorials with other users.</li><li class=\"ql-align-justify\">Join our Gitter chats.</li><li class=\"ql-align-justify\">Add or improve translation in few seconds.</li><li class=\"ql-align-justify\">Report a bug in GitHub Issues.</li></ul><p><br></p>",
				id: 0,
				time: "2022-06-03 21:01",
				title: "Welcome to the NexT Organization!",
				reviews:[]
			},{
				content: "<h2 class=\"ql-align-justify\">Bug Fixes</h2><ul><li>Fix double quotes inside cloudflare analytics HTML attribute</li><li>Optimize the position of copy-button</li></ul><p><br></p><p><br></p><h2 class=\"ql-align-justify\">&nbsp;Improvements</h2><ul><li>Minify algolia logo if not enabled</li><li>Change the default CDN provider from jsdelivr to cdnjs</li></ul><p><br></p><p><br></p><h2 class=\"ql-align-justify\">&nbsp;External Changes</h2><ul><li>Update dependency hexo to v6.2.0</li><li>Update dependency hexo to v6.2.0</li><li>Update dependency hexo to v6.2.0</li></ul><p><br></p><h2 class=\"ql-align-justify\">Localization</h2><ul><li>Optimize the position of copy-button</li></ul>",
				id: 1,
				time: "2022-06-03 21:04",
				title: "NexT 8.12.1 Released",
				reviews:[]
			}
		]
	}
  },
  mounted() {
		let list = this.$data.mockData
		console.log(list)
		//1.从入口进来，把本地缓存的list初始化到vuex中
		this.$store.commit("initContentList",list)
  }
}
</script>
<style>
	@media screen and (max-width:854px){
		.outlineBox{
			width: 100%;
			margin: 0 auto;
		}
	}
	@media screen and (min-width:854px) {
		.outlineBox{
			width: 72.5rem;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
		}
	}
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
		background: var(--backgroundColor);
	}
	.hrlogo{
		width: 100%;
		height: 0.1875rem;
		background: #000;
		position: absolute;
		z-index: 100;
	}
	:root{
		--themeColor:#fff;
		/* 导航栏卡片字体颜色 */
		--fontColor:#555555;
		--backgroundColor:#eeeeee;
		/* 导航栏卡片点击颜色 */
		--navCardClickColor:#f5f5f5;
		/* 文章标题字体颜色 */
		--titleColor:#555555;
		/* 时间字体颜色 */
		--timeColor:#999999;
		/* 文章textarea颜色 */
		--textareaColor:#f7f7f7;
		/* --themeColor:#868686; */
		/* 导航栏卡片字体颜色 */
		/* --fontColor:#555555; */
		/* --backgroundColor:#222325; */
		/* 导航栏卡片点击颜色 */
		/* --navCardClickColor:#f5f5f5; */
	}
</style>
