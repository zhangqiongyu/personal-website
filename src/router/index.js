import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Blog from '@/views/Blog'
import Work from '@/views/Work'
import Resume from '@/views/Resume'
import About from '@/views/About'
import QRCode from '@/views/QRCode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: QRCode
    }
  ]
})
