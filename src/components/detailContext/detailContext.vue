<template>
	<div>
		<div class="context">
			<div class="contextTitle">
				<el-icon><Connection /></el-icon>
				{{context.title}}
			</div>
			<div class="contextTime">
				<el-icon><Location /></el-icon>
				Posted on {{context.time}} | 
				<el-icon><User /></el-icon>
				Blog Casey
			</div>
			<div v-html="context.content"></div>
		</div>
		<div class="articleReviews">
			<div class="description">
				<div>文章评论</div>
			</div>
			<div class="textareaBox">
				<textarea type="text" v-model="text"></textarea>
				<div class="submitText" @click="clickSubmit()">发布</div>
			</div>
			<div class="reviewlist">
				<div class="reviews" v-for="(item,index) in context.reviews" :key="index">
					<div class="header">
						<img src="../../assets/image/header.jpg" >
					</div>
					<div class="userInfo">
						<div class="user">
							<div class="username">匿名读友</div>
							<div class="time">{{item.time}}</div>
						</div>
						<div class="review">{{item.text}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Connection ,User,Location} from '@element-plus/icons-vue';
	export default{
		name:'detailcontext',
		components:{
			Connection,User,Location
		},
		data() {
			return{
				context:{},
				text:'',
			}
		},
		mounted() {
			this.$data.context = this.$route.params//object
			let reviewlist = this.$route.params.reviews
			let newlist = []
			if(reviewlist){
				let length = reviewlist.length
				//问题：由于对象强制转换字符串
				for(let i = 0;i< length;i++){
					// JSON.parse(reviewlist[i])
					newlist.push(JSON.parse(reviewlist[i]))
				}
				this.$data.context.reviews = newlist
			}
		},
		methods:{
			clickSubmit(){
				let review={
					text:this.$data.text,
					time:this.getcurrtime()
				}
				let Arraylist = this.$store.state.ArrayList
				let length = Arraylist.length
				this.$data.context.reviews.push(review)
				//1.获取文本内容，
				//2.用context.id去vuex数组中找到对应数组，并给传对象review和time添加review数组中，
				//3.将vuex同步和本地缓存同步
				
				if(this.$data.text){
					for(let i =0 ; i<length ; i++){
						if(Arraylist[i].id == this.$data.context.id){
							Arraylist[i].reviews.push(JSON.stringify(review))
						}
					}
					this.$store.commit('nullContentList',Arraylist)
					this.$data.text=""
				}else{
					//弹窗无消息
				}
				
			},
			getcurrtime(){
				var that = this
				var date = new Date();
				//年 getFullYear()：四位数字返回年份
				var year = date.getFullYear();  //getFullYear()代替getYear()
				//月 getMonth()：0 ~ 11
				var month = date.getMonth() + 1;
				//日 getDate()：(1 ~ 31)
				var day = date.getDate();
				//时 getHours()：(0 ~ 23)
				var hour = date.getHours();
				//分 getMinutes()： (0 ~ 59)
				var minute = date.getMinutes();
				var time = year + '-' + that.addZero(month) + '-' + that.addZero(day) + ' ' + that.addZero(hour) + ':' + that.addZero(minute);
				return time;
			},
			//小于10的拼接上0字符串
			addZero(s) {
				return s < 10 ? ('0' + s) : s;
			},
		}
	}
</script>

<style lang="less">
	@media screen and (min-width:854px) {
		@import './detailContext.less';
	}
	@media screen and (max-width:854px) {
		@import './detailphone.less';
	}
</style>
