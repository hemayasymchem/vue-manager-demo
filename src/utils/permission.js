import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { getToken} from "./auth";

const whiteList = ['/login'] //不重向白名单

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!true) { // 实际判断是如果还有登录信息
    if (to.path === '/login') {
      next({ path: '/'})
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: '/login'})
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
