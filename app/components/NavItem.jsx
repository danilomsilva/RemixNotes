import { NavLink } from '@remix-run/react';

const NavItem = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        const defaultStyle = 'font-semibold text-xl';
        return isActive
          ? `text-blue-500 ${defaultStyle}`
          : `text-black/75 ${defaultStyle}`;
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
