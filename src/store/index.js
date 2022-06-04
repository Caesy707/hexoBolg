import { createStore } from 'vuex'

export default createStore({
  state: {
		ArrayList: [],
		searchMaskShow:false
  },
  mutations: {
		initContentList(state,list){
			if(localStorage.getItem('contentList')){
			state.ArrayList = JSON.parse(localStorage.getItem('contentList'))
			console.log(state.ArrayList)
			}else{
				state.ArrayList = list
				localStorage.setItem('contentList',JSON.stringify(state.ArrayList))
			}
		},
		oprContentList(state, content){
			console.log(content)
			//1.追加数组
			console.log(state.ArrayList)
			state.ArrayList.push(content)
			console.log(state.ArrayList)
			//转换字符串，存入本地缓存
			localStorage.setItem('contentList',JSON.stringify(state.ArrayList))
		},
		nullContentList(state,content){
			state.ArrayList = content
			localStorage.setItem('contentList',JSON.stringify(state.ArrayList))
		},
		oprSearchMask(state,opr){
			state.searchMaskShow = opr
		}
  },
  actions: {
  },
  modules: {
  }
})
