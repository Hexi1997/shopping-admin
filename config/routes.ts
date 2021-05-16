export default [
  { path: '/login', title: '登录', component: '@/pages/login/index' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        exact: true,
        path: '/',
        wrappers: ['@/wrappers/auth'],
        title: '主页',
        component: '@/pages/home/index',
      },
      { path: '/userone', title: '用户1', component: '@/pages/user1/index' },
      { path: '/usertwo', title: '用户2', component: '@/pages/user2/index' },
    ],
  },
];
