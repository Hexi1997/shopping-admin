import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  //设置路由
  routes: routes,
  //开启ant-design-pro布局
  layout: {},
  //开启按需加载
  //dynamicImport: {},
  //避免浏览器缓存
  //hash: true,
  //设置路由前缀，通常用于部署到非根目录。
  //base: '/',
  //配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 publicPath 的值
  //publicPath: 'http://xxx.com/cdn',
  //打包输出目录
  //outputPath: 'build',
  //标题
  //title: 'UmiJs',
  //路由方式
  //history: {
  //  type: 'hash',
  //},
  //兼容设置
  //targets: {
  //  ie: 11,
  //},
  //开启代理
  //proxy: {
  //  '/api': {},
  //},
  //配置主题，实际上是配 less 变量。
  theme: {
    '@primary-color': '#1890ff',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  //快速刷新
  fastRefresh: {},
});
