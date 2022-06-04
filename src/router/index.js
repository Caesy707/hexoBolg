import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
	children:[{
			path: '/',
			redirect: '/home'
		},{
			path:'/home',
			name:'home',
			component:()=>import('../components/home/home.vue')
		},{
			path:'/markDown',
			name:'MarkDown',
			component:()=>import('../components/MarkDown/markDown.vue')
		},{
			path:'/Archives',
			name:'Archives',
			component:()=>import('../components/Archives/Archives.vue')
		},{
			path:'/detailContext',
			name:'detailContext',
			component:()=>import('../components/detailContext/detailContext.vue')
		}
	]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
