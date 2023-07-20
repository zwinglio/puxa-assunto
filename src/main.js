import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { inject } from '@vercel/analytics';

import './style.css'
import App from './App.vue'

const head = createHead()

createApp(App).use(head).mount('#app')

inject();