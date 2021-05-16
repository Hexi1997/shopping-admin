import { Redirect } from 'umi';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    //访问网络判断是否登录成功，没有网络，这里直接从storage中取值判断，登录时会存值
    if (localStorage.getItem('login') === '1') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [setLogin]);
  return { isLogin };
};

export default (props: { children: React.ReactChildren }) => {
  console.log('进入认证组件');
  const { isLogin } = useAuth();
  console.log(isLogin);
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
