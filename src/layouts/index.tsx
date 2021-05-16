import React, { memo } from 'react';

export default memo(function index(props: { children: React.ReactChildren }) {
  return (
    <div>
      <div>Head</div>
      {props.children}
      <div>Footer</div>
    </div>
  );
});
