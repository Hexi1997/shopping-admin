export default [
  { path: '/login', title: '登录', component: '@/pages/login/index' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        wrappers: ['@/wrappers/auth'],
        title: '主页',
        component: '@/pages/home/index',
        routes: [
          //默认选中用户1
          {
            path: '/',
            title: '用户1',
            component: '@/pages/user1/index',
          },
          {
            path: '/userone',
            title: '用户1',
            component: '@/pages/user1/index',
          },
          {
            path: '/usertwo',
            title: '用户2',
            component: '@/pages/user2/index',
          },
          {
            path: '/dvademo',
            title: 'dva demo',
            component: '@/pages/dvademo/index',
          },
        ],
      },
    ],
  },
];
