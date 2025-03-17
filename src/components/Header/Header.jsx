import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <>
      <Link to="/">LearnLingo</Link>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Teachers</NavLink>
      </div>
      <div></div>
    </>
  );
}
