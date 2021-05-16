import { Link, NavLink } from 'react-router-dom';
import './index.less';

export default function IndexPage(props: { children: React.ReactChildren }) {
  return (
    <div>
      <NavLink to="/userone">用户1</NavLink>
      <NavLink to="/usertwo">用户2</NavLink>
      {props.children}
    </div>
  );
}
