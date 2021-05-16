import React, { memo, useState } from 'react';
import { connect, tagItem } from 'umi';
import { Dispatch } from 'umi';

const DvaDemo = memo(function index({
  dispatch,
  tags = [],
}: {
  dispatch: Dispatch<string>;
  tags: tagItem[];
}) {
  const [value, setValue] = useState('');

  const handleClick = () => {
    //dispatch 发送获取tags的action
    console.log('触发onclick', value);
    dispatch({
      type: 'dvademo/fetchTags',
      payload: value,
    });
  };

  return (
    <div>
      <input
        value={value}
        placeholder="请输入筛选城市"
        onChange={(event) => {
          // console.log(event.target.value);
          setValue(event.target.value);
        }}
      />
      <button onClick={handleClick}>获取筛选后的tags数据</button>
      {tags.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
});

export default connect((state: { dvademo: { tags: tagItem[] } }) => {
  return {
    tags: state.dvademo.tags,
  };
})(DvaDemo);
