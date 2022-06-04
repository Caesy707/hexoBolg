import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './until/rem.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//富文本编辑器
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const app =createApp(App)

app.use(store).use(router).use(rem).use(ElementPlus).use(QuillEditor).mount('#app')

app.component('QuillEditor', QuillEditor)