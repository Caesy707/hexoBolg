<template>
	<div id="Archives">
		<div class="ArContent">
			<el-timeline>
				<el-timeline-item :timestamp="item.time" placement="top" :key="index" v-for="(item,index) in currentArray">
					<el-card @click="clickCard(item)">
						<h4>{{item.title}}</h4>
						<p>Tom committed {{item.time}}</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
		<el-pagination
			background="true" 
			layout="prev, pager, next" 
			:default-current-page= "1"
			:total = "length" 
			:page-size= "size" 
			@current-change="nowPage">
		</el-pagination>
	</div>
</template>

<script>
	export default{
		name:'Archives',
		data() {
			return{
				currentArray:[],
				contextArray:[],
				length:0,
				size:9,
			}
		},
		mounted() {
			this.$data.contextArray = this.$store.state.ArrayList
			this.$data.length = this.$data.contextArray.length
			console.log(this.$store.state.ArrayList)
			let e = 1
			for(let i = (e-1)*9 ;i < e*9;i++){
				console.log(1)
				if(this.$data.contextArray[i]){
					this.$data.currentArray.push(this.$data.contextArray[i])
				}
			}
		},
		methods:{
			clickCard(item){
				console.log(item)
				this.$router.push({
					name:'detailContext',
					params:item
				})
			},
			nowPage(e){
				this.$data.currentArray = []
				//1.获取当前页数n
				//2.数组范围就是n-1*4到n*4
				//3.利用slice(n-1*4，n*4)的方法切割数组
				console.log(e)
				for(let i = (e-1)*9 ;i < e*9;i++){
					console.log(this.$data.contextArray[i])
					if(this.$data.contextArray[i]){
						this.$data.currentArray.push(this.$data.contextArray[i])
					}
				}
			},
		}
		
	}
</script>

<style lang="less">
	@media screen and (max-width:854px) {
		@import 'Archivesphone.less';
	}
	@media screen and (min-width:854px) {
		@import './Archives.less';
	}
</style>
