import React, { memo, useCallback } from 'react';
import { Button } from 'antd';
import { history } from 'umi';

export default memo(function index() {
  const handleClick = useCallback(() => {
    console.log('点击了登录');
    //执行登录，登录成功后跳转到主页
    localStorage.setItem('login', '1');
    history.push('/');
  }, []);

  return <Button onClick={handleClick}>login</Button>;
});
