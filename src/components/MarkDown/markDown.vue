<template>
	<div class="mavonEditor">
		<QuillEditor  :content="content"
						ref="myQuillEditor"
						:options="editorOption"
						@blur="onEditorBlur($event)"
						></QuillEditor>
		<div class="createButton" @click="createContent">创建文章</div>
		<div class="masktip" v-if="bigMask">
			<div class="textnameBox" v-if="titleMask">
				<div class="head">文章标题</div>
				<textarea type="text" class="textname" v-model="textName"/>
				<div class="button">
					<div class="surebutton" @click="clickSure()">确定</div>
					<div class="failbutton" @click="clickFail()">取消</div>
				</div>
			</div>
			<div class="successMask" v-if="tipMasks.status">{{tipMasks.tip}}</div>
		</div>
	</div>
</template>
<script>

export default {
	name:'mark'	,
	data() {
		return{
			bigMask:false,
			titleMask:false,
			currentContent:'',
			content:'<h2>I am Example</h2>',
			textName:"",
			//文本配件
			editArticleFrom: {
				id: '',//通过本地缓存获取数组长度算出
				title: '',//利用弹窗先让用户写出标题
				time:'',//利用时间戳
				content: '',
				reviews:[],
			},
			//弹窗控制
			tipMasks:{
				status:false,
				tip:"提交成功",
			}
		}
	},
	mounted() {
		let time = this.getcurrtime()
		console.log(time)
	},
    methods: {
		onEditorBlur(editor) {
			this.$data.currentContent = editor.value.children[0].innerHTML
		},
		//创建文章
		createContent(){
			document.querySelector('html').style.overflowY = "hidden"
			document.scrollingElement.scrollTop = 0
			this.$data.bigMask = true;//调用弹窗，让用户填写标题
			this.$data.titleMask = true;
		},
		//计算每次创建文章的id值，根据index值
		computerID(){
			//1.获取本地缓存数组
			//2.获取其长度，其id=length
			let currentNewList = JSON.parse(localStorage.getItem("contentList"));
			let id;
			if(currentNewList){
				id = currentNewList.length;	
			}else{
				id =0;
			}
			return id;
		},
		//获取当前时间
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
		clickSure(){
			//1.获取文本输入内容
			//2.将内容传给文章配件
			//3.创建文章
			//4.跳往详情页
			this.$data.editArticleFrom["title"]=this.$data.textName;
			this.$data.editArticleFrom["id"] = this.computerID();
			this.$data.editArticleFrom['time'] = this.getcurrtime();
			this.$data.editArticleFrom['content'] = this.$data.currentContent;
			this.$store.commit('oprContentList',this.$data.editArticleFrom)//将标签字符串交予vuex管理
			//4.弹窗提示
			let tip = "提交成功"
			// this.initForm()
			this.clickButtontip(tip,this.$data.editArticleFrom)
		},
		clickFail(){
			//1.弹窗提示，提交失败
			let tip = "提交失败"
			this.clickButtontip(tip)
		},
		//点击确定和取消，定时器设置
		clickButtontip(message,from){
			var that = this
			this.$data.bigMask = true;
			this.$data.titleMask = false;
			this.$data.tipMasks.status =  true;
			this.$data.tipMasks.tip = message;
			setTimeout(function(){
				// console.log(this)
				that.$data.bigMask = false;
				that.$data.titleMask = false;
				that.$data.tipMasks.status =  false;
				document.querySelector('html').style.overflowY = "auto"
				if(message == "提交成功"){
					that.$router.push({
						name:'detailContext',
						params:from
					})
				}
			},1000)
		}
    },
};
</script>
<style lang="less">
	@media screen and (max-width:854px) {
		@import './markphone.less';
	}

	@media screen and (min-width:854px){
		@import './mark.less';
	}

</style>
