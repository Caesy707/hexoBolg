<template>
	<div id="searchMask">
		<div class="searchBox">
			<input type="search" class="searchinput"  placeholder="Search!!!" @keyup.enter="getresult" @blur="hiddenMask()" autofocus="autofocus"/>
			<div class="searchContent">
				<div class="searchlist" v-for="(item,index) in searchlist" :key="index" @click="clickSearchList(item)">
					<div class="searchTitle">{{item.title}}</div>
					<div class="searchTime">{{item.time}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"searchMask",
		data() {
			return{
				contextlist:[],
				searchlist:[],
			}
		},
		methods:{
			hiddenMask(){
				if(this.$data.searchlist.length == 0){
					this.$store.commit('oprSearchMask',false)
					document.querySelector('html').style.overflowY = "auto"
					document.scrollingElement.scrollTop = 0
				}
			},
			clickSearchList(item){
				console.log("触发")
				this.$store.commit('oprSearchMask',false)
				this.$router.push({
					name:'detailContext',
					params:item
				})
				document.querySelector('html').style.overflowY = "auto"
				document.scrollingElement.scrollTop = 0
			},
			getresult(e){
				//初始化数组
				this.$data.searchlist = []
				//1.获取value值
				//2.拿到文章数组
				//3.运用for循环，对数组遍历，然后查询结果赋值新数组
				this.$data.contextlist = JSON.parse(JSON.stringify(this.$store.state.ArrayList))
				let length = this.$data.contextlist.length
				for(let i = 0 ; i<length ;i++){
					if(this.$data.contextlist[i].title == e.target.value){
						this.$data.searchlist.push(this.$data.contextlist[i])
					}
				}
			}
		}
	}
</script>

<style lang="less">
	@import './search.less';
</style>