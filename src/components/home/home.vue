<template>
	<div id="home">
		<div class="contextall">
			<div class="context" v-for="(item, index) in currentList" :key="index">
				<div class="contextTitle" @click="clickTitle(item)">
					<el-icon><Connection /></el-icon>
					{{item.title}}
				</div>
				<div class="contextTime">
					<el-icon><Location /></el-icon>
					Posted on {{item.time}} | 
					<el-icon><User /></el-icon>
					Blog Casey
				</div>
				<div v-html="item.content"></div>
				<el-icon id="delete" @click="clickDelete(item.id)">
					<Delete />
				</el-icon>
			</div>
		</div>
		<el-pagination 
			background="true" 
			layout="prev, pager, next" 
			:default-current-page= "1"
			:total = "listcount" 
			:page-size= "size" 
			@current-change="nowPage">
		</el-pagination>
	</div>
</template>

<script>
	import { Connection ,Delete ,User,Location} from '@element-plus/icons-vue';
	export default{
		name:'home',
		components:{
			Connection,Delete,User,Location
		},
		data(){
			return{
				size:4,
				currentList:[],
				contextList:[],
				listcount:0,
				currentPage:1,
			}
		},
		beforeMount() {
			this.$data.currentList = []
			this.$data.contextList = this.$store.state.ArrayList
			this.$data.listcount = this.$data.contextList.length
			let e = 1
			for(let i = (e-1)*4 ;i < e*4;i++){
				if(this.$data.contextList[i]){
					this.$data.currentList.push(this.$data.contextList[i])
				}
			}
			console.log(this.$data.contextList)
		},
		methods:{
			clickDelete(id){
				this.$data.currentList = []
				let length = this.$data.contextList.length
				let newlist = []
				let e = this.$data.currentPage
				//获取id，遍历比较
				for(let i = 0;i< length;i++){
					if(this.$data.contextList[i].id != id ){
						newlist.push(this.$data.contextList[i])
					}
				}
				console.log(newlist)
				this.$data.contextList = newlist
				for(let i = (e-1)*4 ;i < e*4;i++){
					if(this.$data.contextList[i]){
						this.$data.currentList.push(this.$data.contextList[i])
					}
				}
				console.log(this.$data.currentList)
				this.$store.commit('nullContentList',this.$data.contextList)
				//改变条数
				this.$data.listcount = this.$data.contextList.length
			},
			nowPage(e){
				this.$data.currentList = []
				//1.获取当前页数n
				//2.数组范围就是n-1*4到n*4
				//3.利用slice(n-1*4，n*4)的方法切割数组
				console.log(e)
				this.$data.currentPage = e
				for(let i = (e-1)*4 ;i < e*4;i++){
					console.log(i)
					// console.log(this.$data.contextList[i])
					if(this.$data.contextList[i]){
						this.$data.currentList.push(this.$data.contextList[i])
					}
				}
			},
			clickTitle(e){
				console.log(e)
				this.$router.push({
					name:'detailContext',
					params:e
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@media screen and (max-width:854px) {
		@import './homephone.less';
		@import './homephone.css';
	}
	@media screen and (min-width:854px){
		@import './home.less';
		@import './home.css';
	}
</style>
