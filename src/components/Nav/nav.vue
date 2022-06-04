<template>
	<div class="Nav">
		<div class="topBox">
			<div class="toptitle">BLOG</div>
			<el-switch v-model="value" active-text="Open" inactive-text="Close"  @change="changeModel"/>
		</div>
		<div class="navBox">
			<ul>
				<li>
					<el-icon><HomeFilled /></el-icon>
					<router-link to='/home' class="link">Home</router-link>
				</li>
				<li>
					<el-icon><Menu /></el-icon>
					<router-link to='/Archives' class="link">Archives</router-link>
				</li>
				<li @click="clickSearch()">
					<el-icon><HelpFilled /></el-icon>
					Search
				</li>
				<li>
					<el-icon><Management /></el-icon>
					<router-link to='/markDown' class="link">CreateNew</router-link>
				</li>
			</ul>
		</div>
		<searchMask v-if="Show"></searchMask>
	</div>
</template>

<script>
	import searchMask from '../search/search.vue'
	import {Menu,HomeFilled,HelpFilled,Management} from '@element-plus/icons-vue'
	export default{
		name:'Nav',
		data() {
			return{
				value: false
			}
		},
		components:{
			searchMask,Menu,HomeFilled,HelpFilled,Management
		},
		methods:{
			clickSearch(){
				console.log("clickSearch")
				document.querySelector('html').style.overflowY = "hidden"
				document.scrollingElement.scrollTop = 0
				this.$store.commit('oprSearchMask',true)
			},
			changeModel(e){
				console.log(e)
				//1.背景变黑色
				if(e){
					document.documentElement.style.setProperty('--backgroundColor','#222325')
					document.documentElement.style.setProperty('--themeColor','#868686')
				}else{
					document.documentElement.style.setProperty('--themeColor','#fff')
					document.documentElement.style.setProperty('--backgroundColor','#eeeeee')
					
				}
			}
		},
		computed:{
			Show(){
				return this.$store.state.searchMaskShow
			}
		}
	}
</script>

<style lang="less" scoped>
	@media screen and (max-width:854px){
		@import './navphone.less';
	}
	@media screen and (min-width:854px){
		@import './nav.less';
	}
</style>
