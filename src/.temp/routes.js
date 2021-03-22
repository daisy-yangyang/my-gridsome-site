const c1 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\javaScript\\03-04-study-materials\\deploy\\my-gridsome-site\\src\\pages\\About.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-0-7-23-gridsome-app-pages-404-vue" */ "D:\\javaScript\\03-04-study-materials\\deploy\\my-gridsome-site\\node_modules\\_gridsome@0.7.23@gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\javaScript\\03-04-study-materials\\deploy\\my-gridsome-site\\src\\pages\\Index.vue")

export default [
  {
    path: "/about/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
