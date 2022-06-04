<template>
	<aside class="Card">
		<div class="imgBox">	
			<img src="../../assets/image/header.jpg" alt="">
			<div class="userName">Casey</div>
			<div class="motton">在人生道路上追求完美</div>
			<div class="ArchiveNum">
				<div class="num">62</div>
				<div class="numlogo">post</div>
			</div>
			
			<div class="docuLogo">
				<el-icon><QuestionFilled /></el-icon>
				<el-icon><UploadFilled /></el-icon>
				<el-icon><RemoveFilled /></el-icon>
			</div>
		</div>
	</aside>
</template>

<script>
	import {QuestionFilled,UploadFilled,RemoveFilled} from '@element-plus/icons-vue'
	export default{
		name:'Card',
		components:{
			QuestionFilled,UploadFilled,RemoveFilled
		}
	}
</script>

<style lang="less">
	@media screen and (max-width:853.33px){
		.Card{
			display: none;
		}
	}
	@import './card.less';
</style>
