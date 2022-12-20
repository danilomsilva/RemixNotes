import { NavLink } from '@remix-run/react';

const NavItem = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => {
        const defaultStyle = 'font-semibold';
        return isActive
          ? `text-blue-500 ${defaultStyle}`
          : `text-gray-500 ${defaultStyle}`;
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;
