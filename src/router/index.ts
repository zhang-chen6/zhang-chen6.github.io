import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/pages/home/index.vue'
import Project from '@/pages/project/index.vue'
import Share from '@/pages/share/index.vue'
import Note from '@/pages/note/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/project',
        component: Project
      },
      {
        path: '/share',
        component: Share
      },
      {
        path: '/note',
        component: Note
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})

// router.beforeEach((to, _from, next) => {
//   if (to.path != '/login' ) {
//     if (sessionStorage.getItem('token') == 'true') {
//       let info = sessionStorage.getItem('userInfo') || ''
//       let userInfo = JSON.parse(info)
//       if (userInfo.ROLE_ID == 'combatControls') {
//         if (to.path == '/dataControl') {
//           next()
//         } else if (to.path == '/dataFz') {
//           next({
//             path: '/dataControl',
//             query: {
//               alarm_no: to.query.alarm_no
//             }
//           })
//         } else {
//           next()
//         }
//       } else if (userInfo.ROLE_ID == 'dataAided') {
//         if (to.path == '/dataFz') {
//           next()
//         } else if (to.path == '/dataControl') {
//           next({
//             path: '/dataFz',
//             query: {
//               alarm_no: to.query.alarm_no
//             }
//           })
//         } else {
//           next()
//         }
//       } else if (userInfo.ROLE_ID == 'admin') {
//         next()
//       } else {
//         next()
//       }
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
