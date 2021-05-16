import { Model } from 'dva';
import { request } from 'umi';
export type tagItem = { name: string; value: number; type: number };
//实际上getTags这个网络请求方法应该拆分到service文件夹下面
const getTags = () => {
  return request('/api/tags');
};
export default {
  //model的命名控件
  namespace: 'dvademo',
  //初始化state
  state: {
    tags: [],
  },
  effects: {
    *fetchTags({ payload }, { call, put }) {
      const res = yield getTags();
      //这里直接用输入进行数据筛选，实际上payload应该作为参数传递给getTags方法
      //因为mockjs,没法模拟带参
      let filterList = [];
      if (!payload.trim()) {
        //如果筛选条件为空，直接返回所有
        filterList = res.list;
      } else {
        //如果有筛选条件，进行筛选
        filterList = res.list.filter((item: tagItem) => {
          if (item.name.includes(payload)) {
            return true;
          }
          return false;
        });
      }
      console.log(payload, filterList);
      //更新tags数组
      yield put({
        type: 'setTagList',
        payload: filterList,
      });
    },
  },
  reducers: {
    setTagList(state, action) {
      return { ...state, tags: (action as any).payload };
    },
  },
} as Model;
