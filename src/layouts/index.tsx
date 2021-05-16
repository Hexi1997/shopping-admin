import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default memo(function index(props: { children: React.ReactChildren }) {
  return (
    <div>
      <div>Head</div>
      <NavLink to="/userone">用户1</NavLink>
      <NavLink to="/usertwo">用户2</NavLink>
      {props.children}
      <div>Footer</div>
    </div>
  );
});
